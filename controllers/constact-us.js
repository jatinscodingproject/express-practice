const Contact = require('../models/constact-us');

exports.getContact = (req,res,next) => {
    res.status(200).sendFile('contact-us.html',{
        root:'views'
    })
}

exports.postContact = (req,res,next) => {
    const contact = new Contact(req.body.name,req.body.phoneno,req.body.email)
    contact.save()
    res.redirect('/success')
}

exports.getSuccess = (req,res,next) => {
    const contact = Contact.fetchAll()
    res.status(200).sendFile('success.html',{
        root:'views'
    })
}