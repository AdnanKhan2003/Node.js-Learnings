const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(rootDir, 'view', 'users.html'));
})

module.exports = router;