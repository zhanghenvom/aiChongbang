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
          value: "登录名"
        },
        {
          value: "手机号"
        },
        {
          value: "姓名"
        },
        {
          value: "角色"
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
    ...mapActions("platform", ["setUsers"]),
    search() {
      let type = this.value;
      let value = this.input;
      let eachPage = 5;
      let curPage = 1;
      if (type == "角色") {
        if (value == "平台管理员") {
          value = 0;
        } else if (value == "供应商管理员") {
          value = 1;
        } else if (value == "门店管理员") {
          value = 2;
        }
      } else if (type == "状态") {
        if (value == "正常") {
          value = 0;
        } else if (value == "封号") {
          value = 1;
        }
      }
      let res = this.setUsers({ curPage, eachPage, type, value });
    }
  }
};
</script>