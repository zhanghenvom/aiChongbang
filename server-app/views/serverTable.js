Mock.mock(/\/getStudents/,"get",({body})=>{
    let res = {//legui规定的的数据返回结构
        "code":0,
        "msg":"",
        "count":20,
        "data":JSON.parse(localStorage.students)
    }
    return res;
})
Mock.mock(/\/deleteStudent/,"post",({body})=>{
    let index;
    let stus = JSON.parse(localStorage.students);
    stus.some((v,i)=>{
        if(v.phone == body){
            index = i;
            return true;
        }
        
    })
    stus.splice(index,1);
    localStorage.students = JSON.stringify(stus);  
    return stus;
})