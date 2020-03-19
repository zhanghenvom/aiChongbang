var mongoose = require("mongoose");
const get = async ({ curPage, eachPage }) => {
    //可以接受错误信息和data   只有一个执行   错误优先机制
    const result = {};
    const moviesModel = mongoose.model('store');
    result.total = await moviesModel.countDocuments();
    result.rows = await moviesModel
        .find()//找到rows中的所有的数据
        .sort({ _id: -1 })
        .skip((curPage - 1) * eachPage)//当前页减1*eachpage得到跳过的数量
        .limit(eachPage)
        // .populate('cinemas')
        .populate('user')
        .exec();//执行，保持代码完整
    result.maxPage = Math.ceil(result.total / eachPage); //向上取整得到页数
    // return await mongoose.model("students").find().sort({_id:-1}); // 1个参数是查询  2个是赋值  3个参数是添加
    // console.log(result);
    return result;
};
const getStore = async ({ curPage, eachPage },pra) => {
    //可以接受错误信息和data   只有一个执行   错误优先机制
    const result = {};
    const moviesModel = mongoose.model('store');
    result.total = await moviesModel.countDocuments();
    result.rows = await moviesModel
        .find(pra)//找到rows中的所有的数据
        .sort({ _id: -1 })
        .skip((curPage - 1) * eachPage)//当前页减1*eachpage得到跳过的数量
        .limit(eachPage)
        // .populate('cinemas')
        // .populate('imgs')
        .exec();//执行，保持代码完整
    result.maxPage = Math.ceil(result.total / eachPage); //向上取整得到页数
    // return await mongoose.model("students").find().sort({_id:-1}); // 1个参数是查询  2个是赋值  3个参数是添加
    // console.log(result);
    return result;
};
const create = async (self) => {
    console.log(self);
    return await mongoose.model('store').create(self)
};

const getById = async _id => await mongoose
    .model('store')
    .findOne({ _id })
    .exec();

const update = async (_id, pra) =>{ 
    console.log(pra.form);
    
    await mongoose.model('store').updateOne({ _id }, pra.form)
};
module.exports = { get, create, getById,update,getStore };