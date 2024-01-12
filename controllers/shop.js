exports.getShop = (req,res,next) => {
    res.status(200).sendFile('shop.html',{
        root:'views'
    })
}