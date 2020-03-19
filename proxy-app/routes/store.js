var express = require('express');
// const {uploadFile} = require("../public/utils/upload.js");
// const studentService = require("../services/studentService")
var router = express.Router();
var { uploadFile } = require('../unils/upload.js');
var storeService = require('../services/storeServices');
var multiparty = require('multiparty')
var path = require('path')

router.get('/store', async function (req, res, next) {
    const { curPage, eachPage, type, value } = req.query;
    let data = await storeService.get({ curPage, eachPage, type, value });
    res.send(data);
});

router.post('/create', async function (req, res, next) {
    const params = req.body;

    let data = await storeService.create(params.form);
    res.send(data);
});

router.get('/:_id', async function (req, res, next) {
    const { _id } = req.params;
    let data = await storeService.getById(_id);
    res.send(data);
});

router.patch('/:_id', async function (req, res, next) {
    const { _id } = req.params;
    const params = req.body;
    // for (let k in params) {
    //     if (/^\$/.test(k)) params[k] = JSON.parse(params[k]);
    // }
    let data = await storeService.update(_id, params);
    res.send(data);
});
router.post('/public', async function (req, res, next) {
    let form = new multiparty.Form({
        uploadDir: './public/images'
    });
    form.parse(req, function (err, fields, files) {
        let key = Object.keys(files)[0];
        if (err) {
            res.send(err);
        } else {
            res.send(path.basename(files.file[0].path))
        }
    })
    // let data = await addStudent({ name, age, gender });

    // res.send(data);

});
router.post('/headImg', async function (req, res, next) {
    let form = new multiparty.Form({
        uploadDir: './public/images'
    });
    form.parse(req, function (err, fields, files) {
        // let key = Object.keys(files)[0];
        if (err) {
            res.send(err);
        } else {
            res.send(path.basename(files.file[0].path))
        }
    })
    // let data = await addStudent({ name, age, gender });

    // res.send(data);

});

module.exports = router;
