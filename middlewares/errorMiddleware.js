const errorMiddleware = (err, _req, res, _next) => {
  if (err.message) {
    return res.status(err.status).json({
      message: err.message,
      code: err.code,
    });
  }
  return res.status(500).json({
    message: 'Internal Error',
    code: 'INTERNAL_ERROR',
  });
};

module.exports = errorMiddleware;