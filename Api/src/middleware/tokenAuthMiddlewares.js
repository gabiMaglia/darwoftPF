const errors = require("../utils/errors");
const {
  extractJwtToken,
  verifyToken,
  checkWhiteListedToken,
} = require("../utils/jwt/tokenGenerator");

const isAutenticated = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error(errors.auth.unauthorized);
    const token = extractJwtToken(req.headers.authorization);
   
    
    const isTokenListed = await checkWhiteListedToken(token);
    if (!isTokenListed) throw new Error(errors.auth.wrongCredentials);
    
    const tokenData = await verifyToken(token);
  
    if (!tokenData.id || !tokenData.role)
      throw new Error(errors.auth.unauthorized);
    req.token = token
    req.userId = tokenData.id;
    req.role = tokenData.role;
    next();
  } catch (error) {
  
    next(error);
  }
};
const isAuthorized = async (req, res, next) => {
  try {
    const role = req.role;
    if (!role || role !== "ADMIN") throw new Error(errors.auth.unauthorized);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  isAutenticated,
  isAuthorized,
};
