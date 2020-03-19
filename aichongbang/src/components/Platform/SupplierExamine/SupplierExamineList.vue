<template>
  <div style="height:100%">
    <el-col :span="22">
      <el-table style="width: 100% height:100%" :data="suppliers">
        <el-table-column label="编号" width="240" prop="_id"></el-table-column>
        <el-table-column label="名称" prop="supplierName"></el-table-column>
        <el-table-column label="地址" prop="supplierAddress"></el-table-column>
        <el-table-column label="电话" prop="supplierPhone"></el-table-column>
        <el-table-column label="网站" prop="supplierWebsite"></el-table-column>
        <el-table-column label="执照" prop="imgs">
          <template scope="scope">
            <img :src="'http://localhost:3000/images/'+scope.row.imgs[0]" width="50" height="50" />
          </template>
        </el-table-column>
        <el-table-column label="备注" prop="supplierRemarks"></el-table-column>
        <el-table-column label="状态" prop="supplierStatus"></el-table-column>
        <el-table-column align="right" width:160>
          <template slot-scope="scope">
            <el-button type="text">
              <Update :supplier="scope.row"></Update>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        :page-size="5"
        @current-change="currentChange"
        layout="prev, pager, next"
        :total="suppliersAll.total"
      ></el-pagination>
    </el-col>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Update from "./Update";
export default {
  components: {
    Update
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions("platform", ["setSuppliers"]),
    currentChange(current) {
      let curPage = current;
      let eachPage = 5;
      this.setSuppliers({ curPage, eachPage });
    }
  },
  created() {
    this.setSuppliers();
  },
  computed: {
    ...mapState("platform", ["suppliers", "suppliersAll"])
  }
};
</script>

<style>
</style>