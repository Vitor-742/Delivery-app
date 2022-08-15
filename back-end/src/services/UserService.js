const md5 = require('md5');
const jwt = require('jsonwebtoken')
const { Users } = require('../database/models');
const errorCreator = require('../helpers/errorCreator');
const jwtKey = require("fs")
  .readFileSync("./jwt.evaluation.key", { encoding: "utf-8" });

const login = async ({ email, password: unCryptPass }) => {
  const password = md5(unCryptPass);
  const loginUser = await Users.findOne({ where: { email, password } });
  if (loginUser) {
    const {name, role} = loginUser
    const secret = jwtKey    
    loginUser.dataValues.token = jwt.sign({name, email, role}, secret, { algorithm: 'HS256', expiresIn: '7d' });
    return loginUser;
  }
  throw errorCreator(404, 'User Not Found');
};

// const readSecret = async () => {
//   const readFile = await fs.readFile('./back-end/jwt.evaluation.key');
//   return readFile
// }

module.exports = {
  login,
};
