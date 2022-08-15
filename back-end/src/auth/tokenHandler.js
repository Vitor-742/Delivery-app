const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'secret_key';

const newJWT = (payload) => {
  const newToken = jwt.sign({ data: payload }, JWT_SECRET, {
    expiresIn: '92h',
  });
  return newToken;
};

module.exports = newJWT;
