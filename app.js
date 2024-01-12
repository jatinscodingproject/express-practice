const express = require('express');

const app = express();

const body_parser = require('body-parser');

const productRoutes = require('./routes/product');

const shopRoutes = require('./routes/shop');

const contactusRoutes = require('./routes/contact-us')

const successRoutes = require('./routes/success')

app.use(body_parser.urlencoded({extended:false}));

app.use(express.static('public'));

app.use('/admin',productRoutes);

app.use(shopRoutes);

app.use(contactusRoutes);

app.use(successRoutes)

app.use((req,res,next) => {
    res.status(200).sendFile('404.html',{
        root:'views'
    })
})

app.listen(3000);