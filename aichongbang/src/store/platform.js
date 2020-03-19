import { getUsers, getUser } from "../service/platformService/user";
import { getLoads, getLoad } from "../service/platformService/load";
import { getSuppliers } from "../service/platformService/supplier";

export default {
    namespaced: true,
    state: {
        users: [],
        user: {},
        loads: [],
        load: {},
        pet: {},
        updatePet: {},
        suppliers: [],
        usersAll: {},
        loadsAll: {},
        suppliersAll: {}
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setUser(state, user) {
            state.user = user;
        },
        setLoads(state, loads) {
            state.loads = loads;
        },
        setLoad(state, load) {
            state.load = load;
        },
        setPet(state, pet) {
            state.pet = pet;
        },
        setSuppliers(state, suppliers) {
            state.suppliers = suppliers;
        },
        setUpdatePet(state, updatePet) {
            state.updatePet = updatePet;
        },
        setUsersAll(state, usersAll) {
            state.usersAll = usersAll;
        },
        setLoadsAll(state, loadsAll) {
            state.loadsAll = loadsAll;
        },
        setSuppliersAll(state, suppliersAll) {
            state.suppliersAll = suppliersAll;
        }
    },
    actions: {
        async setUsers({ commit }, params = { curPage: 1, eachPage: 5, type: '', value: '' }) {
            let data = await getUsers(params.curPage, params.eachPage, params.type, params.value);
            data.rows.map((v, i) => {
                if (v.type == 0) {
                    v.type = '平台管理员'
                } else if (v.type == 1) {
                    v.type = '供应商管理员'
                } else {
                    v.type = '门店管理员'
                }
            });
            data.rows.map((v, i) => {
                if (v.admin == 0) {
                    v.admin = '正常'
                } else {
                    v.admin = '封号'
                }
            });
            commit("setUsers", data.rows);
            commit("setUsersAll", data);
        },
        async setUser({ commit }, _id) {
            let data = await getUser(_id);
            if (data[0].type == 0) {
                data[0].type = '平台管理员'
            } else if (data[0].type == 1) {
                data[0].type = '供应商管理员'
            } else {
                data[0].type = '门店管理员'
            };
            if (data[0].admin == 0) {
                data[0].admin = '正常'
            } else {
                data[0].admin = '封号'
            }
            commit("setUser", data[0]);
        },
        async setLoads({ commit }, params = { curPage: 1, eachPage: 5, type: '', value: '' }) {
            let data = await getLoads(params.curPage, params.eachPage, params.type, params.value);
            commit('setLoads', data.rows);
            commit('setLoadsAll', data);
        },
        async setSuppliers({ commit }, params = { curPage: 1, eachPage: 5, type: '', value: '' }) {
            let data = await getSuppliers(params.curPage, params.eachPage, params.type, params.value);
            commit('setSuppliers', data.rows);
            commit('setSuppliersAll', data);
        },
        async setLoad({ commit }, _id) {
            let data = await getLoad(_id);
            data[0].vipCard = data[0].vipCard.join('/');
            commit('setLoad', data[0])
        }
    },
};