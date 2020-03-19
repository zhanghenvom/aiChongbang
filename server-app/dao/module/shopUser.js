var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    storeName: {
        type: String
    },
    licenseNumber: {
        type: Number
    },
    licenseImage: {
        type: String
    },
    licenseSite: {
        type: String
    },
    locate: {
        type: String
    },
    city: {
        type: String
    },
    legalerson: {
        type: String
    },
    tel: {
        type: String
    },
    headImage: {
        type: String
    },
    feature: {
        type: String
    },
    vipGrade: {
        type: String
    },
    brokerage: {
        type: String
    },
    clerkType: {
        type: String
    },
    status:  {
        type: Number
    }, 
    admin: {
        type: Number
    }, 
});

mongoose.model("shopUser", UserSchema, "shopUser");