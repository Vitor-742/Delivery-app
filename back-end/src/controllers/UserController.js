const UserService = require('../services/UserService');

const login = async (req, res, next) => {
  try {
    const response = await UserService.login(req.body);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const signUp = async (req, res, next) => {
  try {
    const { ...bodyData } = req.body;
    const newUserData = { ...bodyData };
    const createdUser = await UserService.signUp(newUserData);
    return res.status(201).json(createdUser);
  } catch (err) {
    next(err);
  }
};

const adminRegister = async (req, res, next) => {
  try {
    const response = await UserService.adminRegister(req.body);
    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const response = await UserService.getAll();
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await UserService.deleteUserById(id);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = { login, signUp, adminRegister, getAll, deleteUserById };
