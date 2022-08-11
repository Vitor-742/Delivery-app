const express = require('express');
const { router } = require('../routes');
const errorHandler = require('../middlewares/errorHandler');

const app = express();

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(router);
app.use(errorHandler);

module.exports = app;
