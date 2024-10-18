// 1st part of assignment
const express = require('express');

const app = express();

// 2nd Part of assignment
app.use((req, res, next) => {
    console.log("This is first middleware!");
    next();
});

app.use((req, res, next) => {
    console.log("Second Middleware");
    res.send("<h1>Assignment solved</h1>");
});

// 3rd Filtering out requests
app.use('/users', (req, res, next) => {
    console.log("/users middleware")
    res.send('<h1>Handles Users Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log("/ middleware");
        res.send('<h1>Handles Main Page</h1>');
});

app.listen(3000);