const {
  login,
  confirmAccount,
  resetPassword,
  sendEmailToResetPassword,
  singUp,
  logOutUser,
} = require("../controllers/auth/authController");

const loginHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const response = await login(email, password);

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
    const {token} = req.params;

    await confirmAccount(token);
    return res
      .status(200)
      .json({ error: false, response: "Email succesfully activated" });
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
    // console.log(token, password)
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
};
