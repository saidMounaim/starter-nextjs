import ErrorHandler from "./ErrorHandler";

export default (err, req, res) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;

  if (err.name === "CastError") {
    const message = `Resource not found invalid ${err.path}`;
    error = new ErrorHandler(message, 404);
  }

  res.status(err.statusCode).json({
    success: false,
    err,
    message: error.message,
  });
};
