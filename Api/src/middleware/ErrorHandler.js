const errorStatus = (message) => {
  if (message === "User not found") return 404;
  if (message === "Wrong Credentials") return 401;
  
  if (message === "Products not found") return 404;
  if (message === "Product not found") return 404;

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
