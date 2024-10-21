const express = require('express');

const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');

const rootDir = require('./util/path');

const mainRoutes = require('./routes/main');
const userRoutes = require('./routes/users');

const app = express();

app.engine('hbs', engine({ layoutsDir: 'views/layouts', defaultLayout: 'main-layout', extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use(mainRoutes.routes);

app.use((req, res) => {
    res.render('404', { pageTitle: '404 - Page not Found', path: null });
});

app.listen(3000);