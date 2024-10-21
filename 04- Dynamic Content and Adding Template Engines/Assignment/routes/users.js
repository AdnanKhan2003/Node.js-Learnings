const express = require('express');

const router = express.Router();

const userRoute = require('./main');

router.get('/', (req, res) => {
    res.render('users', { users: userRoute.users, pageTitle: 'All Users', path: '/users' });
});

module.exports = router;