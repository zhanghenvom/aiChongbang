var storeOrderDao = require("../dao/storeOrderDao");
const get = async ({ current, pageSize }) =>
  await storeOrderDao.get({ current, pageSize });
const remove = async (_id) => await storeOrderDao.remove(_id);
//添加
const addStoreOrder = async data => {
  return await storeOrderDao.addStoreOrder(data);
};
//修改
const upDateStoreOrder = async (_id,params)=>{ return  await storeOrderDao.upDateStoreOrder({_id},params);}

///通过id获取数据
const getStoreOrderById =async  _id =>await storeOrderDao.getStoreOrderById({_id}); 
module.exports = { get, addStoreOrder, getStoreOrderById,remove,upDateStoreOrder };
