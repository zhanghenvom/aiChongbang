import axios from 'axios'

export const getSupplierCommoditys = async (curPage="1",eachPage="10",supplierId) => {
    let res = await axios({
        method: "get",
        url: "/ip/supplierCommodity/",
        params: {
            curPage,
            eachPage,
            supplierId
        }
    }) 
    return res.data

}
export const addSupplierCommodity = async (supplierCommodity) => {

    let res = await axios({
        method: "post",
        url: "/ip/supplierCommodity/",
        params: {
            supplierCommodity
        }
    }) 
    return res.data

}
export const addSupplier = async (supplier) => {
    let res = await axios({
        method: "post",
        url: "/ip/supplier/",
        params: {
            supplier
        }
    }) 
    return res.data

}
export const removeSupplierCommodity = async (_id) => {
    let res = await axios({
        method: "delete",
        url: "/ip/supplierCommodity/"+_id,
    }) 
    return res.data

}
export const getSupplierCommodity = async (_id) => {
    let res = await axios({
        method: "get",
        url: "/ip/supplierCommodity/"+_id,
    }) 
    return res.data[0]

}
export const getSupplier = async (_id) => {
    let res = await axios({
        method: "get",
        url: "/ip/supplier/"+_id,
    }) 
    return res.data[0]

}
export const updateSupplierCommodity = async (supplierCommodity) => {
    let res = await axios({
        method: "patch",
        url: "/ip/supplierCommodity/",
        params: {
            supplierCommodity
        }
    }) 
    return res.data

}
export const updateSupplier = async (_id,supplier) => {
    console.log(_id,supplier);
    
    let res = await axios({
        method: "patch",
        url: "/ip/supplier/"+_id,
        params: {
            supplier
        }
    }) 
    return res.data

}