<template>
  <div>
    <el-button size="mini" type="primary" @click="dialogFormVisible = true">新增</el-button>
    <el-dialog title="增加用户" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="登录名" :label-width="formLabelWidth">
          <el-input v-model="form.loginName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="form.emaill" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="更改角色">
            <el-option label="供应商管理员" value="供应商管理员"></el-option>
            <el-option label="门店管理员" value="门店管理员"></el-option>
            <el-option label="平台管理员" value="平台管理员"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-select v-model="form.status" placeholder="更改状态">
            <el-option label="正常" value="正常"></el-option>
            <el-option label="封号" value="封号"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {  mapActions } from "vuex";
import { addUser } from "../../../service/platformService/user";
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        loginName: "",
        password: "",
        phone: "",
        emaill: "",
        name: "",
        type: "",
        status: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions('platform',['setUsers']),
    addUser() {
      if(this.form.type == '平台管理员'){
        this.form.type = 0
      }else if(this.form.type == '供应商管理员'){
        this.form.type = 1
      }else{
        this.form.type = 2
      };
      if(this.form.status == '正常'){
        this.form.status = 0
      }else{
        this.form.status = 1
      };
      addUser(this.form);
      this.setUsers();
      this.dialogFormVisible = false;
    }
  }
};
</script>

<style></style>
