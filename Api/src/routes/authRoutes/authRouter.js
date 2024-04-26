const { Router } = require("express");
const {body} = require('express-validator')
const {
  loginHandler,
  singUpHandler,
  confirmAccountHandler,
  forgetPasswordHandler,
  changePasswordHandler,
} = require("../../handlers/authHandler");
const validateResults = require("../../middleware/expressValidation");
const authRouter = Router();

authRouter.post("/login", body('email').isEmail(), body('password').isLength({min:5}), validateResults, loginHandler);
authRouter.post("/singup", singUpHandler);


authRouter.get("/confirm/:token", confirmAccountHandler);
authRouter.get("/mailtoreset/:email", forgetPasswordHandler);
authRouter.post("/changepassword/:token", changePasswordHandler);

module.exports = authRouter;
