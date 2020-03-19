/**
 * 得到随机数
 * @param {Number} s 输入一个开始值
 * @param {Number} e 输入一个结束值
 * @param {Number}  返回生成的随机数
 */
const random =  function (s,e){
    if(e === undefined){
        e = s;
        s = 0;
    }
    if(s>e){
        [s,e] = [e,s];
    }
    return ~~(Math.random() * (e - s + 1)) + s;
}


/**
 * 获得最终样式，这是兼容性的封装
 * @param {Element} obj 传入一个元素节点 
 * @param {String} name 传入一个样式名称
 * @param {String} 返回需要获取的样式的最终样式表
 */
function getStyle(obj,name){
    if(obj.currentStyle){//ie浏览器使用的currentStyle[name]
        return obj.currentStyle[name];
    }
    else{//火狐和谷歌浏览器使用的getComputedStyle(obj,false)[name]
        return getComputedStyle(obj,false)[name];
    }
}

module.exports = random;