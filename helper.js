const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) =>
      res.status(400).json({ error: err.message })
    );
  };
};

export { asyncHandler };