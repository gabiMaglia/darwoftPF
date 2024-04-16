require("dotenv").config();
const SECRET = process.env.JWT_SECRET_KEY;
const jwt = require("jsonwebtoken");
const { TokenWhiteList } = require("../../db/conn");

const tokenSign = async (dataForToken, tokenTime = "1h") => {
  const token = jwt.sign(dataForToken, SECRET, { expiresIn: tokenTime });
  await TokenWhiteList.create({
    token,
  });
  return token;
};

const verifyToken = async (token) => {
  const isWhiteListed = await checkWhiteListedToken(token);
  if (!isWhiteListed) return { error: true, name: "blackListedToken" };
 
  const decodedToken = jwt.verify(token.token, SECRET);
  

  return decodedToken;
};

const extractJwtToken = (inputString) => {
  const jwt = inputString.split(" ").pop();
  return jwt;
};

const checkWhiteListedToken = async (token) => {
  const listedTokens = await TokenWhiteList.exists(token);
  return listedTokens ? true : false;
};

module.exports = {
  tokenSign,
  verifyToken,
  checkWhiteListedToken,
  extractJwtToken,
};
