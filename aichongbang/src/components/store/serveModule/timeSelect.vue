<template>
  <el-form-item label="服务时间">
    <div class="block">
      <el-date-picker
        v-model="value3"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy/MM/dd"
      ></el-date-picker>
    </div>
    <el-time-picker
      is-range
      v-model="value1"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
      value1-format="HH:mm:ss"
    ></el-time-picker>
    <el-button type="primary" size="mini" @click="timeAdd" style="width:70px;margin-left:10px;">添加时间</el-button>
    <el-table :data="timeData" style="width: 100%" max-height="250">
      <el-table-column fixed prop="dates" label="日期" width="100"></el-table-column>
      <el-table-column prop="timer" label="时间" width="100"></el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.$index, timeValue)"
            type="text"
            size="small"
          >移除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-form-item>
</template>

<script>
// import TimeList from './timeList';
import { mapMutations, mapActions, mapState } from "vuex";
export default {
  // components:{TimeList},
  data() {
    return {
      value1: [new Date(), new Date()], 
      timeValue: [],
      value3: [],  //日期
      times: { },
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
      }
    };
  },
  computed:{...mapState('serve',['timeData'])},
  methods: {
    ...mapActions("serve", ["setTimesData",'delTimesData']),
    timeAdd() {
      console.log(this.value1,123456);
      this.times.status = true;
      this.times.dates = this.value3.join("~");
      this.times.timer = this.value1.reduce((pre, next) => {
        return `${pre.toLocaleTimeString()}至${next.toLocaleTimeString()}`;
      });
      this.timeValue.push({...this.times});
      console.log(this.timeValue,123);
      this.setTimesData(this.timeValue);
      this.times = {};
      this.timeValue = []
    },
    deleteRow(index, rows) {
        rows.splice(index, 1);
        this.delTimesData(index)
      }
  }
};
</script>

<style>
</style>