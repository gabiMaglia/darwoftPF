const { User, UserCredential } = require("../../db/conn");

const bcrypt = require("bcrypt");
const { tokenSign } = require("../../utils/jwt/tokenGenerator");

const login = async (email, password) => {
  const userCredentials = await UserCredential.findOne({ email });
  if (!userCredentials) throw new Error("Wrong Credentials");

  const dbPassword = userCredentials.password;
  const isPasswordMatching = await bcrypt.compare(password, dbPassword);
  if (!isPasswordMatching) throw new Error("Wrong Credentials");

  const user = await User.findOne({ email });

  const accesToken = await tokenSign({ user }, "1h");

  return {
    accesToken,
  };
};
const logOut = async () => {};

const confirmAccount = async (token) => {

    const user = User.findOne({})

}

module.exports = { login, logOut, confirmAccount };
