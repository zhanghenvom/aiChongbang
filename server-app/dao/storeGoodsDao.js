var mongoose = require("mongoose");
const get = async ({ current,pageSize }) => {
  console.log("server-dao",current,pageSize );
  //可以接受错误信息和data   只有一个执行   错误优先机制
  const result = {};
  const storeGoodsModel = mongoose.model("storeGoods");
  result.total = await storeGoodsModel.countDocuments();
  result.rows = await storeGoodsModel
    .find() //找到rows中的所有的数据
    .sort({ _id: -1 })
    .skip((current - 1) * pageSize) //当前页减1*pageSize得到跳过的数量
    .limit(pageSize)
    // .populate('cinemas')
    .populate('user')
    .exec(); //执行，保持代码完整
  result.maxPage = Math.ceil(result.total / pageSize); //向上取整得到页数
  // return await mongoose.model("students").find().sort({_id:-1}); // 1个参数是查询  2个是赋值  3个参数是添加
  // console.log(result);
  return result;
};
//删除id
const remove = async _id => {
  return await mongoose.model("storeGoods").remove(_id);
};
//添加
const addStoreGoods = async data =>
  await mongoose.model("storeGoods").create(data);
//修改
const upDateStoreGoods = async (_id, params) => {
  return await mongoose.model("storeGoods").updateOne({ _id }, params);
};
const getStoreGoodsById = async _id => {
  console.log(_id);
  return await mongoose
    .model("storeGoods")
    .findOne({ _id })
    // .populate("classes")
    .exec();
};
module.exports = { get, remove, addStoreGoods, upDateStoreGoods,getStoreGoodsById };
