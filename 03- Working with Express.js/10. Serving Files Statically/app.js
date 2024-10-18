const path = require('path');

const rootDir = require('./util/path');

const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/user')

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// Adding common path segments request handler middlewares in one file
app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req, res) => {
    res.status(404).sendFile(path.join(rootDir, 'view', 'page-not-found.html'));
});

app.listen(3000);