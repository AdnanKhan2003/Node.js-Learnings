const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

const products = [];
// sendFile takes absolute for this project on operating system isnide ''
// Same path but different requests
// '/admin' would be automatically prepended
router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'view', 'add-product.html'));
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
    // res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', layout: false });
    // res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' });
});

router.post('/add-product', (req, res) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;