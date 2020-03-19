import Axios from "axios";
export const getUsers = async (curPage, eachPage, type,value) => {
    let res = await Axios({
        method: "get",
        url: "/ip/platform/users",
        params: { curPage, eachPage, type ,value}
    })
    return res.data
}

export const removeUser = async (id) => {
    let res = await Axios({
        method: "delete",
        url: "/ip/platform/" + id
    })
    return res.data
}

export const getUser = async (_id) => {
    let res = await Axios({
        method: "get",
        url: "/ip/platform/" + _id
    });
    return res.data;
}

export const updateUser = async (updateUser) => {
    let res = await Axios({
        method: "post",
        url: "/ip/platform/updateUser",
        data: updateUser
    })
    return res.data;
}

export const addUser = async (addUser) => {
    let res = await Axios({
        method: "post",
        url: "/ip/user/reg",
        data: addUser
    })
    return res.data;
}