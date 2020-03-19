<template>
  <div>
    <el-radio-group v-model="type" @change="showChart">
      <el-radio-button label="月城市商品总销售额的占比"></el-radio-button>
      <el-radio-button label="季城市服务总销售额的占比"></el-radio-button>
      <el-radio-button label="年城市服务总销售额的占比"></el-radio-button>
    </el-radio-group>
    <div class="total" id="myChart" ref="myChart"></div>
  </div>
</template>
<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar";
// 引入饼状图
import "echarts/lib/chart/pie";
// 引入地图
import "echarts/lib/chart/scatter";
// 引入提示框和标题组件
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/extension/bmap/bmap";

import axios from "axios";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

// import BMap from 'BMap'
export default {
  data() {
    return {
      type: "班级人数统计",
      classAxisData: [],
      classSeriesData: [],
      ageAxisData: [],
      ageSeriesData: [],
      yearAxisData: [],
      yearSeriesData: [],
      shopsCountData: [],
      shopsData: [],
      zoom: 0
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

      if (this.type == "月城市商品总销售额的占比") {
        axios({
          url: "/ip/storePieChart/storeSales",
          method: "get"
        }).then(res => {
          this.classAxisData = res.data.axisData;
          this.classSeriesData = res.data.seriesData;
          myChart.setOption(this.classesOptions, true);
        });
      } else if (this.type == "季城市服务总销售额的占比") {
        axios({
          url: "/ip/storePieChart/storePurchaseVolume",
          method: "get"
        }).then(res => {
          this.ageAxisData = res.data.axisData;
          this.ageSeriesData = res.data.seriesData;
          myChart.setOption(this.ageOpitons, true);
        });
      } else if (this.type == "年城市服务总销售额的占比") {
        axios({
          url: "/ip/storePieChart/storeYearSales",
          method: "get"
        }).then(res => {
          this.yearAxisData = res.data.axisData;
          this.yearSeriesData = res.data.seriesData;
          myChart.setOption(this.yearOpitons, true);
        });
      }
    }
  },
  
  computed: {
    classesOptions() {
      return {
        title: {
          text: "月城市服务总销售额的占比",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: this.classAxisData
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: this.classSeriesData[0], name: this.classAxisData[0] },
              { value: this.classSeriesData[1], name: this.classAxisData[1] },
              { value: this.classSeriesData[2], name: this.classAxisData[2] },
              { value: this.classSeriesData[3], name: this.classAxisData[3] },
              { value: this.classSeriesData[4], name: this.classAxisData[4] },
              { value: this.classSeriesData[5], name: this.classAxisData[5] },
              { value: this.classSeriesData[6], name: this.classAxisData[6] },
              { value: this.classSeriesData[7], name: this.classAxisData[7] }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ],
        legend: {
          orient: "vertical",
          left: "left",
          data: this.classSeriesData
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      };
    },
    ageOpitons() {
      return {
        title: {
          text: "季城市服务总销售额的占比",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: this.ageAxisData
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: this.ageSeriesData[0], name: this.ageAxisData[0] },
              { value: this.ageSeriesData[1], name: this.ageAxisData[1] },
              { value: this.ageSeriesData[2], name: this.ageAxisData[2] },
              { value: this.ageSeriesData[3], name: this.ageAxisData[3] },
              { value: this.ageSeriesData[4], name: this.ageAxisData[4] },
              { value: this.ageSeriesData[5], name: this.ageAxisData[5] },
              { value: this.ageSeriesData[6], name: this.ageAxisData[6] },
              { value: this.ageSeriesData[7], name: this.ageAxisData[7] }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
    },
    yearOpitons() {
      return {
        title: {
          text: "年城市服务总销售额的占比",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: this.yearAxisData
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: this.yearSeriesData[0], name: this.yearAxisData[0] },
              { value: this.yearSeriesData[1], name: this.yearAxisData[1] },
              { value: this.yearSeriesData[2], name: this.yearAxisData[2] },
              { value: this.yearSeriesData[3], name: this.yearAxisData[3] },
              { value: this.yearSeriesData[4], name: this.yearAxisData[4] },
              { value: this.yearSeriesData[5], name: this.yearAxisData[5] },
              { value: this.yearSeriesData[6], name: this.yearAxisData[6] },
              { value: this.yearSeriesData[7], name: this.yearAxisData[7] }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
    },
    mapOptions() {
      return {
        title: {
          text: "全国门店统计",
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item"
        },
        bmap: {
          center: [104.072259, 30.663403],
          zoom: 5,
          roam: true,
          mapStyle: {
            styleJson: [
              {
                featureType: "water",
                elementType: "all",
                stylers: {
                  color: "#044161"
                }
              },
              {
                featureType: "land",
                elementType: "all",
                stylers: {
                  color: "#004981"
                }
              },
              {
                featureType: "boundary",
                elementType: "geometry",
                stylers: {
                  color: "#064f85"
                }
              },
              {
                featureType: "railway",
                elementType: "all",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "highway",
                elementType: "geometry",
                stylers: {
                  color: "#004981"
                }
              },
              {
                featureType: "highway",
                elementType: "geometry.fill",
                stylers: {
                  color: "#005b96",
                  lightness: 1
                }
              },
              {
                featureType: "highway",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "arterial",
                elementType: "geometry",
                stylers: {
                  color: "#004981"
                }
              },
              {
                featureType: "arterial",
                elementType: "geometry.fill",
                stylers: {
                  color: "#00508b"
                }
              },
              {
                featureType: "poi",
                elementType: "all",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "green",
                elementType: "all",
                stylers: {
                  color: "#056197",
                  visibility: "off"
                }
              },
              {
                featureType: "subway",
                elementType: "all",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "manmade",
                elementType: "all",
                stylers: {
                  visibility: "on"
                }
              },
              {
                featureType: "local",
                elementType: "all",
                stylers: {
                  visibility: "on"
                }
              },
              {
                featureType: "arterial",
                elementType: "labels",
                stylers: {
                  visibility: "on"
                }
              },
              {
                featureType: "boundary",
                elementType: "geometry.fill",
                stylers: {
                  color: "#029fd4"
                }
              },
              {
                featureType: "building",
                elementType: "all",
                stylers: {
                  color: "#1a5787"
                }
              },
              {
                featureType: "city",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "district",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              },
              {
                featureType: "town",
                elementType: "labels",
                stylers: {
                  visibility: "off"
                }
              }
            ]
          }
        },
        series: [
          {
            name: "门店数",
            type: "scatter",
            coordinateSystem: "bmap",
            data: this.shopsCountData,
            symbolSize: function(val) {
              return val[2] * 2;
            },
            // label: {
            //     show: true,
            //     formatter: function(params) {
            //         return params.data[3];
            //     }
            // },
            itemStyle: {
              normal: {
                color: "#ddb926"
              }
            },
            tooltip: {
              formatter: function(params, ticket, callback) {
                return (
                  "城市：" + params.data[3] + "<br>门店数：" + params.data[2]
                );
              }
            }
          },
          {
            name: "门店位置",
            type: "scatter",
            coordinateSystem: "bmap",
            data: this.shopsData,
            symbol: "pin",
            symbolSize: 20,
            itemStyle: {
              normal: {
                color: "red"
              }
            },
            tooltip: {
              formatter: function(params, ticket, callback) {
                return (
                  "店铺名称：" + params.data[2] + "<br>地址：" + params.data[3]
                );
              }
            }
          }
        ]
      };
    }
  }
};
</script>
<style scoped>
.total {
  width: 100%;
  height: 500px;
}
</style>

