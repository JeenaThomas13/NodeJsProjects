const express = require('express');
const path = require('path');
const rootDirectory = require('../util/path');

const router = express.Router();

router.use('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDirectory, 'views', 'add-product.html'))
});

router.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;