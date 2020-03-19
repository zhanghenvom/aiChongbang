<template>
    <div>
        <el-radio-group v-model="type" @change="showChart">
            <el-radio-button label="商品销售额统计"></el-radio-button>
            <el-radio-button label="服务销售额统计"></el-radio-button>
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
export default {
    data(){
        return {
            type:"商品销售额统计",
            shopAxisData:[],
            shopSeriesData:[],
            serveAxisData:[],
            serveSeriesData:[],
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.showChart();
        });
    },
    methods:{
        showChart(){
             // 销毁之前的实例
            echarts.dispose(this.$refs.myChart);
            // 重新创建新的实例
            let myChart = echarts.init(this.$refs.myChart);
            if (this.type == "商品销售额统计") {
                axios({
                    url:'/ip/statisticsServe/getShopSale',
                    method:"GET",
                }).then(
                    res=>{
                    this.shopAxisData = res.data.axisData;
                    this.shopSeriesData = res.data.seriesData;
                    myChart.setOption(this.shopsOptions, true);
                });
            }else if (this.type == "服务销售额统计") {
                axios({
                    url: "/ip/statisticsServe/getSserveSale",
                    method: "GET",
                }).then(res => {
                    this.serveAxisData = res.data.axisData;
                    this.serveSeriesData = res.data.seriesData;
                    myChart.setOption(this.serveOpitons, true);
                    console.log(this.serveAxisData, this.serveSeriesData);
                });
            }
        }
    },
    computed: {
        shopsOptions() {
            return {
                title: {
                    text: "商品销售额统计图"
                },
                tooltip: {},
                xAxis: {
                    data: this.shopAxisData
                },
                yAxis: {},
                series: [
                    {
                        name: "商品销售",
                        type: "bar",
                        data: this.shopSeriesData
                    }
                ]
            };
        },
        serveOpitons() {
            return {
                title: {
                    text: "服务销售额统计分布",
                    subtext: "纯属虚构",
                    x: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                    data: this.serveAxisData
                },
                series: [
                    {
                        name: "服务销售",
                        type: "pie",
                        radius: "55%",
                        center: ["50%", "60%"],
                        // data: this.serveSeriesData,
                        data:[
                            {value:1100,name:"一月"},
                            {value:756,name:"二月"},
                            {value:956,name:"三月"},
                            {value:289,name:"四月"},
                            {value:652,name:"五月"},
                            {value:551,name:"六月"},
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
    }
}
</script>

<style scoped>
    .total {
    width: 100%;
    height: 500px;
}
</style>