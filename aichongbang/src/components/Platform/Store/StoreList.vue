<template>
  <div style="height:100%">
    <Search></Search>
    <el-col :span="22">
      <el-table style="width: 100% height:100%" :data="stores">
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="营业执照号码" prop="number"></el-table-column>
        <el-table-column label="营业执照图片" >
          <template slot-scope="scope" >
            <img style="width:60px;height:60px" :src="'http://localhost:3000/images/'+scope.row.licenseImg">
          </template>
        </el-table-column>
        <el-table-column label="营业地址" prop="address"></el-table-column>
        <el-table-column label="定位" prop="location"></el-table-column>
        <el-table-column label="所在城市" prop="city"></el-table-column>
        <el-table-column label="联系电话" prop="phone"></el-table-column>
        <el-table-column label="法人" prop="legal"></el-table-column>
        <el-table-column label="头图">
          <template slot-scope="scope" >
            <img style="width:60px;height:60px" :src="'http://localhost:3000/images/'+scope.row.headerImg">
          </template>
        </el-table-column>
        <el-table-column label="特色" prop="characteristic"></el-table-column>
        <el-table-column label="VIP等级" prop="vip"></el-table-column>
        <el-table-column label="佣金比例" prop="commission"></el-table-column>
        <el-table-column label="审核状态" prop="status"></el-table-column>
        <el-table-column label="店员属性" prop>
          <template slot-scope="scope">   
            <el-button size="mini" type="danger" @click="open(scope.row.clerk[0])">查看详情</el-button>
          </template>
        </el-table-column>
        <el-table-column align="right" width:160>
          <template slot-scope="scope">
            <Update  :storeMsg="scope.row"></Update>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <Add></Add>
  </div>
</template>
<script>
import Add from "./Add";
import Update from "./Update"
import Search from  "./Search"
import { getStores} from "../../../service/storeService";
import { mapState, mapActions } from "vuex";
import Axios from 'axios';
export default {
  components: {
    Add,
    Update,
    Search
  },
  computed: {
    ...mapState("stores",["stores"]),
    ...mapState("stores",["store"])
  },
  methods: {
    open(scope) {
      this.$alert(
        
        `
        姓名：${scope.name},，
        电话：${scope.phone}，
        职位：${scope.title}
        `,
        {
          confirmButtonText: "确定"
        }
      );
    },
    async handleUpdate(_id) {
      console.log(1111);
      
       this.setStore(_id) 
    },
    ...mapActions("stores",["setStores"]),
    ...mapActions("stores",["setStore"]),
  },
  created() {
    this.setStores();
  }
};
</script>

<style>
</style>