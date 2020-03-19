// //持久层
var mongoose = require('mongoose');

const add = async ({name,sort,waiterGrade,price,
    serveSize,suitableSize,times,useTime})=> 
    await mongoose.model("serve").create({name,sort,waiterGrade,price,
        serveSize,suitableSize,times,useTime});

const update = async ({_id},{name,sort,waiterGrade,price,
    serveSize,suitableSize,times,useTime})=> 
    await mongoose.model("serve").updateOne({_id},{name,sort,waiterGrade,price,
        serveSize,suitableSize,times,useTime});
    

const get = async ()=> await mongoose.model("serve").find()

const getById = async ({_id})=> await mongoose.model("serve").find({_id})

const del = async ({_id})=> await mongoose.model("serve").remove({_id})

module.exports = {
    add,
    get,
    del,
    getById,
    update
} ;
