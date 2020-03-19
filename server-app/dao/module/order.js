var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var orderSchema = new Schema({
	order: {
		type: String//订单类型（服务或商品）
	},
	store: {
		type: String//服务门店
	},
	price: {
		type: String//总价
	},
	score: {
		type: String//评分
	},
	evaluate: {
		type: String//评价内容
	},
	img: {
		type:Array//上传图片
	},
	type: {
		type: String//评价性质
	},
	name: {
		type: String//评价人
	}
});

mongoose.model("order", orderSchema, "order");