const { Sales, SalesProducts } = require('../database/models');

const createSale = async (sale) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = sale;

  console.log(products);

  const result = await Sales.create({ userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status: 'Pendente',
  });

  Promise.all(
    products.map(async (product) => {
      await SalesProducts.create({ saleId: result.id,
        productId: product.id,
        quantity: product.quantity,
      });
    }),
  );

  return result;
};

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

module.exports = { getSales, getSalesByUserId, getSalesBySellerId, createSale };
