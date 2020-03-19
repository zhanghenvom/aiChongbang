var express = require('express');
var router = express.Router();
const { serveAdd ,getServe ,del , getById , update} = require('../services/serveService.js')

router.post('/serveAdd',async function(req,res,next) {
    const params = req.body;
    // params.price = params.price.split(',');
    let data = await serveAdd(params);
    res.send(data);
    return;
});

router.get('/getServe',async function(req,res,next) {
    // const params = req.query;
    let data = await getServe();
    res.send(data);
    return;
});


router.delete('/del',async function(req,res,next) {
    const {_id} = req.query;
    let data = await del({_id});
    res.send(data);
    return;
});


router.get('/getById',async function(req,res,next) {
    const {_id} = req.query;
    let data = await getById({_id});
    res.send(data);
    return;
});


router.patch('/:id',async function(req,res,next) {
    const param = req.body;
    let data = await update(param);
    res.send(data);
    return;
});

module.exports = router;