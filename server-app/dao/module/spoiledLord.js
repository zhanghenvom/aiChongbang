var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var spoiledLordSchema = new Schema({
	phone: {
		type: String
	},
	nickname: {
		type: String
	},
	realName: {
		type: String
	},
	vipCard: {
		type: String
	},
	headerImg: {
		type: String
	},
	vipCard:{
		type: Array
	},
	address: {
		type: String
	},
	region: {
		type: String
	},
	integral: {
		type: String
	},
	pets:{
		type:Array
	}
});

mongoose.model("spoiledLord", spoiledLordSchema, "spoiledLord");