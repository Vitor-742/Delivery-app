const md5 = require('md5');
const newJWT = require('../auth/tokenHandler');
const { Users } = require('../database/models');
const errorCreator = require('../helpers/errorCreator');

const login = async ({ email, password: unCryptPass }) => {
  const password = md5(unCryptPass);
  const loginUser = await Users.findOne({ where: { email, password } });
  if (loginUser) {
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

module.exports = {
  login,
  signUp,
};
