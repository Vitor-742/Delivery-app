const SellerService = require('../services/SellerService');

const getSales = async (req, res, next) => {
  try {
    const response = await SellerService.getSales();
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = { getSales };
