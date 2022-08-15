const { Users } = require('../database/models');

const userValidator = async (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const checkEmailExists = await Users.findOne({ where: { email } });
  if (checkEmailExists) {
    return res
      .status(409)
      .json({ message: 'A user already exists with this email' });
  }
  return next();
};

module.exports = userValidator;
