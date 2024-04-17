const { Router } = require("express");
const {
  loginHandler,
  singInHandler,
  logOutHandler,
  confirmAccountHandler,
  forgetPasswordHandler,
  changePasswordHandler,
} = require("../../handlers/authHandler");
const authRouter = Router();

authRouter.post("/login", loginHandler);
authRouter.post("/singin", singInHandler);

authRouter.post("/logout/:id", logOutHandler);

authRouter.get("/confirm/:token", confirmAccountHandler);

authRouter.get("/mailtoreset/:email", forgetPasswordHandler);
authRouter.post("/changepassword/:token", changePasswordHandler);

module.exports = authRouter;
