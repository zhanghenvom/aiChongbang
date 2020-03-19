var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var serveSchema = new Schema({
    name:{
        type:String //名称
    },
    sort:{
        type:String  //品类
    },
    times:{
        type:[{}]  //服务时间段
    },
    useTime:{
        type:String
    },
    suitableSize:{    //适用规格：按体重范围等
        type:String 
    }, 
    serveSize:{     //服务规格
        type:String
    },
    waiterGrade:{   //服务员等级
        type:String
    },
    price:{   //价格，对应服务员等级
        type:String
    }
});

mongoose.model("serve", serveSchema, "serve"); //数据库内容自行添加，集合名称为：serve
