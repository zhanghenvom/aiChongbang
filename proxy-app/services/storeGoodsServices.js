const { md5, secretKey } = require("../unils/salt");
var rp = require("request-promise");
const { target } = require("../unils/options");
const fs = require("fs");

const get = async (current,pageSize) => {
  var options = {
    method: "GET",
    url: `${target}/storeGoods/storeGoods`,
    qs: { current, pageSize },
    json: true
  };
  return await rp(options);
};
//删除商品
const delGoodsById = async _id => {
  // console.log("service", _id);
  var options = {
    method: "DELETE",
    uri: `${target}/storeGoods/${_id}`,
    json: true,
  };
  return await rp(options);
};
//增加商品
const addStoreGoods = async ({
  name,
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
        imgs
}) => {
  var options = {
    method: "POST",
    uri: `${target}/storeGoods/addStoreGoods`,
    body: {
      name,
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
      imgs
    },
    json: true
  };
  return await rp(options);
};
//修改商品
const upDateStoreGoods = async ({
  name,
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
  _id
}) => {
  // console.log(name, age, gender,_id, 22222);
  var options = {
    method: "PATCH",
    uri: `${target}/storeGoods/${_id}`,
    body: {
      name,
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
  _id
    },
    json: true
  };
  return await rp(options);
};
//通过id获取商品
const getStoreGoodsById = async ({ _id }) => {
  console.log(_id);

  var options = {
    method: "GET",
    uri: `${target}/storeGoods/${_id}`,
    json: true
  };
  return await rp(options);
};


//改为通用的动态上传
const update = async (_id, params) => {
  // console.log("proxy-service",_id,params);
  var options = {
    method: "PATCH",
    url: `${target}/storeGoods/${_id}`,
    body: params, //由前端传     把params从上边的uri接口发出去
    
    // $push:{
      //     //upload里的data的url
      //     //img要和public-router路由里创建的img文件夹名一致
      //     img:data.url//options身上的imgs   upload模块里 data里 如果不传id，默认一个url，
      // },
      json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
  };
  //删除图片
  const delImg = async url => {
    console.log(url);
    fs.unlink(`./public${url}`, err => {
      //如果有删除成功
      if (err) throw err;
      console.log(`已成功删除 ./public${url}`);
    });
  };

module.exports = {
  get,
  delGoodsById,
  addStoreGoods,
  upDateStoreGoods,
  getStoreGoodsById,
  delImg,
  update
};
