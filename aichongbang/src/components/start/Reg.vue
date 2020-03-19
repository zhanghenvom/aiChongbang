<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>欢迎注册</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="login">去登录</el-button>
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="60px"
      class="demo-ruleForm"
    >
      <el-form-item label="账户" prop="loginName">
        <el-input v-model="ruleForm.loginName" autocomplete="off" @blur="repetition"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="emaill">
        <el-input v-model="ruleForm.emaill" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="type">
        <el-radio-group v-model="ruleForm.type">
          <el-radio label="2">门店商</el-radio>
          <el-radio label="1">供应商</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item style="margin-left:105px">
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { reg, isSame } from "../../service/userService/userService.js";
export default {
  data() {
    var loginName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入账号"));
      } else if (value.length > 11) {
        callback(new Error("账户长度最大11"));
      }
      callback();
    };
    var password = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else if (
        this.ruleForm.password.length < 6 ||
        this.ruleForm.password.length > 10
      ) {
        callback(new Error("密码长度6-10！"));
      }
      callback();
    };
    var phone = (rule, value, callback) => {
      const phones = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
      if (!value) {
        callback(new Error("请输入手机号"));
      } else if (!phones.test(value)) {
        callback(new Error("请输入正确的手机号"));
      }
      callback();
    };
    var emaill = (rule, value, callback) => {
      const emaills = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (!value) {
        callback(new Error("请输入邮箱号"));
      } else if (!emaills.test(value)) {
        callback(new Error("请输入正确的邮箱号"));
      }
      callback();
    };
    var name = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入姓名"));
      } else if (this.ruleForm.name.length > 10) {
        callback(new Error("姓名长度不能超过10"));
      }
      callback();
    };
    var type = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请选择角色"));
      }
      callback();
    };
    return {
      ruleForm: {
        loginName: "",
        password: "",
        phone: "",
        emaill: "",
        name: "",
        type: "", //门店商账号-2、供应商账号-1、平台账号-0
        status: "1", //申请中-0、可用-1、不可用-2
        admin: 0 //账号正常-0、封禁账号-1
      },
      rules: {
        loginName: [{ validator: loginName, trigger: "blur" }],
        password: [{ validator: password, trigger: "blur" }],
        phone: [{ validator: phone, trigger: "blur" }],
        emaill: [{ validator: emaill, trigger: "blur" }],
        name: [{ validator: name, trigger: "blur" }],
        type: [{ validator: type, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let data = await reg(this.ruleForm);
          if (!data) {
            this.open2();
          } else {
            this.open1();
            setTimeout(() => {
              this.$router.push("/");
            }, 1500);
          }
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    open1() {
      this.$message({
        message: "注册成功",
        type: "success",
        center: true,
        duration: 1000
      });
    },
    open2() {
      this.$message.error("注册失败");
    },
    login() {
      this.$router.push("/");
    },
    async repetition() {
        const data = await isSame(this.ruleForm.loginName);
        if (data != false) {
          alert("账户名重复！");
        }
    },
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
