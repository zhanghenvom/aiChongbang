var rp = require('request-promise');
const {target} = require("../unils/options.js");
const fs = require('fs');

const serveAdd = async (params)=>{
    console.log(params,11);
    
        var options = {
            method:"POST",
            uri:`${target}/storeServe/add`,
            body:params,
            json:true
        };
        return await rp(options)
    };

const getServe = async ()=>{
        var options = {
            method:"GET",
            uri:`${target}/storeServe/getServe`,
            json:true
        };
        return await rp(options)
    };

const del = async ({_id})=>{
    var options = {
        method:"DELETE",
        uri:`${target}/storeServe/del`,
        qs:{...{_id}},
        json:true
    };
    return await rp(options)
}

const getById = async ({_id})=>{
    var options = {
        method:"GET",
        uri:`${target}/storeServe/getById`,
        qs:{...{_id}},
        json:true
    };
    return await rp(options)
}

const update = async (param)=>{
    var options = {
        method:"POST",
        uri:`${target}/storeServe/update`,
        body:{...param},
        json:true
    };
    return await rp(options)
}

module.exports = {
    serveAdd,
    getServe,
    del ,
    getById,
    update
}