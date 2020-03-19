var mongoose = require("mongoose");
const getUser = async ({ curPage, eachPage, }, pra) => {
    //可以接受错误信息和data   只有一个执行   错误优先机制
    if (!pra) {
        const result = {};
        const userModel = mongoose.model('user');
        result.total = await userModel.countDocuments();
        result.rows = await userModel
            .find()//找到rows中的所有的数据
            .sort({ _id: -1 })
            .skip((curPage - 1) * eachPage)//当前页减1*eachpage得到跳过的数量
            .limit(eachPage)
            .exec();//执行，保持代码完整
        result.maxPage = Math.ceil(result.total / eachPage); //向上取整得到页数
        return result;
    }
    const result = {};
    const userModel = mongoose.model('user');
    result.total = await userModel.countDocuments();
    result.rows = await userModel
        .find(pra)//找到rows中的所有的数据
        .sort({ _id: -1 })
        .skip((curPage - 1) * eachPage)//当前页减1*eachpage得到跳过的数量
        .limit(eachPage)
        .exec();//执行，保持代码完整
    result.maxPage = Math.ceil(result.total / eachPage); //向上取整得到页数
    return result;
};

const getLoads = async ({ curPage, eachPage }, pra) => {
    if (!pra) {
        const result = {};
        const spoiledLordModel = mongoose.model('spoiledLord');
        result.total = await spoiledLordModel.countDocuments();
        result.rows = await spoiledLordModel
            .find()//找到rows中的所有的数据
            .sort({ _id: -1 })
            .skip((curPage - 1) * eachPage)//当前页减1*eachpage得到跳过的数量
            .limit(eachPage)
            .exec();//执行，保持代码完整
        result.maxPage = Math.ceil(result.total / eachPage); //向上取整得到页数
        return result;
    }
    //可以接受错误信息和data   只有一个执行   错误优先机制
    const result = {};
    const spoiledLordModel = mongoose.model('spoiledLord');
    result.total = await spoiledLordModel.countDocuments();
    result.rows = await spoiledLordModel
        .find(pra)//找到rows中的所有的数据
        .sort({ _id: -1 })
        .skip((curPage - 1) * eachPage)//当前页减1*eachpage得到跳过的数量
        .limit(eachPage)
        .exec();//执行，保持代码完整
    result.maxPage = Math.ceil(result.total / eachPage); //向上取整得到页数
    return result;

};
const getSuppliers = async ({ curPage, eachPage }, pra) => {
    //可以接受错误信息和data   只有一个执行   错误优先机制
    if (!pra) {
        const result = {};
        const supplierModel = mongoose.model('suppliers');
        result.total = await supplierModel.countDocuments();
        result.rows = await supplierModel
            .find()//找到rows中的所有的数据
            .sort({ _id: -1 })
            .skip((curPage - 1) * eachPage)//当前页减1*eachpage得到跳过的数量
            .limit(eachPage)
            .exec();//执行，保持代码完整
        result.maxPage = Math.ceil(result.total / eachPage); //向上取整得到页数
        return result;
    }
    const result = {};
    const supplierModel = mongoose.model('suppliers');
    result.total = await supplierModel.countDocuments();
    result.rows = await supplierModel
        .find(pra)//找到rows中的所有的数据
        .sort({ _id: -1 })
        .skip((curPage - 1) * eachPage)//当前页减1*eachpage得到跳过的数量
        .limit(eachPage)
        .exec();//执行，保持代码完整
    result.maxPage = Math.ceil(result.total / eachPage); //向上取整得到页数
    return result;
};

const removeUser = async (_id) => {
    return await mongoose.model('user').remove({ _id });
}

const removeLoad = async (_id) => {
    return await mongoose.model('spoiledLord').remove({ _id });
}

const getUserById = async _id => {
    return await mongoose.model('user').find({ _id });
};

const getLoadById = async _id => {
    return await mongoose.model('spoiledLord').find({ _id });
};

const updateUser = async (_id, params) => {
    await mongoose.model('user').updateOne({ _id }, params)
    return await mongoose.model("user").find({ _id })
};
const updateLoad = async (_id, params) => {
    await mongoose.model('spoiledLord').updateOne({ _id }, params)
    return await mongoose.model("spoiledLord").find({ _id })
};
const updateSupplier = async (_id, params) => {
    await mongoose.model('suppliers').updateOne({ _id }, params)
    return await mongoose.model("suppliers").find({ _id })
};
const addLoad = async (params) => {
    await mongoose.model('spoiledLord').create(params)
    return await mongoose.model("spoiledLord").find(params)
};
module.exports = { getUser, removeUser, getUserById, updateUser, getLoads, removeLoad, getLoadById, updateLoad, addLoad, getSuppliers, updateSupplier }