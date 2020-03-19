var express = require('express');
var router = express.Router();
// const { addSupplier,getSupplier,updateSupplier } = require('..rvices/supplierService.js')

router.get('/storePurchaseVolume', async function (req, res, next) {
    let axisData = ["成都","天津","北京","上海","广州","河北","湖北","福建",];
    let seriesData = [1200,656,756,789,852,951,647,856];
    res.send({axisData,seriesData});
})
router.get('/storeSales', async function (req, res, next) {
    let axisData = ["成都","天津","北京","上海","广州","河北","湖北","福建",];
    let seriesData = [984,520,650,700,720,888,613,824];
    res.send({axisData,seriesData});
})
router.get('/storeYearSales', async function (req, res, next) {
    let axisData = ["成都","天津","北京","上海","广州","河北","湖北","福建",];
    let seriesData = [666,5270,6665,3515,2315,7851,1215,824];
    res.send({axisData,seriesData});
})



module.exports = router