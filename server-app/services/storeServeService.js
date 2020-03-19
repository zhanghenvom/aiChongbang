const serve = require("../dao/serveManageDao.js");

const add = async ({name,sort,waiterGrade,price,
    serveSize,suitableSize,times,useTime}) => 
    await serve.add({name,sort,waiterGrade,price,
        serveSize,suitableSize,times,useTime});

const update = async ({_id},{name,sort,waiterGrade,price,
    serveSize,suitableSize,times,useTime}) => 
    await serve.update({_id},{name,sort,waiterGrade,price,
        serveSize,suitableSize,times,useTime});

const get = async () => await serve.get();

const del = async ({_id})=> await serve.del({_id})


const getById = async ({_id})=> await serve.getById({_id})

module.exports = {
    add,
    get,
    del,
    getById,
    update
}