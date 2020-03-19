import {getSupplierCommoditys} from '../service/supplier/supplier'
export default {
    namespaced: true,
    state: {
        supplierCommoditys: [],
        page: {},
        supplierStatus:"",
        supplierId:"",
        supplierNumber:""
    },
    mutations: {
        setSupplierCommoditys(state, supplierCommoditys) {
            state.supplierCommoditys = supplierCommoditys;
        },
        setPage(state,page){
            state.page = page;
        },
        setSupplierStatus(state,supplierStatus){
            state.supplierStatus = supplierStatus;
        },
        setSupplierId(state,supplierId){
            state.supplierId = supplierId;
        },
        setSupplierNumber(state,supplierNumber){
            state.supplierNumber = supplierNumber;
        }
    },
    actions: {
        async setSupplierCommoditys({ commit }, params) {
            let curPage,eachPage,supplierId;
            if (params) {
                curPage=params.curPage;
                eachPage=params.eachPage;
                supplierId=params.supplierId;
            }else{
                curPage=1;
                eachPage=10; 
            }
            let data = await getSupplierCommoditys(curPage,eachPage,supplierId);
            let page = {};
            page.curPage = ~~data.curPage;
            page.maxPage = ~~data.maxPage;
            page.eachPage = ~~data.eachPage;
            page.total = data.total;
            commit("setSupplierCommoditys", data.rows);
            commit("setPage", page);
        }
    }
}