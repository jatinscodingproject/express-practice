const express = require('express');

const router = express.Router();

const ShopControllers = require('../controllers/shop')

router.get('/',ShopControllers.getShop);

module.exports = router;