const UserService = require('../services/UserService');

const loginRouter = async (req, res) => {
    const { body } = req;
    try {
        const response = await UserService.login(body);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error)
        return res.status(404).end();
    }
};

module.exports = loginRouter;