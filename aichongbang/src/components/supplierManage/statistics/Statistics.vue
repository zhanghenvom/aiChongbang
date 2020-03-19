<template>
  <div>
    <el-radio-group v-model="type" @change="showChart">
      <el-radio-button label="各门店采购货品"></el-radio-button>
      <el-radio-button label="各门店销售货品"></el-radio-button>
    </el-radio-group>
    <div class="total" id="myChart" ref="myChart"></div>
  </div>
</template>

<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
// // 引入饼状图
// import "echarts/lib/chart/pie";
// // 引入地图
// import "echarts/lib/chart/scatter";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/extension/bmap/bmap";

import axios from "axios";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  data() {
        return {
            type: "各门店采购货品",
            classAxisData: [],
            classSeriesData: [],
            ageAxisData: [],
            ageSeriesData: [],
        };
  },
  mounted() {
    this.$nextTick(() => {
      this.showChart();
    });
  },
  methods: {
    showChart() {
      // 销毁之前的实例
      echarts.dispose(this.$refs.myChart);
      // 重新创建新的实例
      let myChart = echarts.init(this.$refs.myChart);
      // var classesOptions = {
      //   xAxis: {
      //     type: "category",
      //     data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      //   },
      //   yAxis: {
      //     type: "value"
      //   },
      //   series: [
      //     {
      //       data: [120, 200, 150, 80, 70, 110, 130],
      //       type: "bar"
      //     }
      //   ]
      // };
      // myChart.setOption(option, true);



      if (this.type == "各门店采购货品") {
         axios({
          url: "/ip/statistics/storePurchaseVolume",
          method: "get"
        }).then(res => {
          console.log(res.data);
          
          this.classAxisData = res.data.axisData;
          this.classSeriesData = res.data.seriesData;
          myChart.setOption(this.storePurchaseVolumeOptions, true);
        });
      } else if (this.type == "各门店销售货品") {
        axios({
          url: "/ip/statistics/storeSales",
          method: "get"
        }).then(res => {
          console.log(res.data);
          this.classAxisData = res.data.axisData;
          this.classSeriesData = res.data.seriesData;
          myChart.setOption(this.storeSalesOptions, true);
        });
      }


    
    }
  },
  computed: {
     storePurchaseVolumeOptions() {
            return {
                title: {
                    text: "各门店采购货品"
                },
                tooltip: {},
                xAxis: {
                    data: this.classAxisData
                },
                yAxis: {},
                series: [
                    {
                        name: "数量",
                        type: "bar",
                        data: this.classSeriesData
                    }
                ]
            };
        },
     storeSalesOptions() {
            return {
                title: {
                    text: "各门店销售货品"
                },
                tooltip: {},
                xAxis: {
                    data: this.classAxisData
                },
                yAxis: {},
                series: [
                    {
                        name: "数量",
                        type: "bar",
                        data: this.classSeriesData
                    }
                ]
            };
        },
  }
};
</script>

<style scoped>
.total {
  width: 100%;
  height: 500px;
}
</style>