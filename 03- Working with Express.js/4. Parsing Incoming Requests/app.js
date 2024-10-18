// 1st part of assignment
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Calls 'next' function so that further middlewares also gets executed
app.use(bodyParser.urlencoded({extended: false}));

// 'get' or 'post' is same as 'use' but handles only 'get' or 'post' request
app.get('/add-product', (req, res, next) => {
    res.send('<html><head><title>Enter Information</title></head><body><h1>Enter your Information</h1><form action="/products" method="POST"><input type="text" name="title" /><button>Submit</button></form></body></html>');
});

app.post('/products', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Handles Main Page</h1>');
});

app.listen(3000);