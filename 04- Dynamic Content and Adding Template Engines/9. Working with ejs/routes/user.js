const path = require('path');

const rootDir = require('../util/path');

const adminData = require('./admin');

const express = require('express');

const router = express.Router();

// 'path' module ensures correct path construction for different os
// __dirname is the location of this project on our operating system
router.get('/', (req, res, next) => {
    const products = adminData.products;
    
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0, activeShop: true });
});

module.exports = router;