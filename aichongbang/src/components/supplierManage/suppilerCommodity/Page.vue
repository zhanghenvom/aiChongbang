<template>
  <el-pagination
    background
    layout="sizes,prev, pager, next"
    :total="page.total"
    :page-sizes="[5,10,15,20]"
    :current-page.sync="page.curPage"
    @current-change="this.currentChange"
    @size-change="this.sizeChange"
  ></el-pagination>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("supplier", ["page","supplierCommoditys"])
  },
  methods: {
    currentChange(curPage) {
      let page={};
      page.curPage=curPage;
      page.eachPage=this.page.eachPage;
      this.setSupplierCommoditys(page);
    },
    sizeChange(eachPage) {
      let page={};
      page.curPage=1;
      page.eachPage=eachPage;
      this.setSupplierCommoditys(page);
    },
    ...mapActions("supplier", ["setSupplierCommoditys"])
  }
};
</script>

<style>
</style>