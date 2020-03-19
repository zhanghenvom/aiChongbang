var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var { get,addStoreOrder,getStoreOrderById,remove,upDateStoreOrder} = require("../services/storeOrderService");

router.get('/storeOrder', async function (req, res, next) {
  const { current,pageSize } = req.query;
  console.log("server-router",current,pageSize );
    let data = await get({ current,pageSize });
    res.send(data);
});
  //添加门店商品 restful
  router.post("/addStoreOrder", async function(req, res, next) {
    //前台传过来的username //解构出来的是对象 app里的username也应该是对象
    // console.log(req.params);
    console.log(req.body);
    // const { _id } = req.params;
    const { orderName,storeName,totalAmountOfOrder,
        score,orderContent,EvaluationOfNature,appraiser,orderImage} = req.body;
    console.log({orderName,storeName,totalAmountOfOrder,
        score,orderContent,EvaluationOfNature,appraiser,orderImage},'server-router');
    const data = await addStoreOrder({ orderName,storeName,totalAmountOfOrder,
        score,orderContent,EvaluationOfNature,appraiser,orderImage});
    // console.log(data);
    res.send(data);
  });

 //通过id获取数据
router.get("/:_id", async function(req, res, next) {
  //二级
  const { _id } = req.params;
  let data = await getStoreOrderById(_id);
  // console.log(data);
  res.send(data);
});
//删除订单   restful
router.delete("/:_id", async function(req, res, next) {
  // console.log(params);
  // console.log(req.body);
  const { _id } = req.params;
  // const { name, age, gender } = req.body; //body拿的数据通过解构得到对象
  console.log("server",{_id});
  const data = await remove({_id});
  res.send(data);
});
//更新商品
router.patch("/:_id", async function(req, res, next) {
  console.log(req.params);
  const { _id } = req.params;
  const par = req.body;
  // console.log({_id, name,age,gender});
  const data = await upDateStoreOrder(_id, par);
  res.send(data);
});
module.exports = router;