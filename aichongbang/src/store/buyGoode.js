import { reg } from "../service/shopUserService/shopUserService";

export default {
    namespaced: true,
    state: {
        buyGoode: []
    },
    mutations: {
        setBuyGoode(state, buyGoode) {
            state.buyGoode = buyGoode;
        }
    },
    actions: {
        async setLogin({ commit }, params) {
            let res = await reg(params);
            commit("setLogin", res)
        }
    },
};