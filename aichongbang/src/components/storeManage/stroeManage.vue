<template>
  <div style="height: 1340px; border: 1px solid #eee">
    <el-container style="height: 1340px; border: 1px solid #eee ;">
      <el-aside width="200px" style="background=#C0C4CC">
        <el-menu style="height：100%;" background-color="#eee" :router="true">
          <el-menu-item style="height：100%;">
            <h2 style="color:#409EFF">爱宠邦系统管理</h2>
          </el-menu-item>
          <el-menu-item :index="index" style="height：100%;">
            <router-link :style="style" to>{{name}}</router-link>
          </el-menu-item>
          <el-menu-item index="/stroeManage/stock" style="height：100%;">
            <router-link to>选择供应商货品</router-link>
          </el-menu-item>
          <el-menu-item index="/stroeManage/storeGoods" style="height：100%;">
            <router-link to>门店商品管理</router-link>
          </el-menu-item>
          <el-menu-item index="/stroeManage/storeOrder">
            <router-link to>订单管理</router-link>
          </el-menu-item>
          <el-menu-item index="/stroeManage/serveManage" >
            <router-link to>服务管理</router-link>
          </el-menu-item>
          <el-submenu>
            <template slot="title">统计</template>
              <el-menu-item-group>
                <el-menu-item index="/stroeManage/storeMoneyCount">销量统计</el-menu-item>
                <el-menu-item index="/stroeManage/salesStatistics">销售额统计</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- <el-menu-item index="/storeManage/storeStatistics">
            <router-link to>统计管理</router-link>
          </el-menu-item>-->
        </el-menu>
      </el-aside>
      <el-container style="height：100%;">
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
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4">
              <a href="https://www.ele.me" target="_blank">订单管理</a>
            </el-menu-item>
            <el-menu-item index="4" style="float:right;">
              <el-button
                type="primary"
                @click="handleLogin"
                size="mini"
                class="el-icon-setting"
                style="margin-top:18px;"
              >去登陆</el-button>
            </el-menu-item>
          </el-menu>
          <router-view></router-view>
        </el-col>
        <el-main style="padding:0;height:600px">
          <!-- <router-view></router-view> -->
        </el-main>
        <el-footer
          style="background-color:#545c64;text-align:center;line-height:3.6;color:white"
        >底栏容器</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import auth from "../../components/start/auth";
import { mapState } from "vuex";
export default {
  async beforeRouteEnter(to, from, next) {
    //导航守卫
    let data = await auth.getToken();
    if (data) {
      next();
    } else {
      next("/login");
    }
  },
  created() {                         //判断状态-申请门店
    this.user.data.status = 2;
    let data = this.user.data.status;
    if (data == 1) {
      this.namr="已申请"
      this.index = "";
      this.style = "color:red";
    }
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      index: "/stroeManage/storeApply",
      style: "",
      name:"门店申请"
    };
  },
  methods: {
    handleLogin() {
      this.$router.push("/login"); //有历史纪录 可以后退
    },
    handleSelect() {}
  },
  computed: {
    ...mapState("user", ["user"])
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
