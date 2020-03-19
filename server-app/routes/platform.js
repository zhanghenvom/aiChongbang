var express = require('express');
var router = express.Router();
var { getUser, removeUser, getUserById, updateUser, getLoads, removeLoad, getLoadById, updateLoad, addLoad, getSuppliers, updateSupplier } = require("../services/platformServices");

router.get('/users', async function (req, res, next) {
  const { curPage, eachPage, type, value } = req.body;
  if (value) {
    if (type == "登录名") {
      let data = await getUser({ curPage, eachPage }, { loginName: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "手机号") {
      let data = await getUser({ curPage, eachPage }, { phone: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "姓名") {
      let data = await getUser({ curPage, eachPage }, { emaill: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "角色") {
      let data = await getUser({ curPage, eachPage }, { name: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "状态") {
      let data = await getUser({ curPage, eachPage }, { type: { $regex: `${value}` } });
      res.send(data);
    }
  }
  let data = await getUser({ curPage, eachPage });
  res.send(data)
});

router.get('/loads', async function (req, res, next) {
  const { curPage, eachPage, type ,value} = req.body;
  if (value) {
    if (type == "电话号码") {
      let data = await getLoads({ curPage, eachPage }, { phone: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "昵称") {
      let data = await getLoads({ curPage, eachPage }, { nickname: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "真实姓名") {
      let data = await getLoads({ curPage, eachPage }, { realName: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "送货地址") {
      let data = await getLoads({ curPage, eachPage }, { address: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "区域") {
      let data = await getLoads({ curPage, eachPage }, { region: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "积分") {
      let data = await getLoads({ curPage, eachPage }, { integral: { $regex: `${value}` } });
      res.send(data);
    }
  }
  let data = await getLoads({ curPage, eachPage });
  res.send(data)
});

router.get('/suppliers', async function (req, res, next) {
  const { curPage, eachPage, type ,value} = req.body;
  if (value) {
    if (type == "名称") {
      let data = await getSuppliers({ curPage, eachPage }, { supplierName: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "地址") {
      let data = await getSuppliers({ curPage, eachPage }, { supplierAddress: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "电话") {
      let data = await getSuppliers({ curPage, eachPage }, { supplierPhone: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "网站") {
      let data = await getSuppliers({ curPage, eachPage }, { supplierWebsite: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "备注") {
      let data = await getSuppliers({ curPage, eachPage }, { supplierRemarks: { $regex: `${value}` } });
      res.send(data);
    }
    else if (type == "状态") {
      let data = await getSuppliers({ curPage, eachPage }, { supplierStatus: { $regex: `${value}` } });
      res.send(data);
    }
  }
  let data = await getSuppliers({ curPage, eachPage});
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
  let { _id } = req.params;
  let data = await getUserById(_id);
  res.send(data)
});

router.get('/load/:_id', async function (req, res, next) {
  let { _id } = req.params;
  let data = await getLoadById(_id);
  res.send(data)
});

router.post('/updateUser', async function (req, res, next) {
  const { _id } = req.body;
  const { loginName, password, phone, emaill, name, type, status } = req.body;
  let data = await updateUser(_id, { loginName, password, phone, emaill, name, type, status });
  res.send(data);
});

router.post('/updateLoad', async function (req, res, next) {
  const { _id } = req.body;
  const { phone, nickname, realName, vipCard, headerImg, address, region, integral, pets } = req.body;
  let data = await updateLoad(_id, { phone, nickname, realName, vipCard, headerImg, address, region, integral, pets });
  res.send(data);
});

router.post('/updateSupplier', async function (req, res, next) {
  const { _id } = req.body;
  const { supplierStatus, examine } = req.body;
  let data = await updateSupplier(_id, { supplierStatus, examine });
  res.send(data);
});

router.post('/addLoad', async function (req, res, next) {
  const addLoadInfo = req.body;
  let data = await addLoad(addLoadInfo);
  res.send(data);
});

module.exports = router;