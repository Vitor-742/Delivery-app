const express = require('express');
const UserController = require('../controllers/UserController');
const userValidator = require('../middlewares/userValidator');

const userRouter = express.Router();

userRouter.post('/login', UserController.login);
userRouter.post('/register', userValidator, UserController.signUp);
userRouter.post('/admin/manage', userValidator, UserController.adminRegister);

module.exports = userRouter;
