<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.times[0]?scope.row.times[0].dates:""}}</span>
        </template>
      </el-table-column>
      <el-table-column label="时间" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.times[0]?scope.row.times[0].timer:""}}</span>
          <!-- <p
            v-for="(item,index) in scope.row.times[0]?scope.row.times[0].timer:''"
            :key="index"
            style="margin-left: 10px;"
          >{{ item.timer}}</p> -->
        </template>
      </el-table-column>
      <el-table-column prop="name" label="服务名称" width="80"></el-table-column>
      <el-table-column prop="sort" label="服务类别" width="80"></el-table-column>
      <el-table-column prop="useTime" label="耗时" width="80"></el-table-column>
      <el-table-column prop="suitableSize" label="适用规格" width="120"></el-table-column>
      <el-table-column prop="waiterGrade" label="服务员等级" width="100"></el-table-column>
      <el-table-column prop="serveSize" label="服务规格" width="120"></el-table-column>
      <el-table-column prop="price" label="价格" width="120"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleUpdate(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small" @click="handleDel(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Update></Update>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from "vuex";
import { del } from "../../services/serveServices.js";
import Update from "./serveModule/serveUpdate";
export default {
  components: {
    Update
  },
  computed: {
    ...mapState("serve", ["tableData"]),
  },
  created() {
    this.show();
  },
  methods: {
    ...mapActions("serve", ["setTableData", "setVisible",'setForm']),
    async show() {
      await this.setTableData();
    },
    handleClick(row) {
      console.log(row);
    },
    async handleDel(row) {
      let data = await del(row._id);
      this.show();
    },
    handleUpdate(row) {
      this.setForm(row._id)
      this.setVisible(true);
    }
  }
};
</script>

<style>
</style>