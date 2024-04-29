const {
  getUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../../controllers/users/userController");
// GET USER
const getUserHandler = async (req, res, next) => {
  try {
    const { response } = await getUser();
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};
// GET USERByID
const getUserbyIdHandler = async (req, res, next) => {
  const { id } = req.params;
  try {
    const { response } = await getUserById(id);
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};

// UPDATE USER
const updateUserHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { userData } = req.body;

    const response = await updateUser(id, userData);
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};
// DELETE USERByID
const deleteUserHandler = async (req, res, next) => {
  try {
    // DEJO EL DELETE EN RESPONSABILIDAD UNICA DE CADA USUARIO 
    // UN ADMIN NO PUEDE ELIMINAR OTRA CUENTA QUE NO SEA LA SUYA
    const id = req.userId;
    const response = await deleteUser(id);
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserHandler,
  getUserbyIdHandler,
  updateUserHandler,
  deleteUserHandler,
};
