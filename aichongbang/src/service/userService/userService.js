import Axios from 'axios'

export const login = async (loginName, password) => {
    let res = await Axios({
        method: "get",
        url: "/ip/user/login",
        params: {
            loginName,
            password
        }
    })
    return res.data
}


export const reg = async (parameter) => {
    const { loginName, password, phone, emaill, name, type, status,admin } = parameter
    let res = await Axios({
        method: "post",
        url: "/ip/user/reg",
        data: {
            loginName, password, phone, emaill, name, type, status,admin
        }
    })
    return res.data
}

export const isSame = async (loginName) => {
    let res = await Axios({
        method: "get",
        url: "/ip/user/isSame",
        params: {
            loginName
        }
    })
    return res.data
}
