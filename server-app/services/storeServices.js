var storeDao = require("../dao/storeDao");
const get = async ({ curPage, eachPage }) => await storeDao.get({ curPage, eachPage });
const getStore = async ({ curPage, eachPage},pra ) =>  await storeDao.getStore({ curPage, eachPage },pra);
const getById = async _id => await storeDao.getById(_id);
const create = async (self) => await storeDao.create(self);
const update = async (_id, pra) => await storeDao.update(_id, pra);
module.exports = { get,create,getById,update,getStore };
