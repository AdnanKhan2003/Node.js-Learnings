const path = require('path');

const rootDir = require('../util/path');

const adminData = require('./admin');

const express = require('express');

const router = express.Router();

// 'path' module ensures correct path construction for different os
// __dirname is the location of this project on our operating system
router.get('/', (req, res, next) => {
    // res.sendFile(path.join(rootDir, '..','view', 'shop.html'));
    const products = adminData.products;
    
    res.render('shop', { prods: products, pageTitle: 'Shop', path: '/', layout: false, hasProducts: products.length > 0 });
    // res.render('shop', { prods: products, pageTitle: 'Shop', path: '/' });
});

module.exports = router;