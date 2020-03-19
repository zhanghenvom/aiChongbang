import Axios from "axios";
export const getSuppliers = async (curPage, eachPage, type, value) => {
    let res = await Axios({
        method: "get",
        url: "/ip/platform/suppliers",
        params: { curPage, eachPage, type, value }
    })
    return res.data
}

export const updateSupplier = async (updateSupplier) => {
    let res = await Axios({
        method: "post",
        url: "/ip/platform/updateSupplier",
        data: updateSupplier
    })
    return res.data;
}
