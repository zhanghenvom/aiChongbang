var rp = require('request-promise');
const { target } = require("../unils/options");
const fs = require('fs');

const getUser = async (curPage, eachPage, type, value) => {
    var options = {
        method: 'GET',
        uri: `${target}/platform/users`,
        body: curPage, eachPage, type, value,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};

const getLoads = async (curPage, eachPage, type, value) => {
    var options = {
        method: 'GET',
        uri: `${target}/platform/loads`,
        body: curPage, eachPage, type, value,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};

const getSuppliers = async (curPage, eachPage, type, value) => {
    var options = {
        method: 'GET',
        uri: `${target}/platform/suppliers`,
        body: curPage, eachPage, type, value,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};

const removeUser = async (_id) => {
    var options = {
        method: 'delete',
        uri: `${target}/platform/` + _id,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};

const removeLoad = async (_id) => {
    var options = {
        method: 'delete',
        uri: `${target}/platform/load/` + _id,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};

const getUserById = async _id => {
    var options = {
        method: 'GET',
        uri: `${target}/platform/` + _id,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};

const getLoadById = async _id => {
    var options = {
        method: 'GET',
        uri: `${target}/platform/load/` + _id,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};

const updateUser = async updateUser => {
    var options = {
        method: 'post',
        uri: `${target}/platform/updateUser`,
        body: updateUser,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};

const updateLoad = async updateLoad => {
    var options = {
        method: 'post',
        uri: `${target}/platform/updateLoad`,
        body: updateLoad,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};

const updateSupplier = async updateSupplier => {
    var options = {
        method: 'post',
        uri: `${target}/platform/updateSupplier`,
        body: updateSupplier,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};

const addLoad = async addLoadInfo => {
    var options = {
        method: 'post',
        uri: `${target}/platform/addLoad`,
        body: addLoadInfo,
        json: true // Automatically stringifies the body to JSON
    };
    return await rp(options);
};

module.exports = { getUser, removeUser, getUserById, updateUser, getLoads, removeLoad, getLoadById, updateLoad, addLoad, getSuppliers, updateSupplier };