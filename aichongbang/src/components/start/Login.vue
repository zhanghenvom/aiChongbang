<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>欢迎登录</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="goReg()">去注册</el-button>
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="40px"
      class="demo-ruleForm"
    >
      <el-form-item label="账户" prop="loginName">
        <el-input v-model="ruleForm.loginName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item style="margin-left:115px">
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
import auth from "./auth";
export default {
  data() {
    var loginName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("账户不能为空"));
      } else if (value.length > 11) {
        callback(new Error("长度小于12"));
      }
      callback();
    };
    var password = (rule, value, callback) => {
      if (!value) {
        callback(new Error("密码不能为空"));
      } else if (value.length < 6 || value.length > 10) {
        callback(new Error("密码长度6-10!"));
      }
      callback();
    };
    return {
      ruleForm: {
        loginName: "",
        password: ""
      },
      rules: {
        loginName: [{ validator: loginName, trigger: "blur" }],
        password: [{ validator: password, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapActions("user", ["setLogin"]),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          await this.setLogin(this.ruleForm);
          let res = this.user;
          auth.setToken(res.token); //根据type判断是那种账户
          if (res.data._id) {
            if (res.data.type == 0) {
              this.open1();
              setTimeout(() => {
                this.$router.push("/manage"); //平台账号
              }, 1200);
            } else if (res.data.type == 1) {
              this.open1();
              setTimeout(() => {
                this.$router.push("/supplierManage/suppilerCommodity"); //供应商账号
              }, 1200);
            } else {
              this.open1();
              setTimeout(() => {
                this.$router.push("/stroeManage"); //门店账号
              }, 1200);
            }
          } else {
            this.open2();
          }
        } else {
          this.open3();
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    goReg() {
      this.$router.push("/reg"); //门店商
    },
    open1() {
      this.$message({
        message: "登录成功",
        type: "success",
        center: true,
        duration: 1100
      });
    },
    open2() {
      this.$message.error("账户或密码错误");
    },
    open3() {
      this.$message.error("请输入账户或密码");
    }
  },
  computed: {
    ...mapState("user", ["user"])
  }
};
</script>

<style scoped>
.box-card {
  margin: auto;
  width: 480px;
  margin-top: 100px;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix {
  color: blueviolet;
}
</style>
