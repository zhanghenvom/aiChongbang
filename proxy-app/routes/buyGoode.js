//表现层
var express = require('express');
var router = express.Router();
const { buy,get } = require('../services/buyGoode')

router.post('/buy', async function (req, res, next) {
    let parameter = req.body;
    let data = await buy(parameter);
    res.send(data);
})
router.get('/get', async function (req, res, next) {
    let data = await get();
    res.send(data);
})

module.exports = router