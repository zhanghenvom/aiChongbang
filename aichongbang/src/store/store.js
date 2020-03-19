import { getStores, getStore } from '../service/storeService.js'

export default {
  namespaced: true,
  state: {
    stores: [],
    dialogFormVisible: false,
    store: {},
    people: [],
    loads: [],
    load: {},
    updatePet: {},
  },
  mutations: {
    setStores(state, stores) {
      state.stores = stores
    },
    setStore(state, store) {
      state.store = store
    },
    setDialogFormVisible(state, dialogFormVisible) {
      state.dialogFormVisible = dialogFormVisible
    },
    setPeople(state, people) {
      state.people = people
    },
    setLoads(state, loads) {
      state.loads = loads;
    },
    setLoad(state, load) {
      state.load = load;
    },
    setUpdatePet(state, updatePet) {
      state.updatePet = updatePet;
    },
  },
  actions: {
    async setStores({ commit }, parms = { curPage: 1, eachPage: 20, type: '', value: '' }) {
      let res = await getStores(parms.curPage, parms.eachPage, parms.type, parms.value)
      commit('setStores', res.rows)
    },
    async setStore({ commit }, parms = _id) {
      let res = await getStore(parms)
      commit('setStore', res)
      commit('setDialogFormVisible', true)
    },
    setDialogFormVisible({ commit }) {
      commit('setDialogFormVisible', false)
    }
  }
}