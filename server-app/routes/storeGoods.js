var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var { get,remove,addStoreGoods,upDateStoreGoods,getStoreGoodsById } = require("../services/storeGoodsService");

router.get('/storeGoods', async function (req, res, next) {
  const { current,pageSize } = req.query;
  console.log("server-router",current,pageSize );
    let data = await get({ current,pageSize });
    res.send(data);
});
//删除数据   restful
router.delete("/:_id", async function(req, res, next) {
    // console.log(params);
    // console.log(req.body);
    const { _id } = req.params;
    // const { name, age, gender } = req.body; //body拿的数据通过解构得到对象
    console.log("server",{_id});
    const data = await remove({_id});
    res.send(data);
  });
  //添加门店商品 restful
router.post("/addStoreGoods", async function(req, res, next) {
  //前台传过来的username //解构出来的是对象 app里的username也应该是对象
  // console.log(req.params);
  console.log(req.body);
  // const { _id } = req.params;
  const { name,
    type,
    make,
    applicableSpecifications,
    exclusiveSpecifications,
    packingSpecification,
    taste,
    specialFunction,
    placeOfOrign,
    dateOfProduction,
    expirationDate,
    supplierNumber,
    featuresThat,
    wholesalePrice,
    number,
    imgs} = req.body;
  console.log({ name,
    type,
    make,
    applicableSpecifications,
    exclusiveSpecifications,
    packingSpecification,
    taste,
    specialFunction,
    placeOfOrign,
    dateOfProduction,
    expirationDate,
    supplierNumber,
    featuresThat,
    wholesalePrice,
    number,
    imgs},'server-router');
  const data = await addStoreGoods({ name,
    type,
    make,
    applicableSpecifications,
    exclusiveSpecifications,
    packingSpecification,
    taste,
    specialFunction,
    placeOfOrign,
    dateOfProduction,
    expirationDate,
    supplierNumber,
    featuresThat,
    wholesalePrice,
    number,
    imgs});
  // console.log(data);
  res.send(data);
});
//更新商品
router.patch("/:_id", async function(req, res, next) {
  console.log(req.params);
  const { _id } = req.params;
  const par = req.body;
  // console.log({_id, name,age,gender});
  const data = await upDateStoreGoods(_id, par);
  res.send(data);
});
//通过id获取数据
router.get("/:_id", async function(req, res, next) {
  //二级
  const { _id } = req.params;
  let data = await getStoreGoodsById(_id);
  // console.log(data);
  res.send(data);
});
module.exports = router;