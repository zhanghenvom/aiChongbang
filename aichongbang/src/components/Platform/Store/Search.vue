<template>
  <div>
    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-input style="width:500px" v-model="input" placeholder="请输入内容"></el-input>
    <el-button type="primary" @click="search">查询</el-button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      options: [
        {
        value: "店名"
        },
        {
          value: "营业执照号码"
        },
        {
          value: "营业地址"
        },
        {
          value: "定位"
        },
        {
          value: "所在城市"
        },
        {
          value: "联系电话"
        },
        {
          value: "特色"
        },
        {
          value: "VIP等级"
        },
        {
          value: "佣金比例"
        }
      ],
      value: "",
      input: ""
    };
  },
  methods:{
    search(){
      let type = this.value;
      let value = this.input;
      let eachPage = 20;
      let curPage = 1
    let res = this.setStores({curPage,eachPage,type,value})
    },
    ...mapActions("stores",["setStores"]),
  }
};
</script>