const UserService = require('../services/UserService');

const login = async (req, res, next) => {
  try {
    const response = await UserService.login(req.body);
    return res.status(200).json(response);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = { login };
