var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var orderSchema = new Schema({
	orderName: {
		type: String//订单类型（服务或商品）
	},
	storeName: {
		type: String//服务门店
	},
	totalAmountOfOrder: {
		type: String//总价
	},
	score: {
		type: String//评分
	},
	orderContent: {
		type: String//评价内容
	},
	orderImage: {
		type:[String]//上传图片
	},
	EvaluationOfNature: {
		type: String//评价性质
	},
	appraiser: {
		type: String//评价人
	}
});

mongoose.model("storeOrder", orderSchema, "storeOrder");