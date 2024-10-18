const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

// sendFile takes absolute for this project on operating system isnide ''
// Same path but different requests
// '/admin' would be automatically prepended
router.get('/add-product', (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'view', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'view', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;