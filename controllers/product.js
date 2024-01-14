const Product = require('../models/product')


exports.getAdd_product = (req,res,next) => {
    res.status(200).sendFile('product.html',{
        root:'views'
    })
}

exports.postAdd_product = (req,res,next) => {
    const product = new Product(req.body.addproduct);
    product.save()
    res.redirect('/')
}
