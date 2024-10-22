const Product = require('../model/product');

exports.getProducts = (req, res, next) => {
    Product.getAll((products) => {
        res.render('shop/product-list', { prods: products, pageTitle: 'All Products', path: '/products'});
    });
}

exports.getIndex = (req, res) => {
    Product.getAll((products) => {
        res.render('shop/index', { prods: products, pageTitle: 'Shop', path: '/' });
    });
};

exports.getCart = (req, res) => {
    res.render('shop/cart', { pageTitle: 'Your Cart', path: '/cart' });
}

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', { pageTitle: 'Checkout', path: '/checkout' });

}