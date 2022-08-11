const express = require('express');
const UserController = require('../controllers/UserController');

const userRouter = express.Router();

userRouter.post('/login', UserController.login);

module.exports = userRouter;