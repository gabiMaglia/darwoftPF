const errors = require("../../utils/errors");
const { User, UserCredential, UserRole, UserAdress } = require("../../db/conn");
const { sendConfirmationEmail } = require("../../utils/emailTemplate");
const { tokenSign } = require("../../utils/jwt/tokenGenerator");

// GET
const getUser = async () => {
  const existingUsersCount = await User.countDocuments();
  if (existingUsersCount < 1) throw new Error(errors.user.userNotFound);

  const users = await User.find().populate("role").populate("adress").exec();

  return { error: false, response: users };
};
const getUserById = async (id) => {
  const existingUsersCount = await User.countDocuments();
  if (existingUsersCount < 1) throw new Error(errors.user.userNotFound);

  const user = await User.findOne({ _id: id })
    .populate("role")
    .populate("adress")
    .exec();
  if (!user) throw new Error(errors.user.userNotFound);

  return { error: false, response: user };
};
// UPDATE
const updateUser = async (id, userData) => {
  const existingUser = await User.findById(id);
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

  if (userData.email && userData.email !== existingUser.email) {
    await User.findByIdAndUpdate(id, { isActive: false });

    const confirmationEmailToken = await tokenSign({ id }, "2d");

    await sendConfirmationEmail(
      process.env.EMAIL_MAILER,
      email,
      confirmationEmailToken,
      process.env.API_URL
    );
  }
  const updatedUser = await User.findByIdAndUpdate(
    id,
    {
      firstName,
      lastName,
      email,
      photo,
      birthday,
      nacionality,
      dni,
    },
    { new: true }
  );

  if (role)
    await UserRole.findOneAndUpdate({ _id: updatedUser.role }, role, {
      new: true,
    });
  if (password)
    await UserCredential.findOneAndUpdate(
      { _id: updatedUser.credentials },
      password,
      { new: true }
    );
  if (adress) {
    const { country, state, city, street, number, zipCode } = adress;
    await UserAdress.findOneAndUpdate(
      { _id: updatedUser.adress },
      { country, state, city, street, number, zipCode },
      { new: true }
    );
  }

  return updatedUser;
};
// DELETE
const deleteUser = async (id) => {
  const user = await User.findById(id);

  const { deletedCount } = await User.deleteOne({ _id: id });
  if (deletedCount === 0) {
    throw new Error(errors.user.userNotFound);
  }
  const { deletedCredCount } = await UserCredential.deleteOne({
    _id: user.credentials,
  });
  if (deletedCredCount === 0) {
    throw new Error(errors.user.userNotFound);
  }
  const { deletedAdressCount } = await UserAdress.deleteOne({
    _id: user.adress,
  });
  if (deletedAdressCount === 0) {
    throw new Error(errors.user.userNotFound);
  }
  const { deletedRoleCount } = await UserRole.deleteOne({ _id: user.role });
  if (deletedRoleCount === 0) {
    throw new Error(errors.user.userNotFound);
  }

  return { error: false, response: "User successfully deleted" };
};
module.exports = {
  getUser,
  getUserById,
  updateUser,
  deleteUser,
};
