var mongoose = require("mongoose");

//持久层
const login = async (parmeter) => {
    return await mongoose.model("shopUser").findOne(parmeter);

};

const reg = async (parmeter) => {
    return await mongoose.model("shopUser").create(parmeter)
}

module.exports = { login, reg }