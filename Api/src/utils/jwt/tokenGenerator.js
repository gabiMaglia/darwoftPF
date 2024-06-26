require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET = process.env.JWT_SECRET_KEY;
const { TokenWhiteList } = require("../../db/conn");
const errors = require("../errors");

const tokenSign = async (dataForToken, tokenTime = "2h") => {
  const token = jwt.sign(dataForToken, SECRET, { expiresIn: tokenTime });
  await TokenWhiteList.create({
    token,
  });
  return token;
};

const verifyToken = async (token) => {
  try {
    const isWhiteListed = await checkWhiteListedToken(token);
    if (!isWhiteListed) return { error: true, name: "blackListedToken" };
    const decodedToken = jwt.verify(token, SECRET);

    return decodedToken;
  } catch (error) {
    throw new Error(errors.auth.unauthorized);
  }
};

const extractJwtToken = (inputString) => {
  const jwt = inputString.split(" ").pop();
  return jwt;
};

const checkWhiteListedToken = async (token) => {
  const listedTokens = await TokenWhiteList.findOne({ token: token });
  return listedTokens ? true : false;
};

module.exports = {
  tokenSign,
  verifyToken,
  checkWhiteListedToken,
  extractJwtToken,
};
