// 1st part of assignment
const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/user')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).send('<html><head><title>404 - Page not Found</title></head><body><h1>404 - Page not Found</h1></body></html>');
});

app.listen(3000);