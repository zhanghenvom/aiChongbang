var express = require('express');
var router = express.Router();
var { uploadFile } = require('../unils/upload.js');
var storeGoodsService = require('../services/storeGoodsServices');

//获取商品
router.get('/storeGoods', async function (req, res, next) {
    const { current,pageSize } = req.query;
    console.log("proxy-router",{current,pageSize });
    
    let data = await storeGoodsService.get({ current,pageSize });
    res.send(data);
});
//删除商品
router.delete('/:_id', async function (req, res, next) { //二级
    const { _id } = req.params;
    // console.log("router1",_id); 
   const data = await storeGoodsService.delGoodsById(_id);
   console.log(data, 22222);
   res.send(data)
 });
 //上传图片
 router.post('/upload', async function (req, res, next) {
    const { data, success} = await uploadFile(req, {
        fileType: "storeGoodsIms", //创建文件目录
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
        res.send(url);
        return;
    }
    res.send({msg:"操作失败"});
});
//图片更新 修改
router.patch("/:_id", async function(req,res,next){
    const { _id } = req.params;
    const params = req.body;
    console.log( _id,params,"haolo");
    const data = await storeGoodsService.update(_id,params);//做修改
    console.log(222222);
    if(data.nModified&&params["$pull"]){
        const {img} = JSON.parse( params["$pull"]);
        console.log('删除的路径',img);//删除的路径
        storeGoodsService.delImg(img)
    }
    const result =  await storeGoodsService.getStoreGoodsById(_id);//通过id查询 返回
    res.send(result);
    // console.log("proxy-router",data);
})



//增加门店商品
router.post('/addStoreGoods', async function (req, res, next) { //二级
    const {name,
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
    console.log(name,
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
        imgs,"add111111111111111111");
   const data = await storeGoodsService.addStoreGoods(name,
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
    imgs);
//    console.log(data, 22222);
   res.send(data)
 });
//修改门店商品
router.post('/upDateStoreGoods', async function (req, res, next) { //二级
    const {name,
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
        imgs,
    _id} = req.body;
    console.log(name,
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
        imgs,
    _id,"upDateStoreGoods");
   const data = await storeGoodsService.upDateStoreGoods(name,
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
    imgs,
_id);
//    console.log(data, 22222);
   res.send(data)
 });
//通过id获取商品
router.get('/:_id', async function (req, res, next) { //二级
    const { _id } = req.params;
    console.log(_id, 22222);
   const data = await storeGoodsService.getStoreGoodsById({_id});
   res.send(data)
 });
module.exports = router;
