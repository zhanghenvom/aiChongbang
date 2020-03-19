var mongoose = require("mongoose");

//持久层
const login = async (parmeter) => {
    return await mongoose.model("user").findOne(parmeter);

};

const isSame = async (parmeter) => {
    return await mongoose.model("user").findOne(parmeter);
};

const reg = async (parmeter) => {
    return await mongoose.model("user").create(parmeter)
}

module.exports = { login, reg ,isSame}