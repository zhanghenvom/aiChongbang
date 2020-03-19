var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require("./dao/database");

// var indexRouter = require('./routes/index');
var supplierRouter = require('./routes/supplier');
var userRouter =require('./routes/user');
var shopUserRouter =require('./routes/shopUser');
var buyGoodeRouter =require('./routes/buyGoode');
var storeRouter = require('./routes/store');
var supplierRouter = require('./routes/supplier')
var userRouter =require('./routes/user')
var storeRouter = require('./routes/store')

var indexRouter = require('./routes/index');
var platformRouter = require('./routes/platform');

var storeServeRouter = require('./routes/storeServe.js')
var storeGoodsRouter = require('./routes/storeGoods');
var storeOrderRouter = require('./routes/storeOrder');
var supplierCommodityRouter = require('./routes/supplierCommodity');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
app.use('/supplier', supplierRouter);
app.use('/user', userRouter);
app.use('/shopUser', shopUserRouter);
app.use('/store', storeRouter);

app.use('/platform',platformRouter);
app.use('/supplierCommodity',supplierCommodityRouter);
app.use('/', indexRouter);
app.use('/platform',platformRouter)
app.use('/buyGoode',buyGoodeRouter)
app.use('/storeServe',storeServeRouter)

app.use('/storeGoods',storeGoodsRouter)
app.use('/storeOrder',storeOrderRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

