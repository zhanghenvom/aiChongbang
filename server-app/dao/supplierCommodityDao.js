var mongoose = require("mongoose");
const getSupplierCommoditys = async ({curPage, eachPage,supplierId}) => {
    //可以接受错误信息和data   只有一个执行   错误优先机制
    const result = {};
    const supplierCommodityModel = mongoose.model('supplierCommodity');
    result.total = await supplierCommodityModel.countDocuments();
    result.rows = await supplierCommodityModel
        .find({supplierId})//找到rows中的所有的数据
        .sort({ _id: -1 })
        .skip((curPage - 1) * eachPage)//当前页减1*eachpage得到跳过的数量
        .limit(eachPage)
        .exec();//执行，保持代码完整
    result.maxPage = Math.ceil(result.total / eachPage); //向上取整得到页数
    result.curPage=~~curPage;
    result.eachPage=~~eachPage;
    // return await mongoose.model("students").find().sort({_id:-1}); // 1个参数是查询  2个是赋值  3个参数是添加
    return result;
};
const addSupplierCommodity = async (newSupplierCommodity) => {
    return await mongoose.model('supplierCommodity').create(newSupplierCommodity);
   
   }
const removeSupplierCommodity = async (_id) => {
    return await mongoose.model('supplierCommodity').remove({_id});
   
   }
const getSupplierCommodity = async (_id) => {
    let data= await mongoose.model('supplierCommodity').find({_id});
    return data;
   
   }
const updateSupplierCommodity = async (_id,date) => {
    await mongoose.model('supplierCommodity').updateOne(
        {
            _id
        },
        date
    )
    return await mongoose.model("supplierCommodity").find({ _id })
   
   }
module.exports={getSupplierCommoditys,addSupplierCommodity,removeSupplierCommodity,getSupplierCommodity,updateSupplierCommodity}