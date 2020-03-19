import { login } from "../service/userService/userService";

export default {
    namespaced: true,
    state: {
        user: {}
    },
    mutations: {
        setLogin(state, user) {
            state.user = user;
        }
    },
    actions: {
        async setLogin({ commit }, params) {
            const { loginName, password } = params;
            let res = await login(loginName, password);
            console.log(res);
            localStorage.setItem(`userId`, JSON.stringify(res.data._id))
            localStorage.setItem(`supplierNumber`, JSON.stringify(res.data.loginName))
            commit("setLogin", res)
        }
    },
};