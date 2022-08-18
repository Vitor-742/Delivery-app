const express = require('express');
const SellerController = require('../controllers/SellerController');

const sellerRouter = express.Router();

sellerRouter.get('/seller/orders', SellerController.getSales);

module.exports = sellerRouter; 