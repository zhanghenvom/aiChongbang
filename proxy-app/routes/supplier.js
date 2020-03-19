var express = require('express');
var router = express.Router();
const { addSupplier,getSupplier,updateSupplier } = require('../services/supplierService.js')

router.post('/', async function (req, res, next) {
    let { supplier } = req.query;  
    let data = await addSupplier(supplier);
    res.send(data);
})
router.get('/:_id', async function (req, res, next) {
    let { _id } = req.params;
    let data = await getSupplier(_id); 
    res.send(data);
})
router.patch('/:_id', async function (req, res, next) {
    let { _id } = req.params;
    let { supplier } = req.query;
    let data = await updateSupplier(_id,supplier);
    res.send(data);
})


module.exports = router