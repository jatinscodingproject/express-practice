const express = require('express');

const router = express.Router();

router.get('/add-product',(req,res,next) => {
    res.status(200).sendFile('product.html',{
        root:'views'
    })
})

router.post('/add-product',(req,res,next) => {
    console.log(req.body);
    res.redirect('/')
})

module.exports = router;