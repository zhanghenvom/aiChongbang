<template>
  <div style="height:100%">
    <el-col :span="22">
      <el-table style="width: 100% height:100%" :data="loads">
        <el-table-column label="电话号码" prop="phone"></el-table-column>
        <el-table-column label="昵称" prop="nickname"></el-table-column>
        <el-table-column label="真实姓名" prop="realName"></el-table-column>
        <el-table-column label="会员卡" prop="vipCard"></el-table-column>
        <el-table-column label="头图">
          <template scope="scope">
            <img :src="'http://localhost:3000/images/'+scope.row.headerImg" width="40" height="40" />
          </template>
        </el-table-column>
        <el-table-column label="送货地址" prop="address"></el-table-column>
        <el-table-column label="区域" prop="region"></el-table-column>
        <el-table-column label="积分" prop="integral"></el-table-column>
        <el-table-column label="拥有的宠物" prop="pets">
          <template slot-scope="scope">
            <el-button size="mini" type="text">
              <Look :pets="scope.row"></Look>
            </el-button>
          </template>
        </el-table-column>
        <el-table-column align="right" width:160>
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="remove(scope.row._id)">删除</el-button>
            <el-button type="text" @click="update(scope.row._id)">
              <Update :load="scope.row"></Update>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        :page-size="5"
        @current-change="currentChange"
        layout="prev, pager, next"
        :total="loadsAll.total"
      ></el-pagination>
    </el-col>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Update from "./Update";
import Look from "./Look";
import { removeLoad } from "../../../service/platformService/load";
export default {
  components: {
    Look,
    Update
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("platform", ["setLoads", "setLoad"]),
    remove(_id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          removeLoad(_id);
          this.setLoads();
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
      this.setLoad(_id);
    },
    currentChange(current) {
      let curPage = current;
      let eachPage = 5;
      this.setLoads({curPage,eachPage});
    }
  },
  created() {
    this.setLoads();
  },
  computed: {
    ...mapState("platform", ["loads", "loadsAll"])
  }
};
</script>

<style>
</style>