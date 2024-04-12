const { User, UserCredential, UserRole, UserAdress } = require("../../db/conn");
// GET
const getUser = async () => {
  const existingUsersCount = await User.countDocuments();
  if (existingUsersCount < 1) throw new Error("User not found");

  const users = await User.find().populate("role").populate("adress").exec();

  return { error: false, response: users };
};
const getUserById = async (id) => {
  const existingUsersCount = await User.countDocuments();
  if (existingUsersCount < 1) throw new Error("User not found");

  const user = await User.findOne({ _id: id })
    .populate("role")
    .populate("adress")
    .exec();
  if (!user) throw new Error("User not found");

  return { error: false, response: user };
};
// UPDATE
const updateUser = async ({ _id: id }, userData) => {
  const {
    firstName,
    lastName,
    email,
    photo,
    birthday,
    nacionality,
    dni,
    role,
    password,
    adress,
  } = userData;
  // TODO if email changes send confirmation email again and change isActive to false
  const updatedUser = await User.findOneAndUpdate(id, {
    firstName,
    lastName,
    email,
    photo,
    birthday,
    nacionality,
    dni,
  });

  if (role) await UserRole.findOneAndUpdate({ _id: updatedUser.role }, role);
  if (password)
    await UserCredential.findOneAndUpdate(
      { _id: updatedUser.credentials },
      password
    );
  if (adress) {
    const { country, state, city, street, number, zipCode } = adress;
    await UserAdress.findOneAndUpdate(
      { _id: updatedUser.adress },
      { country, state, city, street, number, zipCode }
    );
  }

  return updatedUser;
};
// POST
const postNewUser = async (newUserData) => {
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
  } = newUserData;

  const {
    country = "",
    state = "",
    city = "",
    street = "",
    number = "",
    zipCode = "",
  } = adress;
  // USERCREATION

  // CREDENTIALS
  const userCredential = new UserCredential({
    username : email,
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
    credentials: userCredential._id,
    role: userRole._id,
    adress: userAddress._id,
  });
  await user.save();
  // TODO send confirmation email
  return { error: false, response: user.firstName };
};
// DELETE
const deleteUser = async (id) => {
  const { deletedCount } = await User.deleteOne({ _id: id });
  if (deletedCount === 0) {
    throw new Error("User not found");
  }

  return { error: false, response: deletedCount };
};

module.exports = {
  getUser,
  getUserById,
  updateUser,
  postNewUser,
  deleteUser,
};
