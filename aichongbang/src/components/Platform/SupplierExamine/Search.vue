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
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      options: [
        {
          value: "名称"
        },
        {
          value: "地址"
        },
        {
          value: "电话"
        },
        {
          value: "网站"
        },
        {
          value: "备注"
        },
        {
          value: "状态"
        }
      ],
      value: "",
      input: ""
    };
  },
  methods: {
    ...mapActions("platform", ["setSuppliers"]),
    search() {
      let type = this.value;
      let value = this.input;
      let eachPage = 5;
      let curPage = 1;
      if(type == '状态'){
        if(value == '未审核'){
          value = '0'
        }else if(value == '未通过'){
          value = '1'
        }else if(value == '通过'){
          value = '2'
        }else if(value == '已关闭'){
          value = '3'
        }
      }
      let res = this.setSuppliers({ curPage, eachPage, type, value });
    }
  }
};
</script>