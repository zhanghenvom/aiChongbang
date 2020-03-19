import Vue from 'vue';
import Vuex from 'vuex';
import serve from './serve.js'
import platform from './platform';
import user from './user';
import shopUser from './shopUser'
import buyGoode from './buyGoode'
import stores from './store';
import supplier from './supplier'
import storeGoods from './storeGoods'
import wholesale from './wholesale'
Vue.use(Vuex)
const store = new Vuex.Store({
   modules: {
      wholesale,
      serve,
      platform,
      user,
      shopUser,
      buyGoode,
      stores,
      supplier,
      storeGoods
   }
});
export default store;