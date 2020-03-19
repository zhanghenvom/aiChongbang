const { md5, secretKey } = require('../unils/salt.js');
var rp = require('request-promise');
const { target } = require('../unils/options.js');
const jwt = require("jsonwebtoken");
//服务层

// const reg = async ({ storeName,
//     licenseNumber,
//     licenseImage,
//     licenseSite,
//     locate,
//     city,
//     legalerson,
//     tel,
//     headImage,
//     feature,
//     vipGrade,
//     brokerage,
//     clerkType }) => {

//     var options =  {
//         method: 'POST',
//         uri: `${target}/shopUser/reg`,
//         body: {
//             storeName,
//             licenseNumber,
//             licenseImage,
//             licenseSite,
//             locate,
//             city,
//             legalerson,
//             tel,
//             headImage,
//             feature,
//             vipGrade,
//             brokerage,
//             clerkType
//         },
//     };
//     let data = await rp(options);
//     return data;


// };

const reg = async ({ 
    storeName,
    licenseNumber,
    licenseImage,
    licenseSite,
    locate,
    city,
    legalerson,
    tel,
    headImage,
    feature,
    vipGrade,
    brokerage,
    clerkType,
    status,
    admin}) => {
    var options = {
        method: 'POST',
        uri: `${target}/shopUser/reg`,
        body: {
            storeName,
            licenseNumber,
            licenseImage,
            licenseSite,
            locate,
            city,
            legalerson,
            tel,
            headImage,
            feature,
            vipGrade,
            brokerage,
            clerkType,
            status,
            admin
        },
        json: true
    };
    return await rp(options);
};


module.exports = { reg };
