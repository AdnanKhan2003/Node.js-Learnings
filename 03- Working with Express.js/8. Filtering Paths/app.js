// 1st part of assignment
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/user')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// Adding common path segments request handler middlewares in one file
app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).send('<html><head><title>404 - Page not Found</title></head><body><h1>404 - Page not Found</h1></body></html>');
});

app.listen(3000);