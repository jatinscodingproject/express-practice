const Product = require('../models/product')

const fs = require('fs');

const path = require('path');

exports.getShop = (req,res,next) => {
    const products = Product.fetchAll();
    res.status(200).sendFile('shop.html',{
        root:'views'
    })
}