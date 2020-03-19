var mongoose = require("mongoose");

require('./module/spoiledLord');
require("./module/suppliers.js");
require("./module/suppilerCommodity.js");
require('./module/storeOrder');
require('./module/store');
require('./module/user');
require('./module/storeGoods');
require('./module/serveManageModel.js')


mongoose.connect('mongodb://localhost/aichongbang', {
    useUnifiedTopology: true,
    useNewUrlParser: true

});
//连接事件成功时输出
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to mongodb://localhost/aichongbang');
});
