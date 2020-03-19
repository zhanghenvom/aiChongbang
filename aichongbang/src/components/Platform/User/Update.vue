<template>
  <div>
    <el-button size="mini" type="primary" @click="dialogFormVisible = true">修改</el-button>
    <el-dialog title="用户信息修改" :visible.sync="dialogFormVisible">
      <el-form :model="user">
        <el-form-item label="登录名" :label-width="formLabelWidth">
          <el-input v-model="user.loginName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="user.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" :label-width="formLabelWidth">
          <el-input v-model="user.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" :label-width="formLabelWidth">
          <el-input v-model="user.emaill" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="user.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色" :label-width="formLabelWidth">
          <el-select v-model="user.type" placeholder="更改角色">
            <el-option label="供应商管理员" value="供应商管理员"></el-option>
            <el-option label="门店管理员" value="门店管理员"></el-option>
            <el-option label="平台管理员" value="平台管理员"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-select v-model="user.admin" placeholder="更改状态">
            <el-option label="正常" value="正常"></el-option>
            <el-option label="封号" value="封号"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="update()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { updateUser } from "../../../service/platformService/user";
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
    update() {
      if(this.user.type == '平台管理员'){
        this.user.type = 0
      }else if(this.user.type == '供应商管理员'){
        this.user.type = 1
      }else{
        this.user.type = 2
      };
      if(this.user.admin == '正常'){
        this.user.admin = 0
      }else{
        this.user.admin = 1
      };
      updateUser(this.user);
      this.setUsers();
      this.dialogFormVisible = false;
    }
  },
  computed: {
    ...mapState("platform", ["user"])
  }
};
</script>

<style></style>
