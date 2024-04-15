const { verifyToken } = require("../utils/jwt/tokenGenerator");

function extractJwtToken(inputString) {
  const jwt = inputString.split(" ").pop();
  return jwt;
}

// MIDDLEWARE QUE CHEKEA TOKEN
const checkAuthToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization)
      return res.status(409).send({ error: "Log in to continue" });
    const token = extractJwtToken(req.headers.authorization);
    // chekamos que sea valido
    const tokenData = await verifyToken(token);
    if (!tokenData?.userId) {
      res.status(409);
      res.send({ error: "Unauthorized" });
    } else {
      // si esta activo y es valido
      next();
    }
  } catch (error) {
    next(error)
  }
};

// MIDDLEWARE QUE CHEKEA ROL
const checkRoleAuthToken = (role) => async (req, res, next) => {
  try {
    const token = extractJwtToken(req.headers.authorization);
    const tokenData = await verifyToken(token);
    if (![].concat(role).includes(tokenData.userRole)) {
      res.status(409);
      res.send({ error: "Unauthorized" });
    } else {
      next();
    }
  } catch (error) {
   next(error)
  }
};

module.exports = {
  checkAuthToken,
  checkRoleAuthToken,
};
