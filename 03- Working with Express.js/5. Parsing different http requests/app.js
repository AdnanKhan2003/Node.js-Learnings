// 1st part of assignment
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Calls 'next' function so that further middlewares also gets executed
app.use(bodyParser.urlencoded({extended: false}));

// Using 'get', 'post' etc does exact matching
app.get('/add-product', (req, res, next) => {
    res.send('<html><head><title>Enter Information</title></head><body><h1>Enter your Information</h1><form action="/products" method="POST"><input type="text" name="title" /><button>Submit</button></form></body></html>');
});

app.post('/products', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/', (req, res, next) => {
    res.send('<h1>Handles Main Page</h1>');
});

app.listen(3000);