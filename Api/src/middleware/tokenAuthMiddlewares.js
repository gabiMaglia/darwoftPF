

// MIDDLEWARE QUE CHEKEA TOKEN
const checkAuthToken = async (req, res, next) => {

};

// MIDDLEWARE QUE CHEKEA ROL
const checkRoleAuthToken = (role) => async (req, res, next) => {

};

module.exports = {
  checkAuthToken,
  checkRoleAuthToken,
};
