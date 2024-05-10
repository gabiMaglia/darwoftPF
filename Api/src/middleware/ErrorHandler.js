const errors = require("../utils/errors");

// Mapping of error messages to HTTP status codes
const errorStatusMap = {
  [errors.product.remainingProductsInBrand]: 400,
  [errors.auth.wrongCredentials]: 401,
  [errors.user.userNotFound]: 404,
  [errors.product.productNotFound]: 404,
  [errors.product.productsNotFound]: 404,
  [errors.product.brandNotFound]: 404,
  [errors.product.brandsNotFound]: 404,
  [errors.product.categoryNotFound]: 404,
  [errors.product.categoriesNotFound]: 404,
  [errors.product.remainingProductsInCategory]: 400,
  validationError: 422,
  duplicateError: 422,
};

const errorStatus = (message) => {
  if (message.includes("validation") || message.includes("duplicate")) {
    return errorStatusMap.validationError;
  }

  return errorStatusMap[message] || 500; 
};

const errorHandler = (err, req, res, next) => {
  console.error(`Error processing request ${req.method} ${req.url}: ${err.message}`);

  const status = err.status || errorStatus(err.message);
  res.status(status).json({
    error: true,
    message: err.message || 'An unexpected error occurred'
  });
};

module.exports = errorHandler;