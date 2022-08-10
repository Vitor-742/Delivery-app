const { Router } = require('express');
const loginRouter = require('./loginRouter');

const router = Router();

router.use('/login', loginRouter);

module.exports = router;
