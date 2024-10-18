const path = require('path');

const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

// 'path' module ensures correct path construction for different os
// __dirname is the location of this project on our operating system
router.get('/', (req, res, next) => {
    // res.sendFile(path.join(rootDir, '..','view', 'shop.html'));
    res.sendFile(path.join(rootDir, 'view', 'shop.html'));
});

module.exports = router;