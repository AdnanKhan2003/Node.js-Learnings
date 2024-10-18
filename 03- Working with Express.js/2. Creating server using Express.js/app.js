const express = require('express');

const app = express();


// Adding 'Middlewares'
app.use((req, res, next) => {
    console.log("This is Middleware");

    // Allows request to continue to next middleware in line
    // - Call it when we don't send a request
    next();
});

app.use((req, res, next) => {
    console.log("This is another Middleware");
    res.send('<h1>Hello from Express</h1>');
});

// Behind the scenes, express reduces steps for creating server
app.listen(3000);