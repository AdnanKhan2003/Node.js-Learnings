const express = require('express');

const path = require('path');

const rootDir = require('./util/path')

const usersRoutes = require('./routes/users');
const mainRoutes = require('./routes/main');

const app = express();

app.use(express.static(path.join(rootDir, 'public')));

app.use('/users', usersRoutes);
app.use(mainRoutes)

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'view', '404.html'));
});

app.listen(3000);