<template>
    <div>
        <el-radio-group v-model="type" @change="showChart">
            <el-radio-button label="月统计"></el-radio-button>
            <el-radio-button label="年龄分布统计"></el-radio-button>
            <el-radio-button label="地图"></el-radio-button>
        </el-radio-group>
        <div class="total" id="myChart" ref="myChart"></div>
    </div>
</template>
<script>
import echarts from "echarts/lib/echarts";
// 引入柱状图
import "echarts/lib/chart/bar"
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
            type: "月统计",
            classAxisData: [],
            classSeriesData: [],
            ageAxisData: [],
            ageSeriesData: [],
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
            
            if (this.type == "月统计") {
                axios({
                    // url: "/ip/storeSalesStatistics/StoreSalesStatistics",
                    method: "get"
                }).then(res => {
                    this.classAxisData = res.data.axisData;
                    this.classSeriesData = res.data.seriesData;
                    this.otherClassSeriesData = res.data.otherSeriesData;
                    myChart.setOption(this.classesOptions, true);
                });
            } else if (this.type == "季度统计") {
                axios({
                    // url: "/ip/storeSalesStatistics/QuarterlyStoreSaleSstatistics",
                    method: "get"
                }).then(res => {
                    this.ageAxisData = res.data.axisData;
                    this.ageSeriesData = res.data.seriesData;
                    this.otherClassSeriesData = res.data.otherSeriesData;
                    myChart.setOption(this.ageOpitons, true);
                    console.log(this.ageAxisData, this.ageSeriesData);
                });
            } else {
                axios({
                    url: "/proxy/shops/counts",
                    method: "get"
                }).then(res => {
                    this.shopsCountData = res.data;
                    myChart.setOption(this.mapOptions, true);
                });
                myChart.on("finished", async () => {
                    // 从echarts对象中获取bmap对象
                    var bmap = myChart
                        .getModel()
                        .getComponent("bmap")
                        .getBMap();
                    // 设置最小缩放值
                    bmap.setMinZoom(5);
                    // 设置最大缩放值
                    // bmap.setMaxZoom(15);
                    bmap.setMapStyleV2({
                        styleId: '6e109b4b215f2907d5e5bf869b7ed243'
                    })
                    // 缩放结束后的事件
                    bmap.addEventListener("zoomend", e => {
                        let zoom = this.zoom;
                        this.zoom = bmap.getZoom();
                        // 打印出当前缩放值
                        if (zoom < bmap.getZoom() && bmap.getZoom() == 10) {
                            axios({
                                url: "/proxy/shops",
                                method: "get"
                            }).then(res => {
                                this.shopsData = res.data;
                                let options = this.mapOptions;
                                options.bmap.zoom = 10;
                                myChart.setOption(this.mapOptions, false);
                            });
                        } else if (
                            zoom > bmap.getZoom() &&
                            bmap.getZoom() <= 10
                        ) {
                            this.shopsData = [];
                            let options = this.mapOptions;
                            myChart.setOption(this.mapOptions, false);
                        }
                    });
                });
            }
        }
    },
    computed: {
        classesOptions() {
            return {
                title: {
                    text: "销售量季度统计图"
                },
                tooltip: {},
                xAxis: {
                    data: this.classAxisData
                },
                yAxis: {},
                series: [
                    {
                        name: "商品",
                        type: "bar",
                        data: this.classSeriesData
                    },
                      {
                        name: "服务",
                        type: "bar",
                        data: this.otherClassSeriesData
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

