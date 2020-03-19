import axios from "axios";

// export const addStudent = async (name, age, gender, images) => {
//   console.log(name, age, gender, images);

//   let res = await axios({
//     method: "post",
//     url: "/api/student/add",
//     data: { name, age, gender, images }
//   });
//   console.log(res);
//   return res.data;
// };
//获取门店商品
export const getStoreGoods = async (current, pageSize) => {
  let res = await axios({
    method: "get",
    url: "/ip/storeGoods/storeGoods",
    params: { current, pageSize }
  });
  return res.data;
};
//删除门店商品
export const removeStoreGoods = async id => {
  console.log("vue", id);

  let res = await axios({
    method: "delete",
    url: "/ip/storeGoods/" + id
  });
  return res.data;
};
//增加门店商品
export const addStoreGoods = async (
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
) => {
  // console.log({goodsName,goodsType,textTureAndMethod,standard,ownStandard,packingStandard,taste,
  //   effect,placeProduction,dateProduction,expiration,supplierNumber,featureExplain,price,goodsImage});
  let res = await axios({
    method: "post",
    url: "/ip/storeGoods/addStoreGoods",
    data: {
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
    }
  });
  // console.log(res);
  return res.data;
};
//修改门店商品
export const upDateStoreGoods = async (
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
) => {
  // console.log(goodsName,goodsType,textTureAndMethod,standard,ownStandard,packingStandard,taste,effect,
  //     placeProduction,dateProduction,expiration,supplierNumber,featureExplain,price,goodsImage,_id,"sadasdasdsdasdasd");
  let res = await axios({
    method: "post",
    url: "/ip/storeGoods/upDateStoreGoods",
    data: {
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
    }
  });
  // console.log(res);
  return res.data;
};
//通过id获取
export const getStoreGoodsById = async id => {
  // console.log(id);
  let res = await axios({
    method: "get",
    url: "/ip/storeGoods/" + id
  });
  // console.log(res);
  return res.data;
};
