//表现层
var express = require('express');
var router = express.Router();
const userService = require('../services/storeServices')

router.get('/login', async function (req, res, next) {
    const parameter = req.query;
    const data = await userService.login(parameter);
    res.send(data)
});

router.post('/reg', async function (req, res, next) {
    const parameter = req.body;
    const data = await userService.reg(parameter);
    res.send(data)
})


module.exports = router;
