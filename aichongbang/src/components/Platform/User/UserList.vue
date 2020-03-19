<template>
  <div style="height:100%">
    <el-col :span="22">
      <el-table style="width: 100% height:100%" :data="users">
        <el-table-column label="登录名" prop="loginName"></el-table-column>
        <el-table-column label="密码" prop="password"></el-table-column>
        <el-table-column label="手机号" prop="phone"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="角色" prop="type"></el-table-column>
        <el-table-column label="状态" prop="admin"></el-table-column>
        <el-table-column align="right" width:160>
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="remove(scope.row._id)">删除</el-button>
            <el-button type="text" @click="update(scope.row._id)">
              <Update></Update>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background :page-size="5" @current-change="currentChange" layout="prev, pager, next" :total="usersAll.total"></el-pagination>
    </el-col>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Update from "./Update";
import { removeUser } from "../../../service/platformService/user";
export default {
  components: {
    Update
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("platform", ["setUsers", "setUser"]),
    remove(_id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          removeUser(_id);
          this.setUsers();
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    update(_id) {
      this.setUser(_id);
    },
    currentChange(current){
      let curPage = current;
      let eachPage = 5;
      let type = 3;
      this.setUsers({curPage,eachPage,type})
    }
  },
  created() {
    this.setUsers();
  },
  computed: {
    ...mapState("platform", ["users",'usersAll'])
  }
};
</script>

<style>
</style>