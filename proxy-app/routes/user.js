//表现层
var express = require('express');
var router = express.Router();
const { reg, login, generatorToken ,isSame} = require('../services/userService')
const { uploadFile } = require("../unils/upload");


router.get('/login', async function (req, res, next) {
    let parameter = req.query;
    console.log(parameter);
    let data = await login(parameter);
    if (data) {
        var token = generatorToken(req.query);
    }
    res.send({ data: data, token });
})

router.post('/reg', async function (req, res, next) {
    let parameter = req.body;
    let data = await reg(parameter);
    res.send(data);
})


router.post('/imgsUpload', async function (req, res, next) {
    const { data, success } = await uploadFile(req, {
        fileType: "userImgs",
        path: "./public/images"
    })
    if (success) {
        // console.log("上传成功");
        const params = { $push: JSON.stringify({ images: data.url }) }
        const result = await update(data._id, params);
        //  await getById(data._id);
        res.send(result);
        return;
    }
});

router.get('/isSame', async function (req, res, next) {
    let parameter = req.query;
    let data = await isSame(parameter);
    res.send(data);
})
module.exports = router