<template>
    <div>
        <el-radio-group v-model="type" @change="showChart">
            <el-radio-button label="商品销量统计"></el-radio-button>
            <el-radio-button label="服务销量统计"></el-radio-button>
            <el-radio-button label="地图"></el-radio-button>
        </el-radio-group>
        <div class="total" id="myChart" ref="myChart"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>