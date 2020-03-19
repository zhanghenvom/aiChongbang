var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new Schema({
	loginName: {
		type: String
	},
	password: {
		type: String
	},
	phone: {
		type: String
	},
	emaill: {
		type: String
	},
	duration: {
		type: String
	},
	name: {
		type: String
	},
	type: {
		type: Number
	},
	status: {
		type: Number
	},
	admin: {
		type: Number
	}
});

mongoose.model("user", UserSchema, "user");