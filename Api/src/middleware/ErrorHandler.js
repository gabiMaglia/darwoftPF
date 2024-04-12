const errorStatus = (message) => {
  if (message === "User not found") return 404 
    
  return 500

}

const ErrorHandler = ((err, req, res, next) => {
    console.error(err.message);

    const status = err.status || errorStatus(err.message);
    const message = err.message || err;
    res.status(status).json({
      error: true,
      message: message
    });
  });

module.exports = ErrorHandler