const express = require('express');
const SellerController = require('../controllers/SellerController');

const sellerRouter = express.Router();

sellerRouter.get('/seller/orders', SellerController.getSales);
sellerRouter.get('/user/orders/:userId', SellerController.getSalesByUserId);
sellerRouter.get(
  '/seller/orders/:sellerId',
  SellerController.getSalesBySellerId,
);

module.exports = sellerRouter;
