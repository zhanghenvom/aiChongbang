<template>
  <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="是否修改信息" prop="supplierNumber">
      <el-button type="primary" @click="handleChange">点击修改信息</el-button>
      <el-button type="success" :disabled="updateDisable" @click="handleUpdata">确定</el-button>
    </el-form-item>
    <el-form-item label="供应商编号" prop="supplierNumber">
      <el-input v-model="this.supplierNumber" :disabled="true"></el-input>
    </el-form-item>
    <el-form-item label="供应商名称" prop="supplierName">
      <el-input v-model="ruleForm.supplierName" :disabled="dsiable"></el-input>
    </el-form-item>
    <el-form-item label="供应商地址" prop="supplierAddress">
      <el-input v-model="ruleForm.supplierAddress" :disabled="dsiable"></el-input>
    </el-form-item>
    <el-form-item label="供应商电话" prop="supplierPhone">
      <el-input v-model="ruleForm.supplierPhone" :disabled="dsiable"></el-input>
    </el-form-item>
    <el-form-item label="供应商网站" prop="supplierWebsite">
      <el-input v-model="ruleForm.supplierWebsite" :disabled="dsiable"></el-input>
    </el-form-item>
    <el-form-item label="供应商备注" prop="supplierRemarks">
      <el-input v-model="ruleForm.supplierRemarks" :disabled="dsiable"></el-input>
    </el-form-item>
    <el-form-item label="营业执照" style="pa">
      <el-radio-group v-model="ruleForm.imgs">
        <el-upload
          class="upload-demo"
          action="/ip/supplierCommodity/public"
          :on-success="handleSuccess"
          :on-remove="handleRemove"
          multiple
          :limit="3"
          list-type="picture"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>

<script>
import {
  getSupplier,
  updateSupplier,
  addSupplier
} from "@/service/supplier/supplier";
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      ruleForm: {
        supplierName: "",
        supplierAddress: "",
        supplierPhone: "",
        supplierWebsite: "",
        supplierRemarks: "",
        supplierStatus: "",
        imgs: []
      },
      dsiable: false,
      updateDisable: true
    };
  },
  computed: {
    ...mapState("supplier", ["supplierNumber", "supplierId"]),
    ...mapState("user", ["user"]),
    fileList() {
      if (this.ruleForm.imgs) {
        return this.ruleForm.imgs.map((item, index) => {
          return {
            name: "营业执照" + (index + 1),
            url: "/ip/images/" + item,
            response: item
          };
        });
      }
      return [];
    }
  },

  methods: {
    ...mapMutations("supplier", [
      "setSupplierStatus",
      "setSupplierId",
      "setSupplierNumber"
    ]),
    handleRemove(file, fileList) {
      this.ruleForm.imgs = this.form.imgs.filter(item => item != file.response);
    },
    handleSuccess(response, file, fileList) {
      this.ruleForm.imgs.push(response);
    },
    async handleUpdata() {
      let userId = JSON.parse(localStorage.getItem("userId"));
      let date = await getSupplier(userId);
      if (!date) {
        this.ruleForm.userId = userId;
        this.ruleForm.supplierNumber = this.supplierNumber;
        this.ruleForm.supplierStatus = "0";
        let data = await addSupplier(this.ruleForm);
        
        if (data) {
          this.setSupplierId(data._id);
          this.dsiable = true;
          this.updateDisable = true;
        }
      } else if (date && date.supplierStatus == 2) {
        let data = await updateSupplier(date._id, this.ruleForm);
        this.ruleForm = data;
        this.dsiable = true;
        this.updateDisable = true;
      } else {
        let data = await updateSupplier(date._id, this.ruleForm);
        this.ruleForm = data;
        this.dsiable = false;
        this.updateDisable = false;
      }
    },
    handleChange() {
      (this.dsiable = false), (this.updateDisable = false);
    }
  },
  async created() {
    let userId = JSON.parse(localStorage.getItem("userId"));
    let supplierNumber = JSON.parse(localStorage.getItem("supplierNumber"));
    this.setSupplierNumber(supplierNumber);
    let date = await getSupplier(userId);
    if (!date) {
      alert("未审核,无法使用功能");
      this.dsiable = false;
      this.updateDisable = false;
    } else if (date.supplierStatus == 0) {
      this.ruleForm = date;
      this.dsiable = false;
      this.updateDisable = false;
    } else if (date.supplierStatus == 1) {
      alert("审核未通过，原因：" + date.examine);
    } else {
      this.setSupplierId(date._id);
      this.ruleForm = date;
      this.dsiable = true;
    }
  }
};
</script>

<style>
</style>