const {
  getUser,
  postNewUser,
  updateUser,
  deleteUser,
} = require("../../controllers/users/userController");

const getUserHandler = async (req, res) => {
  try {
    const { response } = await getUser();
    if (response.error) {
      return res.status(404).json({ error: true, message: response });
    }
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    return res.status(500).json({ error: true, message: error.message });
  }
};
const postUserHandler = async (req, res) => {
  try {
    const { newUserData } = req.body;

    const newUser = await postNewUser(newUserData);
    if (newUser.error)
      return res.status(404).json({ error: true, message: newUser.response });
    else
      return res
        .status(200)
        .json({
          error: false,
          message: `${newUser.response} Successfully created`,
        });
  } catch (error) {
    return res.status(500).json({ error: true, message: error });
  }
};
const updateUserHandler = (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: true, message: error });
  }
};
const deleteUserHandler = (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: true, message: error });
  }
};

module.exports = {
  getUserHandler,
  postUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
