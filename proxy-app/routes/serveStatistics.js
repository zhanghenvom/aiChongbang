var express = require('express');
var router = express.Router();


router.get('/getShopSale',async function(req,res,next) {
    let axisData = ["一月","二月","三月","四月","五月","六月"];
    let seriesData = [1200,656,756,789,852,951];
    res.send({axisData,seriesData});
    // return;
});

router.get('/getSserveSale',async function(req,res,next) {
    let axisData = ["一月","二月","三月","四月","五月","六月"];
    let seriesData = [1100,756,956,289,652,551];
    res.send({axisData,seriesData});
    return;
});



module.exports = router;