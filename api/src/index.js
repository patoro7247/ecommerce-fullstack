const express = require('express');
const app = express();
const path = require('path');

const cors = require('cors');
app.use(cors());

app.use(express.static(path.resolve(__dirname, '../client/build')));


//const PORT = process.env.PORT;
const PORT = process.env.PORT;

var products = require('./Products.js')


app.get('/products', (req, res) => {
    res.json(products.productList);
});

/*
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
*/

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))