var express = require('express');
var router = express.Router();
// const { addSupplier,getSupplier,updateSupplier } = require('..rvices/supplierService.js')
//月统计
router.get('/StoreSalesStatistics', async function (req, res, next) {
    let axisData = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月",];
    let seriesData = [1200,656,756,789,852,951,647,856,1200,656,756,789];
    let otherSeriesData = [1100,756,956,289,652,551,347,826,1600,856,856,689];
    res.send({axisData,seriesData,otherSeriesData});
})
//季度统计
router.get('/QuarterlyStoreSaleSstatistics', async function (req, res, next) {
    let axisData = ["一季度","二季度","三季度","四季度"];
    let seriesData = [2612,2592,2698,2201];
    let otherSeriesData = [2812,1492,2773,2401];
    res.send({axisData,seriesData,otherSeriesData});
})
//年度统计
router.get('/AnnualStoreSalesStatistics', async function (req, res, next) {
    let axisData = ["2016","2017","2018","2019"];
    let seriesData = [10103,11221,21330,18210];
    let otherSeriesData = [10303,21521,15330,19210];
    res.send({axisData,seriesData,otherSeriesData});
})
module.exports = router;