import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from'./router.js'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
