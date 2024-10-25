const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart {
    static addProduct(id, productPrice) {
        // Check if cart exists
        fs.readFile(p, (err, fileContent) => {
        // If don't
            let cart = { products: [], totalPrice: 0 };

            // If exists
            if(!err){
                cart = JSON.parse(fileContent);
            }

            // Find existing product
            const existingProductIndex = cart.products.findIndex(product => product.id === id);
            const existingProduct = cart.products[existingProductIndex];

            let updatedProduct;
            // Add new product/ increase existing one
            if(existingProduct){
                updatedProduct = { ...existingProduct };
                updatedProduct.qty += 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id, qty: 1 };
                cart.products = [ ...cart.products, updatedProduct ];
            }
            cart.totalPrice += +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err);
            })
        })

    }

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            if(err){
                return;
            }

            const updatedCart = { ...JSON.parse(fileContent) };
            
            const existingProduct = updatedCart.products.find(product => product.id === id);
            updatedCart.totalPrice -= productPrice * existingProduct.qty;
            updatedCart.products = updatedCart.products.filter(product => product.id !== id);
            // console.log(updatedCart.totalPrice, updatedCart.qty, productPrice, 'ngl', updatedCart);
            

            fs.writeFile(p, JSON.stringify(updatedCart), err => {
                if(err) console.log(err);
                
            })
        })
    }

    static getCart(cb){
        fs.readFile(p, (err, fileContent) => {
            const cart = JSON.parse(fileContent);
            if(err){
                cb(null);
                return;
            }
            cb(cart);
        });
    }
}