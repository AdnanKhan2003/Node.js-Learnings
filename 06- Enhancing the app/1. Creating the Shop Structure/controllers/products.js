const Product = require('../model/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    const products = Product.getAll((products) => {
        res.render('shop/product-list', { prods: products, pageTitle: 'Shop', path: '/', hasProducts: products.length > 0, activeShop: true });
    });
}