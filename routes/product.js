const express = require('express');

const router = express.Router();

const productController = require('../controllers/product')

router.get('/add-product',productController.getAdd_product)

router.post('/add-product',productController.postAdd_product)

module.exports = router;