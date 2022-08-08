const { User } = require('../database/models');
const md5 = require('md5')

const login = async ({ email, password }) => {
    const user = await User.findOne({where: { email, password: md5(password) }})
    if(!user) throw new Error('User Not Found')
    return user
}

module.exports = {
    login
}