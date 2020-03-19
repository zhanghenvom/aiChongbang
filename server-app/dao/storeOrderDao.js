var mongoose = require("mongoose");
const get = async ({ current, pageSize }) => {
  console.log("server-order-dao", current, pageSize );
  //可以接受错误信息和data   只有一个执行   错误优先机制
  const result = {};
  const storeOrderModel = mongoose.model("storeOrder");
  result.total = await storeOrderModel.countDocuments();
  result.rows = await storeOrderModel
    .find() //找到rows中的所有的数据
    .sort({ _id: -1 })
    .skip((current - 1) * pageSize) //当前页减1*pageSize得到跳过的数量
    .limit(pageSize)
    // .populate('cinemas')
    // .populate('imgs')
    .exec(); //执行，保持代码完整
  result.maxPage = Math.ceil(result.total / pageSize); //向上取整得到页数
  // return await mongoose.model("students").find().sort({_id:-1}); // 1个参数是查询  2个是赋值  3个参数是添加
  // console.log(result);
  return result;
};
//添加
const addStoreOrder = async data =>
  await mongoose.model("storeOrder").create(data);
const getStoreOrderById = async _id => {
  console.log(_id);
  return await mongoose
    .model("storeOrder")
    .findOne({ _id })
    // .populate("classes")
    .exec();
};
//删除id
const remove = async _id => {
  return await mongoose.model("storeOrder").remove(_id);
};
//修改
const upDateStoreOrder = async (_id, params) => {
  return await mongoose.model("storeOrder").updateOne({ _id }, params);
};

module.exports = { get, addStoreOrder,getStoreOrderById,remove,upDateStoreOrder };
