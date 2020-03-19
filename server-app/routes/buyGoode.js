//表现层
var express = require('express');
var router = express.Router();
const buyGoode = require('../services/buyGoode')

router.post('/buy', async function (req, res, next) {
    const parameter = req.body;
    const data = await buyGoode.buy(parameter.paramter);
    res.send(data)
})
router.get('/get', async function (req, res, next) {
    const data = await buyGoode.get();
    res.send(data)
})
module.exports = router;
