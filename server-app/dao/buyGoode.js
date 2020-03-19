var mongoose = require("mongoose");

//持久层
const buy = async (parmeter) => {
    return await mongoose.model("storeGoods").create(parmeter);

};

const get = async () => {
    return await mongoose.model("supplierCommodity").find();
};

module.exports = { buy ,get}