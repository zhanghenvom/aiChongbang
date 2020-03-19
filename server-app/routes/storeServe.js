var express = require('express');
var mongoose = require('mongoose');  //安装mongo驱动
var router = express.Router();
const { add , get , del ,getById , update} = require('../services/storeServeService.js')
router.post('/add',async function(req,res,next) {
    const {name,sort,waiterGrade,price
        ,serveSize,suitableSize,times,useTime} = req.body;
        console.log({name,sort,waiterGrade,price
            ,serveSize,suitableSize,times,useTime},888);
        
    let data = await add({name,sort,waiterGrade,price,
        serveSize,suitableSize,times,useTime});
    res.send(data)
});

router.post('/update',async function(req,res,next) {
    const {name,sort,waiterGrade,price
        ,serveSize,suitableSize,times,useTime} = req.body;
    const {_id }= req.body;
    console.log({_id});
    let data = await update({_id},{name,sort,waiterGrade,price,
        serveSize,suitableSize,times,useTime});
    res.send(data)
});

router.get('/getServe',async function(req,res,next) {
    
    let data = await get();
    res.send(data)
});

router.delete('/del',async function(req,res,next) {
    const {_id} = req.query;
    let data = await del({_id});
    res.send(data)
});

router.get('/getById',async function(req,res,next) {
    const {_id} = req.query;
    let data = await getById({_id});
    res.send(data)
});

module.exports = router;