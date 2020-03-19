var platformDao = require("../dao/platformDao");

const getUser = async ({ curPage, eachPage }, pra) => {
    return await platformDao.getUser({ curPage, eachPage }, pra)
}
const getLoads = async ({ curPage, eachPage },pra) => {
    return await platformDao.getLoads({ curPage, eachPage },pra)
}
const getSuppliers = async ({ curPage, eachPage },pra) => {
    return await platformDao.getSuppliers({ curPage, eachPage },pra)
}
const removeUser = async (_id) => {
    return await platformDao.removeUser(_id)
}
const removeLoad = async (_id) => {
    return await platformDao.removeLoad(_id)
}
const getUserById = async (_id) => {
    return await platformDao.getUserById(_id)
}
const getLoadById = async (_id) => {
    return await platformDao.getLoadById(_id)
}
const updateUser = async (_id, params) => {
    return await platformDao.updateUser(_id, params)
}
const updateLoad = async (_id, params) => {
    return await platformDao.updateLoad(_id, params)
}
const updateSupplier = async (_id, params) => {
    return await platformDao.updateSupplier(_id, params)
}
const addLoad = async (params) => {
    return await platformDao.addLoad(params)
}
module.exports = { getUser, removeUser, getUserById, updateUser, getLoads, removeLoad, getLoadById, updateLoad, addLoad, getSuppliers, updateSupplier }