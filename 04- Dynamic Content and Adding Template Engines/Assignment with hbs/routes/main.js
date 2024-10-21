const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res) => {
    res.render('form', { pageTitle: 'Main Page', path: '/', activeForm: true });
});

router.post('/', (req, res) => {
    users.push({ user: req.body.name });
    res.redirect('/users');
});

exports.routes = router;
exports.users = users;