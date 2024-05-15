const errors = require("../../utils/errors");
const { User, UserCredential, UserRole, UserAdress } = require("../../db/conn");

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
    .select({
      credentials: 0,
      createdAt: 0,
      updatedAt: 0,
      __v: 0,
    })
    .exec();
  if (!user) throw new Error(errors.user.userNotFound);

  return { error: false, response: user };
};
// UPDATE
const updateUser = async (id, userData) => {
  const currentUser = await User.findById(id);

  const {
    firstName = currentUser.firstName,
    lastName = currentUser.lastName,
    photo = currentUser.photo,
    birthday = currentUser.birthday,
    nationality = currentUser.nationality,
    dni = currentUser.dni,
    adress = currentUser.adress,
  } = userData;

  if (adress) {
    const { country, state, city, street, number, zipCode } = adress;
    await UserAdress.findByIdAndUpdate(
      currentUser.adress,
      {
        $set: {
          ...(country && { country }),
          ...(state && { state }),
          ...(city && { city }),
          ...(street && { street }),
          ...(number && { number }),
          ...(zipCode && { zipCode }),
        },
      },
      { new: true }
    );

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          ...(firstName && { firstName }),
          ...(lastName && { lastName }),
          ...(photo && { photo }),
          ...(birthday && { birthday }),
          ...(nationality && { nationality }),
          ...(dni && { dni }),
        },
      },
      { new: true }
    )
      .populate("role")
      .populate("adress");

    if (!updatedUser) throw new Error(errors.user.userNotFound);
    return updatedUser;
  }
};
// DELETE
const deleteUser = async (id) => {

console.log(id)
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

  return { error: false, response: "Usuario correctamente eliminado" };
};
module.exports = {
  getUser,
  getUserById,
  updateUser,
  deleteUser,
};
