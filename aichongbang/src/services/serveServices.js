import axios from 'axios';

export const serveAdd = async (form)=>{
    let res = await axios({
        method:"POST",
        url:'/ip/storeManage/serveAdd',
        data:{
            ...form
        }
    })
    return res.data
}

export const get = async ()=>{
    let res = await axios({
        method:"GET",
        url:'/ip/storeManage/getServe',
    });
    console.log(res.data,999);
    return res.data;
};

export const del = async (_id)=>{
    let res = await axios({
        method:"DELETE",
        url:'/ip/storeManage/del',
        params:{
            _id
        }
    });
    return res.data
}

export const getById = async (_id)=>{
    let res = await axios({
        method:"GET",
        url:'/ip/storeManage/getById',
        params:{
            _id
        }
    });
    return res.data[0]
}

export const update = async (_id,params)=>{
    let res = await axios({
        method:"PATCH",
        url:'/ip/storeManage/'+_id,
        data:{...params}
    })
    console.log(res.data,156);
    
    return res.data
}