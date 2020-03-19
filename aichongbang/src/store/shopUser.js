import { reg } from "../service/shopUserService/shopUserService";

export default {
    namespaced: true,
    state: {
        shopUser: ""
    },
    mutations: {
        setLogin(state, shopUser) {
            state.shopUser = shopUser;
        }
    },
    actions: {
        async setLogin({ commit }, params) {
            let res = await reg(params);
            commit("setLogin", res)
        }
    },
};