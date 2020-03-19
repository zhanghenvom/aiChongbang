<template>
  <div>
    <el-button size="mini" type="primary" @click="dialogFormVisible = true">修改状态</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="supplier">
        <el-form-item label="审核状态" :label-width="formLabelWidth">
          <el-select v-model="supplier.supplierStatus" placeholder="请选择活动区域" style="float:left">
            <el-option label="未审核" value="未审核"></el-option>
            <el-option label="未通过" value="未通过"></el-option>
            <el-option label="通过" value="通过"></el-option>
            <el-option label="已关闭" value="已关闭"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input v-model="supplier.examine" type="textarea" :rows="2" autocomplete="off"></el-input>
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
import { updateSupplier } from "../../../service/platformService/supplier";
import { mapActions } from "vuex";
export default {
  props: ["supplier"],
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions("platform", ["setSuppliers"]),
    update() {
      if (this.supplier.supplierStatus == "未通过") {
        this.supplier.supplierStatus = "1";
      } else if (this.supplier.supplierStatus == "未审核") {
        this.supplier.supplierStatus = "0";
      } else if (this.supplier.supplierStatus == "通过") {
        this.supplier.supplierStatus = "2";
      } else if (this.supplier.supplierStatus == "已关闭") {
        this.supplier.supplierStatus = "3";
      }
      updateSupplier(this.supplier);
      this.setSuppliers();
      this.dialogFormVisible = false;
    }
  }
};
</script>

<style>
</style>