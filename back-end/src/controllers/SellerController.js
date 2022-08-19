const SellerService = require('../services/SellerService');

const getSales = async (req, res, next) => {
  try {
    const response = await SellerService.getSales();
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const getSalesByUserId = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const response = await SellerService.getSalesByUserId(userId);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

const getSalesBySellerId = async (req, res, next) => {
  try {
    const { sellerId } = req.params;
    const response = await SellerService.getSalesByUserId(sellerId);
    return res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

module.exports = { getSales, getSalesByUserId, getSalesBySellerId };
