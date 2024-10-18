const express = require('express');

const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(path.join(rootDir, 'view', 'user.html'));
})

module.exports = router;