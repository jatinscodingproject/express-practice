exports.getAdd_product = (req,res,next) => {
    res.status(200).sendFile('product.html',{
        root:'views'
    })
}

exports.postAdd_product = (req,res,next) => {
    console.log(req.body);
    res.redirect('/')
}
