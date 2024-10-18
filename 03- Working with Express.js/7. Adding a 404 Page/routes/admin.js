const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<html><head><title>Enter Information</title></head><body><h1>Enter your Information</h1><form action="/products" method="POST"><input type="text" name="title" /><button>Submit</button></form></body></html>');
});

router.post('/products', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;