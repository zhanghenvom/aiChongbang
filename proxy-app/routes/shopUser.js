//表现层
var express = require('express');
var router = express.Router();
const { reg } = require('../services/shopUserServices')

router.post('/reg', async function (req, res, next) {
    let parameter = req.body;
    let data = await reg(parameter);
    res.send(data);
})

module.exports = router