const { Sales } = require('../database/models');

const getSales = async () => {
  try {
    const products = await Sales.findAll();
    return products;
  } catch (error) {
    console.log(error);
  }
};

const getSalesByUserId = async (userId) => {
  try {
    const orders = await Sales.findAll({ where: { userId } });
    return orders;
  } catch (error) {
    console.log(error);
  }
};

const getSalesBySellerId = async (sellerId) => {
  try {
    const orders = await Sales.findAll({ where: { sellerId } });
    return orders;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSales, getSalesByUserId, getSalesBySellerId };
