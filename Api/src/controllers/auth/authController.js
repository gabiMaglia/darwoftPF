const { User, UserCredential, TokenWhiteList } = require("../../db/conn");
const {sendResetPasswordEmail} = require('../../utils/emailTemplate')
const bcrypt = require("bcrypt");
const { tokenSign, verifyToken, checkWhiteListedToken } = require("../../utils/jwt/tokenGenerator");

const login = async (email, password) => {
  const userCredentials = await UserCredential.findOne({ email });
  if (!userCredentials) throw new Error("Wrong Credentials");

  const dbPassword = userCredentials.password;
  const isPasswordMatching = await bcrypt.compare(password, dbPassword);
  if (!isPasswordMatching) throw new Error("Wrong Credentials");

  const user = await User.findOne({ email });

  const accesToken = await tokenSign({ user }, "1h");

  return {
    accesToken,
  };
};

const logOut = async () => {};

const confirmAccount = async (token) => {

  const isTokenListed =  await checkWhiteListedToken(token);
  if (!isTokenListed) throw new Error("Wrong Credentials");

  const decodedToken = await verifyToken(token);
  const response = User.updateOne({_id:decodedToken.userId}, {isActive: true})
  
  await TokenWhiteList.deleteOne(token)

  return response
}

const sendEmailToResetPassword = async (email) => {
  const user = await User.findOne(email);
  const dataForToken = {
    email: user.email,
    id: user.id,
  };
  const resetToken = await tokenSign(dataForToken, '2h');
  console.log("preresponse")
  const response = await sendResetPasswordEmail(
    process.env.EMAIL_MAILER,
    dataForToken.email,
    resetToken,
    process.env.FRONTEND_URL
  );
  console.log({responseDelController: response})
  
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

module.exports = { login, logOut, confirmAccount, sendEmailToResetPassword, resetPassword };
