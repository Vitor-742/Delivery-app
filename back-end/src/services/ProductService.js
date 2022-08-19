const { Products, Sales, SalesProducts } = require('../database/models');
const { getSellerById } = require('./UserService');

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
    const { sellerId: idSeller } = order;
    const seller = await getSellerById(idSeller);
    const saleOrder = await SalesProducts.findAll({ where: { saleId: id } });
    const products = await Promise.all(
      saleOrder.map(async ({ productId, quantity }) => {
        const product = await Products.findOne({ where: { id: productId } });
        return { product, quantity };
      }),
    );
    return { order, products, seller };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAll, getOrderDetails };
