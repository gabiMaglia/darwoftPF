require("dotenv").config();
const SECRET = process.env.JWT_SECRET_KEY;
const jwt = require("jsonwebtoken");
const { checkWhiteListedToken } = require("./tokenUtils");
const { TokenWhiteList } = require("../../db/conn");

const tokenSign = async (dataForToken, tokenTime = "1h") => {
  const token = jwt.sign(dataForToken, SECRET, { expiresIn: tokenTime });
  await TokenWhiteList.create({
    token
  })
  return token;
};
const verifyToken = async (token) => {
  const isWhiteListed = await checkWhiteListedToken(token);
  if (!isWhiteListed) return { error: true, name: "blackListedToken" };

  const decodedToken = jwt.verify(token, SECRET);

  return decodedToken;
};

const refreshToken = async (token) => {
  const decodedToken = await verifyToken(token.split(" ").pop());
  if (decodedToken.error) return { error: true, message: decodedToken.name };

  const tokenRefreshTime = "3h";

  const dataForToken = {
    userId: decodedToken.userId,
    username: decodedToken.username,
    userRole: decodedToken.userRole,
  };

  const newToken = tokenSign(dataForToken, tokenRefreshTime);

  return newToken;
};

module.exports = {
  tokenSign,
  verifyToken,
  refreshToken,
};
