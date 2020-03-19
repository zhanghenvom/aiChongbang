<template>
  <el-card class="box-card" >
    <div slot="header" class="clearfix">
      <span>门店申请</span>
    </div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm">
      <el-form-item label="店名" prop="storeName">
        <el-input v-model="ruleForm.storeName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="营业执照号码" prop="licenseNumber">
        <el-input v-model="ruleForm.licenseNumber" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="营业执照图片" prop="licenseImage">
        <el-upload
          class="upload-demo"
          action="/ip/user/imgsUpload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="营业地址" prop="licenseSite">
        <el-input v-model="ruleForm.licenseSite" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="定位" prop="locate">
        <el-input v-model="ruleForm.locate" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="所在城市" prop="city">
        <el-input v-model="ruleForm.city" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="法人" prop="legalerson">
        <el-input v-model="ruleForm.legalerson" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" prop="tel">
        <el-input v-model="ruleForm.tel" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="头图" prop="headImage">
        <el-upload
          class="upload-demo"
          action="/ip/user/imgsUpload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="特色" prop="feature">
        <el-input v-model="ruleForm.feature" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="VIP等级" prop="vipGrade">
        <el-input v-model="ruleForm.vipGrade" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="佣金比例" prop="brokerage">
        <el-input v-model="ruleForm.brokerage" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="店员属性" prop="clerkType">
        <el-input v-model="ruleForm.clerkType" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <el-steps :active="active" finish-status="success">
      <el-step title="提交"></el-step>
      <el-step title="申请"></el-step>
      <el-step title="通过"></el-step>
    </el-steps>

  </el-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    var loginName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("账户不能为空"));
      }
      if (value.length > 10) {
        callback(new Error("账户长度最大10"));
      }
      callback();
    };
    // var password = (rule, value, callback) => {
    //   if (!value) {
    //     callback(new Error("请输入密码"));
    //   } else {
    //     if (
    //       this.ruleForm.password.length >= 6 &&
    //       this.ruleForm.password.length <= 10
    //     ) {
    //       callback(new Error("密码长度6-10！"));
    //     }
    //     callback();
    //   }
    // };
    // var phone = (rule, value, callback) => {
    //   const phones = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    //   if (!phones.test(value)) {
    //     callback(new Error("请输入正确的手机号"));
    //   }
    //   callback();
    // };
    // var emaill = (rule, value, callback) => {
    //   const emaills = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
    //   if (!value) {
    //     callback(new Error("请输入邮箱"));
    //   } else {
    //     if (!emaills.test(value)) {
    //       callback(new Error("请输入正确的邮箱号"));
    //     }
    //     callback();
    //   }
    // };
    // var name = (rule, value, callback) => {
    //   if (!value) {
    //     callback(new Error("请输入姓名"));
    //   } else {
    //     if (this.ruleForm.name.length > 10) {
    //       callback(new Error("姓名长度不能超过10"));
    //     }
    //     callback();
    //   }
    // };
    // var type = (rule, value, callback) => {
    //   if (!value) {
    //     callback(new Error("请选择角色"));
    //   }
    //   callback();
    // };
    return {
      active: 0,
      ruleForm: {
        storeName: "",
        licenseNumber: "",
        licenseImage: "",
        licenseSite: "",
        locate: "",
        city: "",
        legalerson: "",
        tel: "",
        headImage: "",
        feature: "",
        vipGrade: "",
        brokerage: "",
        clerkType: [],
        status: "1", //申请中-1、可用-2、不可用-3
        admin: "0"   //账号正常-0，账号封禁-1
      },
      rules: {
        storeName: [{ validator: loginName, trigger: "blur" }],
        licenseNumber: [{ validator: loginName, trigger: "blur" }],
        // licenseImage: [{ validator: loginName, trigger: "blur" }],
        licenseSite: [{ validator: loginName, trigger: "blur" }],
        locate: [{ validator: loginName, trigger: "blur" }],
        city: [{ validator: loginName, trigger: "blur" }],
        legalerson: [{ validator: loginName, trigger: "blur" }],
        tel: [{ validator: loginName, trigger: "blur" }],
        // headImage: [{ validator: loginName, trigger: "blur" }],
        feature: [{ validator: loginName, trigger: "blur" }],
        vipGrade: [{ validator: loginName, trigger: "blur" }],
        brokerage: [{ validator: loginName, trigger: "blur" }],
        clerkType: [{ validator: loginName, trigger: "blur" }]
      },
      fileList: []
    };
  },
  methods: {
    ...mapActions("shopUser", ["setLogin"]),
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          await this.setLogin(this.ruleForm);
          const data = this.shopUser;
          if (!data) {
            this.open2();
          } else {
            this.open1();
            this.active = this.shopUser.status;
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
        message: "申请提交成功",
        type: "success",
        center: true,
        duration: 1500
      });
    },
    open2() {
      this.$message.error("注册失败");
    }
    // handleRemove(file, fileList) {
    //   console.log(fileList);
    // },
    // handlePreview(file) {
    //   console.log(file);
    // }
  },
  computed: {
    ...mapState("shopUser", ["shopUser"])
  }
};
</script>

<style scoped>
.box-card {
  margin: auto;
  width: 50%;
  height: 1200px;
  clear:both
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
.demo-ruleForm{
  height: 100%;
}
</style>
