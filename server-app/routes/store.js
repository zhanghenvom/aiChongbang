var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var { get,create,getById,update,getStore } = require("../services/storeServices");

router.get('/store', async function (req, res, next) {
    const { params } = req.body;
    const {curPage,eachPage,type,value}=params
    if(value){
        if(type=="店名"){
            let data = await getStore({ curPage, eachPage},{name:{$regex:`${value}`}} );
            res.send(data);
        }
        else if(type=="营业执照号码"){
            let data = await getStore({ curPage, eachPage},{number:{$regex:`${value}`}});
            res.send(data);
        }
        else if(type=="营业地址"){
            let data = await getStore({ curPage, eachPage},{address:{$regex:`${value}`}});
            res.send(data);
        }
        else if(type=="定位"){
            let data = await getStore({ curPage, eachPage},{location:{$regex:`${value}`}});
            res.send(data);
        }
        else if(type=="所在城市"){
            let data = await getStore({ curPage, eachPage},{city:{$regex:`${value}`}});
            res.send(data);
        }
        else if(type=="联系电话"){
            let data = await getStore({ curPage, eachPage},{phone:{$regex:`${value}`}});
            res.send(data);
        }
        else if(type=="特色"){
            let data = await getStore({ curPage, eachPage},{characteristic:{$regex:`${value}`}});
            res.send(data);
        }
        else if(type=="VIP等级"){
            let data = await getStore({ curPage, eachPage},{vip:{$regex:`${value}`}});
            res.send(data);
        }
        else if(type=="佣金比例"){
            let data = await getStore({ curPage, eachPage},{commission:{$regex:`${value}`}});
            res.send(data);
        }
    }
    else{
        let data = await get({ curPage, eachPage});
        res.send(data);
    }
});

router.post('/create', async function (req, res, next) {
    const params = req.body;
    let data = await create(params);
    res.send(data);
});

router.get('/:_id', async function (req, res, next) {
    const { _id } = req.params;
    let data = await getById(_id);
    res.send(data);
});

router.patch('/:_id', async function (req, res, next) {
    
    const { _id } = req.params;
    const params = req.body;
    for (let k in params) {
        if (/^\$/.test(k)) params[k] = JSON.parse(params[k]);
    }
    let data = await update(_id, params);
    res.send(data);
});
module.exports = router;