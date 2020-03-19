var suppilerCommodityDao = require("../dao/supplierCommodityDao");

const getSupplierCommoditys = async (curPage, eachPage,supplierId) => {
    return await suppilerCommodityDao.getSupplierCommoditys({curPage, eachPage,supplierId})
}
const addSupplierCommodity = async (newSupplierCommodity) => {
    return await suppilerCommodityDao.addSupplierCommodity(newSupplierCommodity)
}
const removeSupplierCommodity = async (_id) => {
    return await suppilerCommodityDao.removeSupplierCommodity(_id)
}
const getSupplierCommodity = async (_id) => {
    return await suppilerCommodityDao.getSupplierCommodity(_id)
}
const updateSupplierCommodity = async (_id,date) => {
    return await suppilerCommodityDao.updateSupplierCommodity(_id,date)
}
module.exports={getSupplierCommoditys,addSupplierCommodity,removeSupplierCommodity,getSupplierCommodity,updateSupplierCommodity}