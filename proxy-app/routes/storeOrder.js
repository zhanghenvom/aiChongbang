var express = require('express');
var router = express.Router();
var { uploadFile } = require('../unils/upload.js');
var storeOrderService = require('../services/storeOrderService');

//获取订单
router.get('/storeOrder', async function (req, res, next) {
    const { current,pageSize } = req.query;
    console.log("proxy-router",{current,pageSize });
    let data = await storeOrderService.getOrder({ current,pageSize });
    console.log("proxy router-order",data);
    
    res.send(data);
});
//增加门店订单
router.post('/addStoreOrder', async function (req, res, next) { //二级
    const {orderName,storeName,totalAmountOfOrder,
        score,orderContent,EvaluationOfNature,appraiser,orderImage} = req.body;
    console.log(orderName,storeName,totalAmountOfOrder,
        score,orderContent,EvaluationOfNature,appraiser,orderImage,"add111111111111111111");
   const data = await storeOrderService.addStoreOrder( orderName,storeName,totalAmountOfOrder,
    score,orderContent,EvaluationOfNature,appraiser,orderImage);
//    console.log(data, 22222);
   res.send(data)
 });
 //上传图片和数据
router.post('/upload', async function (req, res, next) {
    const { data, success} = await uploadFile(req, {
        fileType: "storeOrderIms", //创建文件目录
        path: "./public/imgs", //文件所在路径
    });
    if (success) {
        const { _id,url} = data; //从data身上解构_id和url出来
        // await studentService.update(_id,{
        //     $push:JSON.stringify({
        //         img:url,
        //     })
        // });//等待服务器的更新数据返回
        // const result =  await studentService.getById(_id);
        // res.send(result);
        console.log(url);
        res.send(url)
        return;
    }
    res.send({msg:"操作失败"});
});
//图片更新 修改
router.patch("/:_id", async function(req,res,next){
    const { _id } = req.params;
    const params = req.body;
    console.log( _id,params,"haolo");
    const data = await storeOrderService.update(_id,params);//做修改
    console.log(222222);
    if(data.nModified&&params["$pull"]){
        const {img} = JSON.parse( params["$pull"]);
        console.log('删除的路径',img);//删除的路径
        storeOrderService.delImg(img)
    }
    const result =  await storeOrderService.getStoreOrderById(_id);//通过id查询 返回
    res.send(result);
    // console.log("proxy-router",data);
})
//删除商品
router.delete('/:_id', async function (req, res, next) { //二级
    const { _id } = req.params;
    console.log("router",_id); 
   const data = await storeOrderService.delOrderById(_id);
//    console.log(data, 22222);
   res.send(data)
 });
 //修改门店商品
router.post('/upDateStoreOrder', async function (req, res, next) { //二级
    const {orderName,storeName,totalAmountOfOrder,
        score,orderContent,EvaluationOfNature,appraiser,orderImage,_id } = req.body;
    console.log("修改",{orderName,storeName,totalAmountOfOrder,
        score,orderContent,EvaluationOfNature,appraiser,orderImage,_id},"upDateStoreGoods");
   const data = await storeOrderService.upDateStoreOrder(orderName,storeName,totalAmountOfOrder,
    score,orderContent,EvaluationOfNature,appraiser,orderImage,_id);
//    console.log(data, 22222);
   res.send(data)
 });
 //根据id获取
 router.get('/:_id', async function (req, res, next) { //二级
    const { _id } = req.params;
    console.log(_id, 22222);
   const data = await storeOrderService.getStoreOrderById({_id});
   res.send(data)
 });
module.exports = router;