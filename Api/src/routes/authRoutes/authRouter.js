const { Router } = require("express");
const {
  loginHandler,
  singUpHandler,
  persistanceHandler,
  confirmAccountHandler,
  forgetPasswordHandler,
  changePasswordHandler,
  logOutHandler,
} = require("../../handlers/authHandler");
const validateResults = require("../../middleware/expressValidator/expressValidation");
const { loginValidation, registerValidation } = require("../../middleware/expressValidator/validators");
const { isAutenticated } = require("../../middleware/tokenAuthMiddlewares");
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

authRouter.get('/persistanceCheck', isAutenticated, persistanceHandler)

authRouter.post('/logout', isAutenticated, logOutHandler)

authRouter.get("/confirm/:token", confirmAccountHandler);

authRouter.get("/mailtoreset/:email", forgetPasswordHandler);
authRouter.post("/changepassword/:token", changePasswordHandler);

module.exports = authRouter;
