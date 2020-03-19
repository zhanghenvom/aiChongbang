var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var StoreSchema = new Schema({
	name: {
		type: String
	},
	number: {
		type: String
	},
	licenseImg: {
		type: String
	},
	address: {
		type: String
	},
	location: {
		type: String
	},
	city: {
		type: String
	},
	legal: {
		type: String
	},
	phone: {
		type: String
	},
	headerImg:{
		type:String
	},
	characteristic:{
		type:String
	},
	vip:{
		type:String
	},
	commission:{
		type:String
	},
	clerk:{
		type:Array
	},
	status:{
		type:String
	}
});

mongoose.model("store", StoreSchema, "store");