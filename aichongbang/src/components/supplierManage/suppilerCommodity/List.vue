<template>
  <div>
    <el-table :data="supplierCommoditys" border style="width: 100%">
      <el-table-column fixed prop="_id" label="产品编号" width="250"></el-table-column>
      <el-table-column prop="name" label="名称" width="100"></el-table-column>
      <el-table-column prop="type" label="品类" width="100"></el-table-column>
      <el-table-column prop="make" label="材质或制作方法" width="100"></el-table-column>
      <el-table-column prop="applicableSpecifications" label="适用规格" width="100"></el-table-column>
      <el-table-column prop="exclusiveSpecifications" label="专属规格" width="100"></el-table-column>
      <el-table-column prop="packingSpecification" label="包装规格" width="100"></el-table-column>
      <el-table-column prop="taste" label="口味" width="120"></el-table-column>
      <el-table-column prop="specialFunction" label="特殊功用" width="100"></el-table-column>
      <el-table-column prop="placeOfOrign" label="产地" width="100"></el-table-column>
      <el-table-column prop="dateOfProduction" label="出厂日期" width="100"></el-table-column>
      <el-table-column prop="expirationDate" label="保质期" width="100"></el-table-column>
      <el-table-column prop="supplierNumber" label="供应商编号" width="100"></el-table-column>
      <el-table-column prop="featuresThat" label="特色说明" width="100"></el-table-column>
      <el-table-column prop="wholesalePrice" label="批发价格" width="100"></el-table-column>
      <el-table-column label="商品图" width="100">
        <template scope="scope">
          <img :src="'http://localhost:3000/images/'+scope.row.imgs[0]" width="40" height="40" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <Updata :id="scope.row._id"></Updata>
          <el-button @click="removeClick(scope.row._id)" type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Page></Page>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Updata from "./Updata";
import Page from "./Page";
import {
  removeSupplierCommodity,
  getSupplier
} from "@/service/supplier/supplier";

export default {
  components: {
    Updata,
    Page
  },
  computed: {
    ...mapState("supplier", ["supplierCommoditys", "supplierId", "userId"])
  },
  methods: {
    ...mapActions("supplier", ["setSupplierCommoditys"]),
    ...mapMutations("supplier", ["setSupplierStatus", "setSupplierId"]),
    async removeClick(_id) {
      let data = await removeSupplierCommodity(_id);
      if (data) {
        alert("删除成功");
        this.setSupplierCommoditys();
      } else {
        alert("删除失败");
        this.setSupplierCommoditys();
      }
    }
  },
  async created() {
    let userId = JSON.parse(localStorage.getItem("userId"));
    let date = await getSupplier(userId);
    this.setSupplierId(date._id);
    this.setSupplierCommoditys({
      curPage: 1,
      eachPage: 10,
      supplierId: this.supplierId
    });
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>