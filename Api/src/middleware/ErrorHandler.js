const errors = require("../utils/errors");

const errorStatus = (message) => {
  if (message === errors.auth.wrongCredentials) return 401;
  
  if (message === errors.user.userNotFound) return 404;

  if (
    message === errors.product.productNotFound ||
    errors.product.productsNotFound
  )
    return 404;
  if (message === errors.product.brandNotFound || errors.product.brandsNotFound)
    return 404;
  if (message === errors.product.remainingProductsInBrand) return 400;
  if (
    message === errors.product.categoryNotFound ||
    errors.product.categoriesNotFound
  )
    return 404;
  if (message === errors.product.remainingProductsInCategory) return 400;
  return 500;
};

const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  const status = err.status || errorStatus(err.message);
  const message = err.message || err;
  res.status(status).json({
    error: true,
    message: message,
  });
};

module.exports = errorHandler;
