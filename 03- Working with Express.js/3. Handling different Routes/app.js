const express = require('express');

const app = express();

// NOTE: 
// 1. Order matters
// 2. path defines the starting point of path

// 1st argument: Path starts with
app.use('/', (req, res, next) => {
    console.log("Always gets executed");
    next();
})

app.use('/add-product', (req, res, next) => {
    res.send('<h1>The "Add Product" Page</h1>');
    console.log("In the Middleware");
})
// 1st argument: Path starts with
app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express</h1>');
    console.log("Another Middleware");
})

// Behind the scenes, express reduces steps for creating server
app.listen(3000);