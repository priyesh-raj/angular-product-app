const express = require("express");
const products = require('./routes/product')
const app = express();

const PORT = 3000;

app.use('/products', products);

app.get('/', (req, res) => {
    res.send("Hello World!!")
})

app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`)
})
