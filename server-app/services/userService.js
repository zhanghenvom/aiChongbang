//服务层
const userDao = require('../dao/userDao');

const login = async function (parameter) {
    const data = await userDao.login(parameter);
    if (data == null) {
        return false;
    } else {
        return data;
    };
}

const isSame = async function (parameter) {
    const data = await userDao.isSame(parameter.loginName);
    if (data == null) {
        return false;
    } else {
        return data;
    };
}

const reg = async function (parameter) {
    return await userDao.reg(parameter)
}

module.exports = { login, reg, isSame }