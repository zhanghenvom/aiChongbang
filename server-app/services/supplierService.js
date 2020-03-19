var suppilerDao = require("../dao/supplierDao");


const addSupplier = async (newSupplier) => {
    return await suppilerDao.addSupplier(newSupplier)
}

const getSupplier = async (_id) => {
    return await suppilerDao.getSupplier(_id)
}
const updateSupplier = async (_id,date) => {

    return await suppilerDao.updateSupplier(_id,date)
}
module.exports={addSupplier,getSupplier,updateSupplier}