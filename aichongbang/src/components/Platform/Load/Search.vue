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
          value: "电话号码"
        },
        {
          value: "昵称"
        },
        {
          value: "真实姓名"
        },
        {
          value: "送货地址"
        },
        {
          value: "区域"
        },
        {
          value: "积分"
        }
      ],
      value: "",
      input: ""
    };
  },
  methods: {
    ...mapActions("platform", ["setLoads"]),
    search() {
      let type = this.value;
      let value = this.input;
      let eachPage = 5;
      let curPage = 1;
      let res = this.setLoads({ curPage, eachPage, type, value });
    }
  }
};
</script>