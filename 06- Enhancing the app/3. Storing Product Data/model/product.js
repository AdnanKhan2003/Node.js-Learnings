const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'products.json');;

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if(err){
            return cb([]);
        }
        cb(JSON.parse(fileContent));
    })
}

module.exports = class Product {
    constructor(title, description, price, imageUrl){
        this.title = title;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }

    save(){
        getProductsFromFile(products => {
            products.push(this);

            fs.writeFile(p, JSON.stringify(products), (err, fileContent) => {
                console.log(err);
            })
        })
    }

    static getAll(cb){
       getProductsFromFile(cb);
    }

    
}