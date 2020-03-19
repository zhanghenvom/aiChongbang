var rp = require('request-promise');
const { target } = require("../unils/options");
const fs = require('fs');
 const addSupplier = async (supplier) => {
    var options = {
        method: 'POST',
        uri: `${target}/supplier`,
        body: {supplier},
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};
 const getSupplier = async (_id) => {
    var options = {
        method: 'GET',
        uri: `${target}/supplier/`+_id,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};
 const updateSupplier = async (_id,supplier) => {
    var options = {
        method: 'PATCH',
        uri: `${target}/supplier/`+_id,
        body: {supplier},
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};
module.exports ={addSupplier,getSupplier,updateSupplier}