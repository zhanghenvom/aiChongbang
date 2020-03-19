<template>
  <div class="orderDiv">
    <el-page-header
      @back="goBack"
      style="background-color:Transparent;font-weight:bold"
      content="门店商品"
    >
    </el-page-header>
    <div class="addAndSerach">
    <storeGoodsAdd>新增商品</storeGoodsAdd>
    </div>
    <storeGoodsList></storeGoodsList>
  </div>
</template>

<script>
    // <button @click="look">获取数据</button>
import storeGoodsList from "../storeGoodsList";
import storeGoodsAdd from '../storeGoodsAdd';
// import Search from "../Search/Search";
export default {
  components: {
    storeGoodsList,
     storeGoodsAdd,
    // Search
  },
  methods: {
    goBack() {
      //   this.$router.push("/login")
    },
  }
};
</script>

<style>
.addAndSerach {
  display: flex;
  margin-top: 16px;
}
.orderDiv{
  height: 100%
}
</style>
