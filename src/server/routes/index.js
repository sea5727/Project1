const express = require('express');
const Account = require('./Account');

const router = express.Router();

router.use('/Account', Account);


module.exports = router;