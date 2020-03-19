<template>
  <el-dialog title="修改" :visible.sync="visible"  :before-close="handleClose">
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
        <el-form-item>
          <div class="block">
            <el-date-picker
              v-model="form.dates"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="yyyy 年 MM 月 dd 日"
              value-format="yyyy/MM/dd"
              :picker-options="pickerOptions">
            </el-date-picker>
            <el-time-picker
              is-range
              v-model="timer"
              range-separator="至"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
              placeholder="选择时间范围"
              value1-format="HH:mm:ss"
            ></el-time-picker>
          </div>
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
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleUpdate">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { update } from '@/services/serveServices.js'
export default {
  data() {
    return {
        pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              end.setTime(end.getTime() + 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              end.setTime(end.getTime() + 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              end.setTime(end.getTime() + 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      timer:[new Date(), new Date()]
    };
  },
  computed: {
    ...mapState("serve", ["visible",'form'])
  },
  // beforeCreate(){
  //   //   this.form.waiterGrade
  //   this.forms = this.form;
  //   console.log(this.forms,888);
    
  // },
  methods: {
    ...mapActions("serve", ["setVisible",'setTableData']),
    handleClose() {
      this.setVisible(false);
    },
    async handleUpdate() {
      this.form.times[0].dates = this.form.dates.join("~")
      this.form.times[0].timer = this.timer.reduce((pre, next) => {
        return `${pre.toLocaleTimeString()}至${next.toLocaleTimeString()}`;
      });
      let _id = this.form._id
      let data = await update(_id,this.form);
      if(data.nModified == 1){
        this.$message({
          message: "服务添加成功",
          type: "success"
        });
        this.setTableData();
        setTimeout(()=>{
          this.setVisible(false);
        },2000)
      }
    }
  }
};
</script>

<style>
</style>