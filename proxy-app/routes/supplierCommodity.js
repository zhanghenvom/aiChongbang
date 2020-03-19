var express = require('express');
var router = express.Router();
var multiparty =require('multiparty');
var path=require('path')
const { getSupplierCommoditys,addSupplierCommodity,removeSupplierCommodity,getSupplierCommodity,updateSupplierCommodity } = require('../services/supplierCommodityService.js')

router.get('/', async function (req, res, next) {
    let { curPage, eachPage,supplierId } = req.query;
    let data = await getSupplierCommoditys(curPage, eachPage,supplierId);
    res.send(data);
})
router.post('/', async function (req, res, next) {
    let { supplierCommodity } = req.query;  
    let data = await addSupplierCommodity(supplierCommodity);
    res.send(data);
})
router.delete('/:_id', async function (req, res, next) {
    let { _id } = req.params;  
    let data = await removeSupplierCommodity(_id);
    res.send(data);
})
router.get('/:_id', async function (req, res, next) {
    let { _id } = req.params;
    let data = await getSupplierCommodity(_id);
    res.send(data);
})
router.patch('/', async function (req, res, next) {
    let { supplierCommodity } = req.query;
    let data = await updateSupplierCommodity(supplierCommodity);
    res.send(data);
})
router.post('/public', async function (req, res, next) {
    let form= new multiparty.Form({
      uploadDir: './public/images'
    });
    form.parse(req,function(err,fields,files){
      let key = Object.keys(files)[0];
      if(err){
        res.send(err);
      }else{      
        res.send(path.basename(files[key][0].path))
      }
    })
  });

module.exports = router