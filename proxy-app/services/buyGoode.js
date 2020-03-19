var rp = require('request-promise');
const { target } = require('../unils/options.js');
//服务层
const buy = async (parameter) => {
    var options = {
        method: 'POST',
        uri: `${target}/buyGoode/buy`,
        body:  parameter ,
        json: true
    };
    return await rp(options);
};
const get = async () => {
    var options = {
        method: 'get',
        uri: `${target}/buyGoode/get`,
        json: true
    };
    return await rp(options);
};

module.exports = { buy,get};