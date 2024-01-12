exports.getContact = (req,res,next) => {
    res.status(200).sendFile('contact-us.html',{
        root:'views'
    })
}

exports.postContact = (req,res,next) => {
    console.log(req.body);
    res.redirect('/success')
}

exports.getSuccess = (req,res,next) => {
    res.status(200).sendFile('success.html',{
        root:'views'
    })
}