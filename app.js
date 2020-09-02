const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const shop = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(admin);
app.use(shop);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(8080);