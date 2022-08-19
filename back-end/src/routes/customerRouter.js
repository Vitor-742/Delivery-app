const express = require('express');
const { tokenAuth } = require('../auth/tokenAuth');
const ProductController = require('../controllers/ProductController');
const SaleController = require('../controllers/SellerController');

const customerRouter = express.Router();

customerRouter.post('/customer/checkout', tokenAuth, SaleController.createSale);
customerRouter.get('/customer/products', ProductController.getAll);
customerRouter.get('/customer/orders/:id', ProductController.getOrderDetails);

module.exports = customerRouter;
