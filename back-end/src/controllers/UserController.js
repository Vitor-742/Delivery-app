const express = require('express');
const UserService = require('../services/UserService');

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
    const { body } = req;
    try {
        const response = await UserService.login(body)
    } catch (error) {
        return res.status(404).end()
    }
    
    return res.status(200).json(response);
})

module.exports = loginRouter;