import { get } from "../service/shopUserService/shopUserService";

export default {
    namespaced: true,
    state: {
        wholesale: []
    },
    mutations: {
        setWholesale(state, wholesale) {
            state.wholesale = wholesale;
        }
    },
    actions: {
        async setWholesale({ commit }) {
            let res = await get();
            commit("setWholesale", res)
        }
    },
};