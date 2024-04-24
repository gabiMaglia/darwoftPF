const errors = require("../utils/errors");
const { extractJwtToken, verifyToken, checkWhiteListedToken } = require("../utils/jwt/tokenGenerator");


// MIDDLEWARE QUE CHEKEA TOKEN
const checkAuthToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error(errors.auth.unauthorized);


    const token = extractJwtToken(req.headers.authorization)

    const isTokenListed = await checkWhiteListedToken(token)
    if (!isTokenListed) throw new Error("Wrong Credentials");

    const tokenData = await verifyToken(token)
    if (!tokenData.id || !tokenData.role) throw new Error(errors.auth.unauthorized);
   
    req.userId = tokenData.id
    req.role   = tokenData.role
    next()
    
} catch (error) {
  next(error)
}
};

// MIDDLEWARE QUE CHEKEA ROL
const checkRoleAuthToken = (role) => async (req, res, next) => {

};

module.exports = {
  checkAuthToken,
  checkRoleAuthToken,
};
