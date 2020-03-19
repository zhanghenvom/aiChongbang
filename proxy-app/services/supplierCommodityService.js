var rp = require('request-promise');
const { target } = require("../unils/options");
const fs = require('fs');

 const getSupplierCommoditys = async (curPage, eachPage,supplierId) => {
    var options = {
        method: 'GET',
        uri: `${target}/supplierCommodity`,
        body: {curPage, eachPage,supplierId},
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};
 const addSupplierCommodity = async (supplierCommodity) => {
    var options = {
        method: 'POST',
        uri: `${target}/supplierCommodity`,
        body: {supplierCommodity},
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};
 const removeSupplierCommodity = async (_id) => {
    var options = {
        method: 'DELETE',
        uri: `${target}/supplierCommodity/`+_id,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};
 const getSupplierCommodity = async (_id) => {
    var options = {
        method: 'GET',
        uri: `${target}/supplierCommodity/`+_id,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};
 const updateSupplierCommodity = async (supplierCommodity) => {
    var options = {
        method: 'PATCH',
        uri: `${target}/supplierCommodity/`,
        body: {supplierCommodity},
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};
module.exports ={getSupplierCommoditys,addSupplierCommodity,removeSupplierCommodity,getSupplierCommodity,updateSupplierCommodity}