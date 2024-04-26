const errors = require("../utils/errors");
const {
  extractJwtToken,
  verifyToken,
  checkWhiteListedToken,
} = require("../utils/jwt/tokenGenerator");

// MIDDLEWARE QUE CHEKEA TOKEN
const isAutenticated = async (req, res, next) => {
  try {
    console.log('tokenData.id')
    if (!req.headers.authorization) throw new Error(errors.auth.unauthorized);
    const token = extractJwtToken(req.headers.authorization);
    
    const isTokenListed = await checkWhiteListedToken(token);
    
    if (!isTokenListed) throw new Error("Wrong Credentials");
    
    const tokenData = await verifyToken(token);
   
    if (!tokenData.id || !tokenData.role)
    throw new Error(errors.auth.unauthorized);
    req.userId = tokenData.id;
    req.role = tokenData.role.role;

    next();

  } catch (error) {
    next(error);
  }
};

// MIDDLEWARE QUE CHEKEA ROL
const isAuthorized =  async (req, res, next) => {
  try {
    const role = req.role
    if (!role || role !== "ADMIN")
      throw new Error(errors.auth.unauthorized);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  isAutenticated,
  isAuthorized,
};
