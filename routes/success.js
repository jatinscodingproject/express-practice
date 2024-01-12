const express = require('express');

const router = express.Router();

router.get('/success',(req,res,next) => {
    res.status(200).sendFile('success.html',{
        root:'views'
    })
})

module.exports = router;