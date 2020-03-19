var express = require('express');
var router = express.Router();
const client = require("ykt-http-client");
client.url("127.0.0.1:8080");

const random = require('../unils/tools');
router.get('/monthlyTotalAmountStatistics', async function (req, res, next) {
  let axisData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  let seriesData = [random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000)];
  let otherSeriesData = [random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000), random(10000, 30000)];
  res.send({ axisData, seriesData, otherSeriesData });
});
router.get('/quarterlyStatistics', async function (req, res, next) {
  let axisData = ["一季度", "二季度", "三季度", "四季度"];
  let seriesData = [random(30000, 90000), random(30000, 90000), random(30000, 90000), random(30000, 90000)];
  let otherSeriesData = [random(30000, 90000), random(30000, 90000), random(30000, 90000), random(30000, 90000)];
  res.send({ axisData, seriesData, otherSeriesData });
})
router.get('/yearStatistics', async function (req, res, next) {
  let axisData = ['2017', "2018", "2019"];
  let seriesData = [random(200000, 300000), random(200000, 300000), random(200000, 300000)];
  let otherSeriesData = [random(200000, 300000), random(200000, 300000), random(200000, 300000)];
  res.send({ axisData, seriesData, otherSeriesData });
})

router.get("/counts", function (req, res) {
  const shops = [
    [120.33, 36.07, 1, "青岛"],
    [121.48, 31.22, 1, "上海"],
    [114.87, 40.82, 1, "张家口"],
    [121.56, 29.86, 1, "宁波"],
    [104.06, 30.67, 4, "成都"],
  ];
  res.send(shops);
});

router.get("/", function (req, res) {
  const shops = [
    [104.062275, 30.685623, "大王宠物店", "成都通锦大厦一楼"],
    [104.079726, 30.64296, "搞笑宠物店", "四川省成都市武侯区林荫中街8号"],
    [104.119394, 30.672233, "萌宠宠物店", "建设南路1号"],
    [104.077363, 30.600042, "青龙伊宠物店", "天顺路225号"],
    [121.423118, 31.222222, "白虎宠物店", "天目路225号"],
    [114.811117, 40.811112, "朱雀宠物店", "天目路225号"],
    [121.522226, 29.811116, "啥宠物店", "天目路225号"],
  ];
  res.send(shops);
});
module.exports = router;