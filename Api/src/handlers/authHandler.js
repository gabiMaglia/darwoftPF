const { login, confirmAccount } = require("../controllers/auth/authController");

const loginHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const response = await login(email, password)
    console.log(response)
    res.status(200).json({login: true, response})
  } catch (error) {
    next(error);
  }
};
const singInHandler = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
const logOutHandler = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
const confirmAccountHandler = async (req, res, next) => {
  try {
    const token = req.params
    await confirmAccount(token)
    res.status(200).json({error: false, response: "Email succesfully activated"})
  } catch (error) {
    next(error);
  }
};

module.exports = { loginHandler, singInHandler, logOutHandler, confirmAccountHandler };
