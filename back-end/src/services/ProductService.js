const { Products, Sales } = require('../database/models');

const getAll = async () => {
  try {
    const products = await Products.findAll();
    return products;
  } catch (error) {
    console.log(error);
  }
};

const getOrderDetails = async (id) => {
  try {
    const order = await Sales.findOne({ where: { id } });
    return order;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll, getOrderDetails };
