const {
  User,
  UserCredential,
  TokenWhiteList,
  UserRole,
  UserAdress,
} = require("../../db/conn");
const {
  sendResetPasswordEmail,
  sendConfirmationEmail,
} = require("../../utils/emailTemplate");
const bcrypt = require("bcrypt");
const {
  tokenSign,
  verifyToken,
  checkWhiteListedToken,
} = require("../../utils/jwt/tokenGenerator");

const singUp = async (userData) => {
  // DATA
  const {
    firstName,
    lastName,
    email,
    photo,
    birthday,
    nacionality,
    dni,
    password,
    adress,
  } = userData;

  const {
    country = "",
    state = "",
    city = "",
    street = "",
    number = "",
    zipCode = "",
  } = adress;

  const userCart = [];
  const userWishList = [];

  // USERCREATION

  // CREDENTIALS
  const userCredential = new UserCredential({
    email,
    password,
  });

  await userCredential.save();

  // ROLE
  const existingUsersCount = await User.countDocuments();
  const role = existingUsersCount === 0 ? "ADMIN" : "USER";

  const userRole = new UserRole({
    role,
  });

  await userRole.save();

  // ADRESS
  const userAddress = new UserAdress({
    country,
    state,
    city,
    street,
    number,
    zipCode,
  });
  await userAddress.save();
  // USER
  const user = new User({
    firstName,
    lastName,
    email,
    photo,
    birthday,
    nacionality,
    dni,
    userCart,
    userWishList,
    credentials: userCredential._id,
    role: userRole._id,
    adress: userAddress._id,
  });
  await user.save();

  const confirmationEmailToken = await tokenSign({ userId: user.id }, "2d");

  await sendConfirmationEmail(
    process.env.EMAIL_MAILER,
    email,
    confirmationEmailToken,
    process.env.API_URL
  );
  return `${user.firstName} succesfolly created`;
};

const login = async (email, password) => {
  const userCredentials = await UserCredential.findOne({ email });
  if (!userCredentials) throw new Error("Wrong Credentials");

  const dbPassword = userCredentials.password;
  const isPasswordMatching = await bcrypt.compare(password, dbPassword);
  if (!isPasswordMatching) throw new Error("Wrong Credentials");

  const user = await User.findOne({ email });
  const role = await UserRole.findById(user.role);

  const accesToken = await tokenSign({ id: user._id, role }, "2h", false);

  return {
    accesToken,
  };
};

const confirmAccount = async (token) => {
  const isTokenListed = await checkWhiteListedToken(token);
  if (!isTokenListed) throw new Error("Wrong Credentials");

  const decodedToken = await verifyToken(token);

  const response = await User.findByIdAndUpdate(
    { _id: decodedToken.id },
    { isActive: true },
    { new: true }
  );

  await TokenWhiteList.deleteOne(token);

  return response;
};

const sendEmailToResetPassword = async (email) => {
  const user = await User.findOne(email);
  const dataForToken = {
    email: user.email,
    id: user.id,
  };
  const resetToken = await tokenSign(dataForToken, "2h");

  const response = await sendResetPasswordEmail(
    process.env.EMAIL_MAILER,
    dataForToken.email,
    resetToken,
    process.env.FRONTEND_URL
  );
  console.log({ responseDelController: response });

  return response;
};

const resetPassword = async (newPassword, token) => {
  const userDataFromtoken = await verifyToken(token);
  if (!userDataFromtoken) {
    return {
      error: true,
      response: "Token incorrecto",
    };
  }
  const user = await User.findById(userDataFromtoken.id);
  if (userDataFromtoken.email !== user.email) {
    return {
      error: true,
      response: "Token incorrecto",
    };
  }
  const userCredentials = await UserCredential.findById(user.credentials);
  if (!userCredentials) {
    return {
      error: true,
      response: "Credenciales no encontradas",
    };
  } else {
    await logOutUser(token);
    await userCredentials.update({
      password: await bcrypt.hash(newPassword, 8),
    });
    await userCredentials.save();
    return {
      error: false,
      response: "Password actualizado",
    };
  }
};

module.exports = {
  singUp,
  login,
  confirmAccount,
  sendEmailToResetPassword,
  resetPassword,
};
