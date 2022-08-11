const md5 = require('md5');
const { Users } = require('../database/models');

const login = async ({ email, password }) => {
    const user = await Users.findOne({ where: { email, password: md5(password) } });
    if (!user) throw new Error('User Not Found');
    return user;
};

module.exports = {
    login,
};