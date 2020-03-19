<template>
  <div style="height: 100%; border: 1px solid #eee">
    <el-container style="height: 100%; border: 1px solid #eee ;">
      <el-aside width="200px" style="background=#C0C4CC">
        <el-menu style="height：100%;"  background-color="#eee" :router="true">
          <el-menu-item index="/Student" style="height：100%;">
            <h2 style="color:#409EFF">爱宠邦平台管理</h2>
          </el-menu-item>
          <el-menu-item index="/manage/user" style="height：100%;">
            <router-link to="/manage/user">用户管理</router-link>
          </el-menu-item>
          <el-menu-item index="/manage/store" style="height：100%;">
            <router-link to="/manage/store">门店管理</router-link>
          </el-menu-item>
          <el-menu-item index="/manage/load" style="height：100%;">
             <router-link to="/manage/load">宠主管理</router-link>
          </el-menu-item>
          <el-menu-item index="/manage/supplierExamine" style="height：100%;">
             <router-link to="/manage/supplierExamine">供应商审核</router-link>
          </el-menu-item>
          <el-menu-item index="/manage/salesStatistics" style="height：100%;">
             <router-link to="/manage/salesStatistics">销售额统计</router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
        <el-col :span="24">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="3" disabled>消息中心</el-menu-item>
          <el-menu-item index="4"
            ><a href="#" target="_blank"
              >订单管理</a
            ></el-menu-item
          >
          <el-menu-item index="4" style="float:right;">
            <el-button
              type="primary"
              @click="handleLogin"
              size="mini"
              class="el-icon-setting"
              style="margin-top:18px;"
            >
              去登陆</el-button
            >
          </el-menu-item>
        </el-menu>
        <el-container style="height：100%;">
        <el-main style="padding:0;">
        <router-view></router-view> 
        </el-main>
      </el-container>
        </el-col>
    </el-container>
  </div>
</template>
<script>

import User from '@/components/Platform/User.vue'
import Store from '@/components/Platform/Store.vue'
import Load from '@/components/Platform/Load.vue'
import SupplierExamine from '@/components/Platform/SupplierExamine.vue'

export default {


  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleLogin() {
      this.$router.push("/login"); //有历史纪录 可以后退
    },
    handleEdit() {},
    handleDelete() {},
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #eee; 
}

a {
  text-decoration: none;
  color: black;
}
</style>
