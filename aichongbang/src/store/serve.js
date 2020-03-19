import {get ,getById} from '../services/serveServices'

export default {
    namespaced: true,
    state: {
        timeData:[],   // 时间数据
        tableData:[],  //列表数据
        visible: false,
        form:{}
    },
    mutations: {  //非异步操作
        setTimesData(state,value){
            if (value.length===0) {
                console.log(222);
                state.timeData = value ;
            }
            state.timeData = [...state.timeData,...value];
        },
        setTableData(state,data){
            state.tableData = data
        },
        setVisible(state,data){
            state.visible = data
        },
        setForm(state,data){
            state.form = data
        },
        delTimesData(state,index){
            state.timeData.splice(index,1)
        }
    },
    actions: {
        setTimesData({commit},value){
            
            commit('setTimesData',value)
        },
        async setTableData({commit},){
            let data = await get();
            // data.price = data.price.join('¥/')
            //  data.map((v)=>{
            //      v.price = v.price.join('/');
            //      v.waiterGrade = v.waiterGrade.join('/');
            //      return;
            // })
            commit('setTableData',data)
        },
        setVisible({commit},data){
            commit('setVisible',data)
        },
        async setForm({commit},id){
            let data = await getById(id);
            data.dates = data.times[0].dates.split('~');
            commit('setForm',data)
        },
        delTimesData({commit},index){
            commit('delTimesData',index)
        }
    }
}