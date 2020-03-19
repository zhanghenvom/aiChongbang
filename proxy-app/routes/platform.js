var express = require('express');
var router = express.Router();
var { getUser, removeUser, getUserById, updateUser, getLoads, removeLoad, getLoadById, updateLoad, addLoad, getSuppliers, updateSupplier } = require("../services/platformServices");
var multiparty = require('multiparty');
var path = require('path');

router.post('/upload', async function (req, res, next) {
  let form = new multiparty.Form({
    uploadDir: './public/images'
  });
  form.parse(req, function (err, fields, files) {
    console.log(files);
    let key = Object.keys(files)[0];
    if (err) {
      res.send(err);
    } else {
      res.send(path.basename(files[key][0].path))
    }
  })
});

router.get('/users', async function (req, res, next) {
  const { curPage, eachPage, type, value } = req.query;
  let data = await getUser({ curPage, eachPage, type, value });
  res.send(data)
});

router.get('/loads', async function (req, res, next) {
  const { curPage, eachPage, type, value } = req.query;
  let data = await getLoads({ curPage, eachPage, type, value });
  res.send(data)
});

router.get('/suppliers', async function (req, res, next) {
  const { curPage, eachPage, type, value } = req.query;
  let data = await getSuppliers({ curPage, eachPage, type, value });
  let newDate = [];
  data.rows.map((v, i) => {
    if (v.supplierStatus == '0') {
      v.supplierStatus = '未审核';
      newDate.push(v);
    } else if (v.supplierStatus == '1') {
      v.supplierStatus = '未通过';
      newDate.push(v);
    } else if (v.supplierStatus == '2') {
      v.supplierStatus = '通过';
      newDate.push(v);
    } else if (v.supplierStatus == '3') {
      v.supplierStatus = '已关闭';
      newDate.push(v);
    }
  });
  data.rows = newDate;
  res.send(data)
});

router.delete('/:_id', async function (req, res, next) {
  let { _id } = req.params;
  const data = await removeUser(_id);
  res.send(data);
});

router.delete('/load/:_id', async function (req, res, next) {
  let { _id } = req.params;
  const data = await removeLoad(_id);
  res.send(data);
});

router.get('/:_id', async function (req, res, next) {
  const { _id } = req.params;
  let data = await getUserById(_id);
  res.send(data)
});

router.get('/load/:_id', async function (req, res, next) {
  const { _id } = req.params;
  let data = await getLoadById(_id);
  res.send(data)
});

router.post('/updateUser', async function (req, res, next) {
  let params = req.body;
  let data = await updateUser(params);
  res.send(data);
});

router.post('/updateLoad', async function (req, res, next) {
  let params = req.body;
  let data = await updateLoad(params);
  res.send(data);
});

router.post('/updateSupplier', async function (req, res, next) {
  let params = req.body;
  let data = await updateSupplier(params);
  res.send(data);
});

router.post('/addLoad', async function (req, res, next) {
  const addLoadInfo = req.body;
  let data = await addLoad(addLoadInfo);
  res.send(data);
});

module.exports = router;