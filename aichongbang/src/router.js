import Vue from "vue";
import VueRouter from "vue-router";
import StroeManage from './components/storeManage/stroeManage.vue';
import Load from './components/Platform/Load.vue';
import Store from './components/Platform/Store.vue';
import User from './components/Platform/User.vue';
import SalesStatistics from './components/Platform/SalesStatistics.vue';
import SupplierExamine from './components/Platform/SupplierExamine.vue';
import Manage from './components/PlatformManage/Manage.vue'
import SupplierManage from './components/supplierManage/SupplierManage'
import SuppilerCommodity  from './components/supplierManage/suppilerCommodity/SuppilerCommodity'
import PieChart from './components/Platform/PieChart.vue'
import Supplier from './components/supplierManage/supplier/Supplier'
import Statistics from './components/supplierManage/statistics/Statistics'
import serveManage from './components/store/serveManage';
import salesStatistics from './components/store/Statistics/salesStatistics'
import countStatistics  from './components/store/Statistics/countStatistics'

// 张震
import Reg from './components/start/Reg'
import Login from './components/start/Login';
import Stock from './components/store/stock.vue'
import StoreApply from './components/store/storeApply/storeApply.vue'

//陈全杰
import storeGoods from './components/store/StoreGoods/stroeGoods.vue'
import storeOrder from './components/store/storeOrder/storeOrder.vue'
import storeMoneyCount from './components/store/storeMoneyCount/storeMoneyCount.vue'


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/manage', component: Manage ,children:[
      { path: 'user', component: User },
      { path: 'load', component: Load },
      { path: 'store', component: Store },
      { path: 'pieChart', component: PieChart },
    ]},
    { path: '/supplierManage', component: SupplierManage ,children:[
      { path: 'suppilerCommodity', component: SuppilerCommodity },
      { path: 'supplier', component: Supplier },
      { path: 'statistics', component: Statistics },
    ]},
  { path: '*', redirect: '/manage' } ,
    { path: "/", component: Login },//默认登录页面
    { path: "/reg", component: Reg },
    { path: "/login", component: Login },
    {
      path: "/stroeManage", component: StroeManage, children: [   //门店商主页面
        //张震
        { path: "storeApply", component: StoreApply },
        { path: "stock", component: Stock }, 
        //陈全杰
        {path: "storeGoods",component: storeGoods },
        {path: "storeOrder",component: storeOrder },
        {path: "storeMoneyCount",component: storeMoneyCount },
        //刘玉斌
        { path: 'serveManage', component:serveManage},
        { path: 'salesStatistics', component:salesStatistics},
        // { path: 'countStatistics', component:countStatistics},
      ]
    },
    {
      path: '/manage', component: Manage, children: [  
        { path: 'user', component: User },
        { path: 'load', component: Load },
        { path: 'store', component: Store },
        { path: 'supplierExamine', component: SupplierExamine },
        { path: 'salesStatistics', component: SalesStatistics },
      ]
    },
    {
      path: '/supplierManage', component: SupplierManage, children: [
        { path: 'suppilerCommodity', component: SuppilerCommodity },
        { path: 'supplier', component: Supplier },
        { path: 'statistics', component: Statistics },
      ]
    },
    // { path: '*', redirect: '/manage' }
  ]
});



