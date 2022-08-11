const errorHandler = ({ status, message }, _req, res, _next) => {
  if (status) return res.status(status).json({ message });
  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = errorHandler;
