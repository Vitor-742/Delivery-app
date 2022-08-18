const { Sales, Products, Users } = require('../database/models');

const getAll = async () => {
  try {
    const products = await Products.findAll();
    return products;
  } catch (error) {
    console.log(error);
  }
};

const getOrderDetails = async (id) => {
  console.log('a')
  const order = await Sales.findOne({where: {id}}, /* {
    include: [
      {model: Users, as: 'user', }
    ]} */
    )
  return order
}

module.exports = { getAll, getOrderDetails };
