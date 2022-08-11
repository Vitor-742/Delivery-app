const md5 = require('md5');
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

module.exports = {
  login,
};
