const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8')
  || process.env.JWT_SECRET
  || 'secret_key';

const tokenAuth = (req, _res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      next({ status: 401, message: 'Token not found' });
    }
    jwt.verify(token, JWT_SECRET);
    next();
  } catch (err) {
    next({ status: 401, message: 'Token must be valid' });
  }
};

module.exports = { tokenAuth };
