var express = require('express');
var router = express.Router();
// const { addSupplier,getSupplier,updateSupplier } = require('../services/supplierService.js')

router.get('/storePurchaseVolume', async function (req, res, next) {
    let axisData = ["蜡笔小心宠物店","大圣宠物店","有妖气宠物店","爱心宠物店","悠悠宠物店","帅比宠物店","大佬养宠么","快来呀小哥哥",];
    let seriesData = [1200,656,756,789,852,951,647,856];
    res.send({axisData,seriesData});
})
router.get('/storeSales', async function (req, res, next) {
    let axisData = ["蜡笔小心宠物店","大圣宠物店","有妖气宠物店","爱心宠物店","悠悠宠物店","帅比宠物店","大佬养宠么","快来呀小哥哥",];
    let seriesData = [984,520,650,700,720,888,613,824];
    res.send({axisData,seriesData});
})



module.exports = router
