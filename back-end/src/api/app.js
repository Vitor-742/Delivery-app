const express = require('express');
const cors = require('cors');
const { userRouter, customerRouter } = require('../routes');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(cors());
app.use(express.json());
app.use('/images', express.static(__dirname + '/../../public/images'))
app.use(userRouter);
app.use(customerRouter);
app.use(errorHandler);

module.exports = app;
