import { getStoreGoods } from '../service/storeGoods';
import { getStoreOrder } from '../service/storeOrder';
// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
export default {
    namespaced: true,
    state: {
        storeGoods: [],
        pagination: {},
        storeOrder: []
    },
    mutations: {
        setStoreGoods(state, storeGoods) {
            state.storeGoods = storeGoods;
        },
        setStoreOrder(state, storeOrder) {
            console.log("order");
            
            state.storeOrder = storeOrder;
            // console.log(999999);

        },
        setPagination(state, pagination) {
            state.pagination = pagination;
        }
    },
    actions: {
        async setStoreGoods({ commit }, params = { current: 1, pageSize: 5 }) {//从content里解构出来的commit 
            let data = await getStoreGoods(params.current, params.pageSize);
            commit("setStoreGoods", data.rows);//commit提交给mutations
            commit("setPagination", data);//commit提交给mutations
            // console.log(1111112222);

            // console.log("data123",data);
        },
        async setStoreOrder({ commit }, params = { current: 1, pageSize: 5 }) {//从content里解构出来的commit 
            let datas = await getStoreOrder(params.current, params.pageSize);
            // console.log("order123",datas);
            commit("setStoreOrder", datas.rows);//commit提交给mutations
            // commit("setPagination",data);//commit提交给mutations
        }
    },
};