require("dotenv").config();

const {
  login,
  confirmAccount,
  resetPassword,
  sendEmailToResetPassword,
  singUp,
  logOutUser,
} = require("../controllers/auth/authController");
const { getUserById } = require("../controllers/users/userController");
const loginHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const response = await login(email, password);

    res.status(200).json({ login: true, response });
  } catch (error) {
    next(error);
  }
};
const persistanceHandler = async (req, res, next) => {
  try {
    const { userId } = req;
    const { response } = await getUserById(userId);
    res.status(200).json({ login: true, response });
  } catch (error) {
  
    next(error);
  }
};
const singUpHandler = async (req, res, next) => {
  try {
    const { userData } = req.body;
    const response = await singUp(userData);
    res.status(200).json({ error: false, response });
  } catch (error) {
    next(error);
  }
};

const confirmAccountHandler = async (req, res, next) => {
  try {
    const { token } = req.params;

    await confirmAccount(token);
    return res
      .redirect(`${process.env.FRONTEND_URL}/account_confirmed`)
  } catch (error) {
    next(error);
  }
};
const forgetPasswordHandler = async (req, res, next) => {
  try {
    const email = req.params;
    const message = `Check your email to continue`;

    const response = await sendEmailToResetPassword(email);
    return res.status(200).send(`${response}, ${message}`);
  } catch (error) {
    next(error);
  }
};
const changePasswordHandler = async (req, res, next) => {
  try {
    const token = req.params;
    const password = req.body;
    const response = await resetPassword(token, password);
    return res.status(200).json({ error: false, response });
  } catch (error) {
    next(error);
  }
};
const logOutHandler = async (req, res, next) => {
  try {
    const token = req.token;
    const response = await logOutUser(token);
    if (response) return res.status(200).json({ error: false, response });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginHandler,
  singUpHandler,
  logOutHandler,
  confirmAccountHandler,
  forgetPasswordHandler,
  changePasswordHandler,
  persistanceHandler,
};
