const { User, UserCredential, UserRole, UserAdress } = require("../../db/conn");

const getUser = async () => {
  const existingUsersCount = await User.countDocuments();
  if (existingUsersCount < 1)
    return { error: true, response: "There are no users" };
  const user = await User.find().populate("role").populate("adress").exec();

  return { error: false, response: user };
};
const updateUser = async (data) => {};
const postNewUser = async (data) => {
  const {
    firstName,
    lastName,
    email,
    birthday,
    nacionality,
    password,
    adress,
  } = data;
  const { country, state, city, street, number, zipCode } = adress;

  const userCredential = new UserCredential({
    password,
  });

  await userCredential.save();

  const existingUsersCount = await User.countDocuments();
  const role = existingUsersCount === 0 ? "ADMIN" : role || "USER";

  const userRole = new UserRole({
    role,
  });

  await userRole.save();

  const userAddress = new UserAdress({
    country,
    state,
    city,
    street,
    number,
    zipCode,
  });
  await userAddress.save();

  try {
    const user = new User({
      firstName,
      lastName,
      email,
      birthday,
      nacionality,
      credentials: userCredential._id,
      role: userRole._id,
      adress: userAddress._id,
    });
    await user.save();

    console.log(user);

    return { error: false, response: user.firstName };
  } catch (error) {
    return { error: true, response: error.message };
  }
};

const deleteUser = async (id) => {};

module.exports = {
  getUser,
  updateUser,
  postNewUser,
  deleteUser,
};
