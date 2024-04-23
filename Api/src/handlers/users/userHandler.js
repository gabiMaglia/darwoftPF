const {
  getUser,
  getUserById,
  postNewUser,
  updateUser,
  deleteUser,
} = require("../../controllers/users/userController");
// GET USER
const getUserHandler = async (req, res, next) => {
  try {
    const { response } = await getUser();
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error)
  }
};
// GET USERByID
const getUserbyIdHandler = async (req, res, next) => {
  const {id} = req.params
  try {
    const { response } = await getUserById(id);
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error)
  }
};
// POST USER
const postUserHandler = async (req, res, next) => {
  try {
    const { newUserData } = req.body;
    const { response } = await postNewUser(newUserData);
    return res.status(200).json({error: false, message: `${response} Successfully created`});
  } catch (error) {
    next(error)
  }
};
// UPDATE USER
const updateUserHandler = async(req, res, next) => {
  try {
    const {id} = req.params
    const { userData } = req.body
    
    const  response  = await updateUser(id, userData) 
    return res.status(200).json({ error: false, message: response });
    
  } catch (error) {
    next(error)
  }
};
// DELETE USERByID
const deleteUserHandler = async(req, res, next) => {
  try {
    const { id } = req.params
    const response = await deleteUser(id);
    return res.status(200).json({ error: false, message: response });
  } catch (error) {
    next(error)
  }
};

module.exports = {
  getUserHandler,
  getUserbyIdHandler,
  postUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
