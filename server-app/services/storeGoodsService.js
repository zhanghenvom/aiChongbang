var storeDao = require("../dao/storeGoodsDao");
const get = async ({ current,pageSize}) => await storeDao.get({ current,pageSize });
const remove = async (_id) => await storeDao.remove(_id);
//添加
const addStoreGoods = async (data) => { return await storeDao.addStoreGoods(data);}
//修改
const upDateStoreGoods = async (_id,params)=>{ return  await storeDao.upDateStoreGoods({_id},params);}
  
const getStoreGoodsById =async  _id =>await storeDao.getStoreGoodsById({_id}); 
module.exports = { get,remove,addStoreGoods,upDateStoreGoods,getStoreGoodsById };