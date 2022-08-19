const md5 = require('md5');
const jwt = require('jsonwebtoken');
const jwtKey = require('fs')
  .readFileSync('./jwt.evaluation.key', { encoding: 'utf-8' });
const newJWT = require('../auth/tokenHandler');
const { Users } = require('../database/models');
const errorCreator = require('../helpers/errorCreator');

const login = async ({ email, password: unCryptPass }) => {
  const password = md5(unCryptPass);
  const loginUser = await Users.findOne({ where: { email, password } });
  if (loginUser) {
    const { id, name, role } = loginUser;
    const secret = jwtKey;    
    loginUser.dataValues.token = jwt.sign(
      { id, name, email, role },
      secret,
      { algorithm: 'HS256', expiresIn: '7d' },
    );
    return loginUser;
  }
  throw errorCreator(404, 'User Not Found');
};

const signUp = async (newUser) => {
  const cryptPass = md5(newUser.password);
  const createdUser = await Users.create({
    name: newUser.name,
    email: newUser.email,
    password: cryptPass,
    role: 'customer',
  });

  const tokenPayload = {
    id: createdUser.id,
    name: newUser.name,
    email: newUser.email,
    role: 'customer',
  };
  const token = newJWT(tokenPayload);
  return { name: newUser.name, email: newUser.email, role: 'customer', token };
};

const adminRegister = async (newUser) => {
  const cryptPass = md5(newUser.password);
  const createdUser = await Users.create({
    name: newUser.name,
    email: newUser.email,
    password: cryptPass,
    role: newUser.role,
  });
  if (createdUser) {
    return createdUser;
  }
};

module.exports = {
  login,
  signUp,
  adminRegister,
};