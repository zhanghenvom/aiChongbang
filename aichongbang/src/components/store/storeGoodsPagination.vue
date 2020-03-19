<template>
  <div>
    <el-pagination
      background
      :current-page="pagination.current"
      :page-sizes="[5,10,15,20]"
      layout="sizes,prev, pager, next"
      :total="pagination.total"
      @current-change="currentChange"
      @size-change="sizeChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    currentChange(current) {
        // console.log(current);
      this.setStoreGoods({
        current: current,
        pageSize: this.pagination.pageSize
      });
    },
    sizeChange(pageSize) {
        // console.log(pageSize);
      this.setStoreGoods({ current: 1, pageSize: pageSize });
    },
    ...mapActions("storeGoods", ["setStoreGoods"])
  },
  computed: {
    ...mapState("storeGoods", ["pagination"])
  }
};
</script>

<style></style>
