const UserService = require('../services/UserService');

const loginRouter = async (req, res) => {
    const { body } = req;
    try {
        // console.log('a')
        const response = await UserService.login(body);
        // console.log('b')
        return res.status(200).json(response);
    } catch (error) {
        // console.log('c')
        // console.log(error)
        return res.status(404).end();
    }
};

module.exports = loginRouter;