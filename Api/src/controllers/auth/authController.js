const { User, UserCredential, TokenWhiteList } = require("../../db/conn");

const bcrypt = require("bcrypt");
const { tokenSign, verifyToken, checkWhiteListedToken } = require("../../utils/jwt/tokenGenerator");

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

  const isTokenListed =  await checkWhiteListedToken(token);
  if (!isTokenListed) throw new Error("Wrong Credentials");

  const decodedToken = await verifyToken(token);
  const response = User.updateOne({_id:decodedToken.userId}, {isActive: true})
  await TokenWhiteList.deleteOne(token)

  return response
}

module.exports = { login, logOut, confirmAccount };
