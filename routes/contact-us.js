const express = require('express');

const router = express.Router();

router.get('/contact-us',(req,res,next) => {
    res.status(200).sendFile('contact-us.html',{
        root:'views'
    })
})

router.post('/contact-us',(req,res,next) => {
    console.log(req.body);
    res.redirect('/success')
})

module.exports = router;