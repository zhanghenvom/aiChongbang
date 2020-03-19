import Axios from "axios";
export const getLoads = async (curPage, eachPage, type,value) => {
    let res = await Axios({
        method: "get",
        url: "/ip/platform/loads",
        params: { curPage, eachPage, type ,value}
    });
    return res.data
}

export const getLoad = async (_id) => {
    let res = await Axios({
        method: "get",
        url: "/ip/platform/load/" + _id
    });
    return res.data;
}

export const removeLoad = async (id) => {
    let res = await Axios({
        method: "delete",
        url: "/ip/platform/load/" + id
    })
    return res.data
}

export const updateLoad = async (updateLoad) => {
    let res = await Axios({
        method: "post",
        url: "/ip/platform/updateLoad",
        data: updateLoad
    })
    return res.data;
}

export const addLoad = async (addLoad) => {
    let res = await Axios({
        method: "post",
        url: "/ip/platform/addLoad",
        data: addLoad
    })
    return res.data;
}