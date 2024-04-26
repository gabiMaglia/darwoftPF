const { Router } = require("express");
const {
  loginHandler,
  singUpHandler,
  confirmAccountHandler,
  forgetPasswordHandler,
  changePasswordHandler,
} = require("../../handlers/authHandler");
const authRouter = Router();

authRouter.post("/login", loginHandler);
authRouter.post("/singup", singUpHandler);


authRouter.get("/confirm/:token", confirmAccountHandler);
authRouter.get("/mailtoreset/:email", forgetPasswordHandler);
authRouter.post("/changepassword/:token", changePasswordHandler);

module.exports = authRouter;
