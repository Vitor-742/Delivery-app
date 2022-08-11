const { ProductModel } = require('../database/models/product');

const getAll = async () => {
  const products = await ProductModel.findAll();
  return products;
};

module.exports = { getAll };
