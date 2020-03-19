<template>
  <div style="height:100%">
 <el-col :span="24">
    <el-table
      style="width: 100%; height:100%"  stripe :data="storeGoods"
    >
      <el-table-column label="ID"  width="120" fit fixed  prop="_id" ></el-table-column>
      <el-table-column label="商品名" prop="name" ></el-table-column>
      <el-table-column label="品类" prop="type" ></el-table-column>
      <el-table-column label="材质和方法" width="120" prop="make" ></el-table-column>
      <el-table-column label="规格" prop="applicableSpecifications" ></el-table-column>
      <el-table-column label="专属品类" prop="exclusiveSpecifications" ></el-table-column>
      <el-table-column label="包装规格" prop="packingSpecification" ></el-table-column>
      <el-table-column label="口味" prop="taste" ></el-table-column>
      <el-table-column label="功效" prop="specialFunction" ></el-table-column>
      <el-table-column label="产地" prop="placeOfOrign" ></el-table-column>
      <el-table-column label="生产日期" prop="dateOfProduction" ></el-table-column>
      <el-table-column label="保质期" prop="expirationDate" ></el-table-column>
      <el-table-column label="供应商编号" width="120" prop="supplierNumber" ></el-table-column>
      <el-table-column label="特色说明" prop="featuresThat" ></el-table-column>
      <el-table-column label="价格" prop="wholesalePrice" ></el-table-column>
      <el-table-column label="数量" prop="number" ></el-table-column>
      <el-table-column label="供应商ID" prop="supplierId" ></el-table-column>
      
      <el-table-column label="图片" fixed="right" prop="imgs" >
      <template slot-scope="scope" >
            <el-image style="width:60px;height:60px" :src="'http://localhost:3000/'+scope.row.imgs"></el-image>
          </template>
      </el-table-column>      
      <el-table-column fixed="right" width:160 >
        <template slot-scope="scope">
          <Update :id="scope.row._id"></Update>
          <!-- scope.row代表的就是表格一行的数据，想要输出stuNamee,就写{{scope.row.stuName}} -->
          <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <storeGoodsPagination></storeGoodsPagination>
 </el-col>
  </div>
</template>

<script>
import { mapActions, mapState} from "vuex";
import Update from "./storeGoodsUpdate";
import storeGoodsPagination from './storeGoodsPagination'
import { removeStoreGoods } from "../../service/storeGoods";
export default {  
  components: {
    Update,
    storeGoodsPagination
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapState('storeGoods',["storeGoods"])
  },
  created() {
    this.setStoreGoods();
  },
  methods: {
    ...mapActions('storeGoods',['setStoreGoods']),
    handleDelete(_id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          removeStoreGoods(_id);
          // console.log(_id);
          this.setStoreGoods();
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style>
</style>