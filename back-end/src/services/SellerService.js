const { Sales } = require('../database/models');

const getSales = async () => {
  try {
    const products = await Sales.findAll();
    return products;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSales };
