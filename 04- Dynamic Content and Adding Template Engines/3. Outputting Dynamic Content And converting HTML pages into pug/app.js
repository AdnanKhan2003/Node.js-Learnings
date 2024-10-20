const path = require('path');

const rootDir = require('./util/path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/user')

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// Adding common path segments request handler middlewares in one file
app.use('/admin', adminRoutes.routes);

app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).render('404', { pageTitle: "Page not Found" });
});

app.listen(3000);