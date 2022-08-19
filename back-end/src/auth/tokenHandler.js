const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWT_SECRET = fs.readFileSync('jwt.evaluation.key', 'utf-8')
  || process.env.JWT_SECRET
  || 'secret_key';

const newJWT = (payload) => {
  const newToken = jwt.sign({ data: payload }, JWT_SECRET, {
    expiresIn: '92h',
  });
  return newToken;
};

module.exports = newJWT;
