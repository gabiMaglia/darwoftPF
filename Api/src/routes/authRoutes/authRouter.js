const { Router } = require("express");
const {
  loginHandler,
  singUpHandler,
  confirmAccountHandler,
  forgetPasswordHandler,
  changePasswordHandler,
} = require("../../handlers/authHandler");
const validateResults = require("../../middleware/expressValidator/expressValidation");
const { loginValidation, registerValidation } = require("../../middleware/expressValidator/validators");
const authRouter = Router();

authRouter.post(
  "/login",
  loginValidation,
  validateResults,
  loginHandler
);
authRouter.post(
  "/singup",
  registerValidation,
  validateResults,
  singUpHandler
);

authRouter.get("/confirm/:token", confirmAccountHandler);

authRouter.get("/mailtoreset/:email", forgetPasswordHandler);
authRouter.post("/changepassword/:token", changePasswordHandler);

module.exports = authRouter;
