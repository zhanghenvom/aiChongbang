var express = require('express');
var router = express.Router();
var { getSupplierCommoditys, addSupplierCommodity, removeSupplierCommodity,getSupplierCommodity,updateSupplierCommodity } = require("../services/supplierCommodityService.js");

router.get('/', async function (req, res, next) {
  const { curPage, eachPage,supplierId } = req.body;
  let data = await getSupplierCommoditys(curPage, eachPage,supplierId);
  res.send(data)
});
router.post('/', async function (req, res, next) {
  const { supplierCommodity } = req.body;
  let newSupplierCommodity = JSON.parse(supplierCommodity);
  let data = await addSupplierCommodity(newSupplierCommodity);
  res.send(data)
});
router.delete('/:_id', async function (req, res, next) {
  const { _id } = req.params;
  let data = await removeSupplierCommodity(_id);
  if (data.n) {
    res.send(true)
  } else {
    res.send(false)
  }
});
router.get('/:_id', async function (req, res, next) {
  const { _id } = req.params;
  let data = await getSupplierCommodity(_id);
  res.send(data)

});
router.patch('/', async function (req, res, next) {
  const { supplierCommodity } = req.body;
  let newSupplierCommodity = JSON.parse(supplierCommodity);
  let date= {...newSupplierCommodity};
  delete date._id;
  let data = await updateSupplierCommodity(newSupplierCommodity._id,date);
  res.send(data)

});

module.exports = router;