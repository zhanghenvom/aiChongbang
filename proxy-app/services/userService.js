const { md5, secretKey } = require('../unils/salt.js');
var rp = require('request-promise');
const { target } = require('../unils/options.js');
const jwt = require("jsonwebtoken");

//服务层

const login = async ({ loginName, password }) => {
    const newPwd = md5(password);
    var options = {
        method: 'GET',
        uri: `${target}/user/login`,
        qs: {
            loginName, password: newPwd
        },
        json: true
    };
    let data = await rp(options);
    return data;
};

const isSame = async (loginName) => {
    var options = {
        method: 'GET',
        uri: `${target}/user/isSame`,
        body: {
            loginName
        },
        json: true
    };
    return await rp(options);
};

const reg = async ({ loginName, password, phone, emaill, name, type, status ,admin}) => {
    const newPwd = md5(password);
    var options = {
        method: 'POST',
        uri: `${target}/user/reg`,
        body: {
            loginName, password: newPwd, phone, emaill, name, type, status,admin
        },
        json: true
    };
    return await rp(options);
};

const generatorToken = function ({ loginName }) {//获取token
    const payload = { loginName };
    let token = jwt.sign(
        payload,
        secretKey,
        {
            expiresIn: 60 * 60 * 24 * 7   //生命周期 
        }
    );
    return token;
};


module.exports = { reg, login, generatorToken ,isSame};
