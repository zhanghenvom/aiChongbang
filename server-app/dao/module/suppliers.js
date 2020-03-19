
var mongoose = require('mongoose');
var suppliersSchema = new mongoose.Schema({
  supplierNumber: String,//供应商编号
  supplierName: String,//供应商名称
  supplierAddress: String,//供应商地址
  supplierPhone: String,//供应商电话
  supplierWebsite: String,//供应商网站
  supplierRemarks: String,//供应商备注
  supplierStatus: String,//供应商状态
  imgs: [],
  userId:String,
  examine:String

});
mongoose.model("suppliers", suppliersSchema, "suppliers");

