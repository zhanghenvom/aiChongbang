const { md5, secretKey } = require('../unils/salt');
var rp = require('request-promise');
const { target } = require('../unils/options');
const fs = require('fs');

const get = async (params) => {
    console.log(params);
    var options = {
        method: 'GET',
        url: `${target}/store/store`,
        json: true,
        body: {params},
    };
    return await rp(options);
};


const create = async ( params) => {
    console.log(params);
    
    var options = {
        method: 'POST',
        url: `${target}/store/create`,
        json: true,
        body: params,
    };
    return await rp(options);
};
const update = async (_id, params) => {
    console.log(_id, params);
    var options = {
        method: 'patch',
        url: `${target}/store/${_id}`,
        json: true,
        body: params,_id
    };
    return await rp(options);
};

const getById = async (_id, params) => {
    var options = {
        method: 'GET',
        url: `${target}/store/`+_id,
        json: true
    };
    return await rp(options);
};
module.exports = { get,create,getById,update };