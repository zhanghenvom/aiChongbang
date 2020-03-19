<template>
  <div>
    <el-page-header
      style="background-color:Transparent;font-weight:bold"
      content="门店订单"
    >
    </el-page-header>
    <div class="addAndSerach">
    <storeOrderAdd>新增订单</storeOrderAdd>
    </div>
    <storeOrderList></storeOrderList>
  </div>
</template>

<script>
import storeOrderList from "../storeOrderList";
import storeOrderAdd from '../storeOrderAdd';
// import {getStoreOrder} from '../../service/storeOrder.js'
// import Search from "../Search/Search";
export default {
  components: {
    storeOrderList,
     storeOrderAdd,
    // Search
  },
  methods: {
  }
};
</script>

<style>
.addAndSerach {
  display: flex;
  margin-top: 16px;
}
</style>
