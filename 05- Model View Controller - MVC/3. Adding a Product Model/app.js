const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/user')

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs')
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// Adding common path segments request handler middlewares in one file
app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);