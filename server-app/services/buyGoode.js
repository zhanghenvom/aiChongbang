//服务层
const userDao = require('../dao/buyGoode');

const buy = async function (parameter) {
    const data = await userDao.buy(parameter);
    if (data == null) {
        return false;
    } else {
        return data;
    };
}

const get = async function () {
    return await userDao.get();
}
module.exports = { buy,get}