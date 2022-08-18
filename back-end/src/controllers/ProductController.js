const ProductService = require('../services/ProductService');

const getAll = async (_req, res, next) => {
  try {
    const response = await ProductService.getAll();
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const getOrderDetails = async (req, res, next) => {
  try {
    const response = await ProductService.getOrderDetails(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = { getAll, getOrderDetails };
