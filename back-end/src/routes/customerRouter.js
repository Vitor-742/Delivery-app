const express = require('express');
const ProductController = require('../controllers/ProductController');

const customerRouter = express.Router();

customerRouter.get('/customer/products', ProductController.getAll);

module.exports = customerRouter; 