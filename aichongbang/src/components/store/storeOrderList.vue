<template>
  <div style="height:100%">
 <el-col :span="24">
    <el-table
      style="width: 100%; height:100%"  stripe :data="storeOrder"
    >
      <el-table-column label="ID"  width="120" fit fixed  prop="_id" ></el-table-column>
      <el-table-column label="订单名" prop="orderName" ></el-table-column>
      <el-table-column label="服务门店" prop="storeName" ></el-table-column>
      <el-table-column label="订单总金额" width="120" prop="totalAmountOfOrder" ></el-table-column>
      <el-table-column label="评分" prop="score" ></el-table-column>
      <el-table-column label="评价内容" prop="orderContent" ></el-table-column>
      <el-table-column label="评价性质" prop="EvaluationOfNature" ></el-table-column>
      <el-table-column label="评价人" prop="appraiser" ></el-table-column>
      <el-table-column label="图片"  prop="orderImage" >
       <template slot-scope="scope" >
            <img style="width:60px;height:60px" :src="'http://localhost:3000/'+scope.row.orderImage">
          </template>
      </el-table-column>
      
      <el-table-column fixed="right" width:160 >
        <template slot-scope="scope">
          <!-- scope.row代表的就是表格一行的数据，想要输出stuNamee,就写{{scope.row.stuName}} -->
          <orderUpdate :id="scope.row._id"></orderUpdate>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
 </el-col>
  </div>
</template>

<script>
    // <storeGoodsPagination></storeGoodsPagination>
import { mapActions, mapState} from "vuex";
import orderUpdate from "./storeOrderUpdate";
// import storeGoodsPagination from './storeGoodsPagination'
import { removeStoreOrder } from "../../service/storeOrder";
export default {  
  components: {
    orderUpdate,
    // storeGoodsPagination
  },
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapState('storeGoods',["storeOrder"])
  },
  created() {
    this.setStoreOrder();
  },
  methods: {
    ...mapActions('storeGoods',['setStoreOrder']),
    handleDelete(_id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          removeStoreOrder(_id);
          // console.log(_id);
          this.setStoreOrder();
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