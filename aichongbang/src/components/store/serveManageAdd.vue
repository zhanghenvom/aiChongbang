<template>
  <div>
    <el-button type="primary" @click="dialogFormVisible = true">添加服务</el-button>
    <el-dialog title="服务添加" :visible.sync="dialogFormVisible">
      <!-- <el-card class="box-card"> -->
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="服务名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="服务类别">
          <el-select v-model="form.sort" placeholder="请选择服务类别">
            <el-option label="医疗" value="医疗"></el-option>
            <el-option label="摄影" value="摄影"></el-option>
            <el-option label="洗浴" value="洗浴"></el-option>
            <el-option label="美容" value="美容"></el-option>
            <el-option label="寄养" value="寄养"></el-option>
            <el-option label="训练" value="训练"></el-option>
            <el-option label="其他" value="其他"></el-option>
          </el-select>
        </el-form-item>
        <TimeSelect></TimeSelect>
        <el-form-item label="耗时">
          <el-input v-model="form.useTime" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="适用规格">
          <el-input v-model="form.suitableSize" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="服务规格">
          <el-input v-model="form.serveSize" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="服务员等级">
          <el-input v-model="form.waiterGrade" style="width:300px"></el-input>
        </el-form-item>
        <el-form-item label="价格">
          <el-input v-model="form.price" style="width:300px"></el-input>
        </el-form-item>
        <!-- <el-form-item label="排期">
          <div class="block">
            <el-date-picker
              v-model="value2"
              type="datetimerange"
              :picker-options="pickerOptions"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right"
              format="yyyy-MM-dd HH:mm:ss"
              value-format
            ></el-date-picker>
          </div>
        </el-form-item> -->
        <el-form-item>
          <el-button type="primary" @click="onAdd">立即添加</el-button>
        </el-form-item>
      </el-form>
      <!-- </el-card> -->
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import TimeSelect from "./serveModule/timeSelect.vue";
import { mapMutations, mapActions, mapState } from "vuex";
import { serveAdd } from "../../services/serveServices.js";
export default {
  data() {
    return {
      form: {
        name: "",
        sort: "",
        waiterGrade:"",
        price: "",
        serveSize: "",
        suitableSize: "",
        useTime:"",
        times:[]
      },
      dialogTableVisible: false,
      dialogFormVisible: false
    };
  },
  computed: {
    ...mapState("serve", ["timeData"])
  },
  components: { TimeSelect },
  methods: {
    ...mapMutations("serve", ["setTimesData"]),
    ...mapActions("serve", ["setTableData"]),
    async onAdd() {
      console.log(this.form,666);
      this.form.times = this.timeData
      // this.form.waiterGrade = this.form.waiterGrade.split(',')
      console.log(this.form);
      
      let data = await serveAdd(this.form);
      if (data._id) {
        this.$message({
          message: "服务添加成功",
          type: "success"
        });
      }
      this.setTimesData([])
      this.setTableData();
    },
    handleCancel() {
      let value = [];
      this.setTimesData(value);
      this.dialogFormVisible = false;
    },
    
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 600px;
}
</style>

