var mongoose = require("mongoose");
var supplierCommoditySchema = new mongoose.Schema({
    name:String,//名称
    type:String,//品类
    make:String,//材质或制作方法
    applicableSpecifications:String,//适用规格
    exclusiveSpecifications:String,//专属规格
    packingSpecification:String,//包装规格
    taste:String,//口味
    specialFunction:String,//特殊功用
    placeOfOrign:String,//产地
    dateOfProduction:String,//出厂日期
    expirationDate:String,//保质期
    supplierNumber:String,//供应商编号
    featuresThat:String,//特色说明
    wholesalePrice:String,//批发价格
    number:Number,
    imgs: [],
    supplierId:""

});
mongoose.model("supplierCommodity", supplierCommoditySchema, "supplierCommodity");