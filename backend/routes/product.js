const express = require('express');
const router = express.Router();

const items = require('../assets/items.json');

router.get('/', (req, res) => {
    res.json(items);
})


module.exports = router;