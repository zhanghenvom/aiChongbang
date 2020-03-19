<template>
  <div style="height: 1000px; border: 1px solid #eee">
    <el-container style="height: 1000px; border: 1px solid #eee ;">
      <el-aside width="200px" style="background=#C0C4CC">
        <el-menu  :unique-opened="true" :default-active="this.path" style="height：100%;"  background-color="#eee" :router="true" >
          <el-menu-item style="height：100%;">
            <h2 style="color:#409EFF">爱宠邦供应商管理</h2>
          </el-menu-item>
          <el-menu-item index="/supplierManage/supplier" style="height：100%;">
            <router-link to="/supplierManage/supplier">商户管理</router-link>
          </el-menu-item>
          <el-menu-item index="/supplierManage/suppilerCommodity" style="height：100%;">
            <router-link to="/supplierManage/suppilerCommodity">商品管理</router-link>
          </el-menu-item>
          <el-menu-item index="/supplierManage/statistics" style="height：100%;">
            <router-link to="/supplierManage/statistics">统计</router-link>
          </el-menu-item>
        </el-menu>
      </el-aside>
        <el-col :span="24">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="4" style="float:right;">
            <el-button
              type="primary"
              size="mini"
              class="el-icon-setting"
              style="margin-top:18px;"
              @click="handleLogin"
            >
              {{supplierNumber}}</el-button
            >
          </el-menu-item>
        </el-menu>
        <el-container style="height：100%;">
        <el-main style="padding:0;height:100%">
        <router-view></router-view> 
        </el-main>
      </el-container>
        </el-col>
    </el-container>
  </div>
</template>
<script>

// import suppilerCommodity from '@/components/supplierManage/supplier/suppilerCommodity.vue'
// import supplier from '@/components/supplierManage/supplier/supplier.vue'
import auth from '../start/auth'

export default {

    //   @click="handleLogin"
    //   @select="handleSelect"


async beforeRouteEnter(to, from, next) {
    //导航守卫
    let data = await auth.getToken();
    if (data) {
      next();
    } else {
      next("/login");
    }
  },

  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      path:"",
      supplierNumber:"",

    };
  },
  methods: {
    handleLogin() {
      this.$router.push("/login"); //有历史纪录 可以后退
    },
    handleEdit() {},
    handleDelete() {},
    // handleSelect(key, keyPath) {
    // //   console.log(key, keyPath);
    // }
  },
  created(){
    let supplierNumber = JSON.parse(localStorage.getItem("supplierNumber"));
    this.supplierNumber=supplierNumber;
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