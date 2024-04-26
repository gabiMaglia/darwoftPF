const { body, param } = require("express-validator");

const loginValidation = [
  body("email").trim().not().isEmpty().isEmail(),
  body("password").trim().not().isEmpty().isLength({ min: 5 }),
];

const registerValidation = [
  body("newUserData.firstName").trim().not().isEmpty().isLength({ min: 2 }).toLowerCase(),
  body("newUserData.lastName").trim().not().isEmpty().isLength({ min: 2 }).toLowerCase(),
  body("newUserData.email").trim().not().isEmpty().isEmail(),
  body("newUserData.password").trim().isLength({ min: 5 }),
];

module.exports = {
  loginValidation,
  registerValidation,
};
