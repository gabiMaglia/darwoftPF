const { validationResult } = require("express-validator");

const validateResults = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extractedErrors = errors.array().reduce((acc, error) => {
      if (acc[error.path]) {
        acc[error.path] = `${acc[error.path]}, ${error.msg.toLowerCase()}`;
      } else {
        acc[error.path] = error.msg.toLowerCase();
      }
      return acc;
    }, {});

    console.log('paso')
    return res.status(400).json({
      error: true,
      message: extractedErrors,
    });
  }
  next();
};

module.exports = validateResults;
