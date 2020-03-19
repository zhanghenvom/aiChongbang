var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var proxy = require('http-proxy-middleware');
var options = require('./unils/options');
// const jwtAuth = require("./unils/jwtAuth");
// var indexRouter = require('./routes/index');
var storeRouter = require('./routes/store');
var storePieChartRouter = require('./routes/storePieChart');
var storeServe = require('./routes/storeServe.js');
var storeGoodsRouter = require('./routes/storeGoods');
var storeOrderRouter = require('./routes/storeOrder');
var supplierCommodityRouter=require('./routes/supplierCommodity')
var supplierRouter=require('./routes/supplier')
var platformRouter = require('./routes/platform');
var statisticsServeRouter = require('./routes/serveStatistics');
var userRouter = require('./routes/user.js');
var monthlyTotalAmountStatisticsRouter = require('./routes/monthlyTotalAmountStatistics.js');
var shopUserRouter = require('./routes/shopUser.js');
var buyGoodeRouter = require('./routes/buyGoode');
var statisticsRouter = require('./routes/statistics.js')

var storeSalesStatisticsRouter = require('./routes/StoreSalesStatistics.js')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
// app.use(jwtAuth);
app.use('/api', proxy(options));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);
app.use('/user',userRouter)
app.use('/storePieChart',storePieChartRouter)
app.use('/user', userRouter);
app.use('/shopUser', shopUserRouter);
app.use('/store', storeRouter);
app.use('/storeManage', storeServe);
app.use('/storeGoods', storeGoodsRouter);
app.use('/storeOrder', storeOrderRouter);
app.use('/supplierCommodity', supplierCommodityRouter);
app.use('/supplier', supplierRouter);
app.use('/platform', platformRouter);

app.use('/statisticsServe', statisticsServeRouter);
app.use('/storeSalesStatistics', storeSalesStatisticsRouter);

app.use('/statistics', statisticsRouter);
app.use('/monthlyTotalAmountStatistics', monthlyTotalAmountStatisticsRouter);

app.use('/buyGoode', buyGoodeRouter);
app.use('/storeSalesStatistics', storeSalesStatisticsRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({
      message: 'invalid token',
      error: err
    });
  } else {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  }
});

module.exports = app;
