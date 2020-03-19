var express = require('express');
var router = express.Router();
var { addSupplier, getSupplier,updateSupplier } = require("../services/supplierService.js");

router.post('/', async function (req, res, next) {
  const { supplier } = req.body;
  let newSupplier = JSON.parse(supplier);
  let data = await addSupplier(newSupplier);
  res.send(data)
});
router.get('/:_id', async function (req, res, next) {
  const { _id } = req.params;
  let data = await getSupplier(_id);
  res.send(data)

});
router.patch('/:_id', async function (req, res, next) {
  const { supplier } = req.body;
  let newSupplier = JSON.parse(supplier);
  let date= {...newSupplier};
  delete date._id;
  let data = await updateSupplier(newSupplier._id,date);
  res.send(data[0])

});

module.exports = router;
