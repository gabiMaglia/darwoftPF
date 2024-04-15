const { TokenWhiteList, User } = require("../../db/conn");
const dateFormater = require("../dateFormater");


const extractJwtToken = (inputString) => {
  const jwt = inputString.split(" ").pop();
  return jwt;
};
const checkWhiteListedToken = async (token) => {
  const listedTokens = await TokenWhiteList.find();
  const sortedWhiteListedTokens = listedTokens.map((e) => e.token);
  const isListed = sortedWhiteListedTokens.includes(token);
  return isListed;
};
const sessionFlag = async (tokenData) => {
  const data = await User.findById(tokenData.userId);
  
  const fechaActual = new Date();
  const formatoCompleto = dateFormater(fechaActual);
  const conectionData = {
    Usuario: `${data.name} ${data.surname}`,
    Rol: tokenData.userRole,
    Conexion: formatoCompleto,
  };
  
  return conectionData;

};


module.exports = {
  checkWhiteListedToken,
  extractJwtToken,
  sessionFlag,
};
