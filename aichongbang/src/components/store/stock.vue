<template>
  <div style="height:100%">
    <goods :submit="submit" class="goods"></goods>
    <el-button type="primary" @click="get">获取数据</el-button>
    <el-table
      :key="tableKey2"
      height="200"
      :data="tableData"
      border
      fit
      highlight-current-row
      style="min-height:100%;"
    >
      <el-table-column align="center" label="操作" width="50">
        <template slot-scope="scope">
          <span
            style="color:#409EFF;font-size:16px"
            @click.prevent="addRow(scope.row,scope.$index)"
          >
            <i class="el-icon-plus"></i>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="数量" align="center" width="90">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.number"
            oninput="value=value.replace(/[^\d]/g,'')"
            maxlength="8"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="50">
        <template slot-scope="scope">
          <span style="color:red;font-size:16px" @click.prevent="delRow(scope.row,scope.$index)">
            <i class="el-icon-minus"></i>
          </span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="name" type="index" label="名称" width="50"></el-table-column>
      <el-table-column align="center" prop="supplierNumber" label="供应商编号" width="80"></el-table-column>
      <el-table-column align="center" prop="make" label="材质" width="80"></el-table-column>
      <el-table-column align="center" prop="featuresThat" label="特色说明"></el-table-column>
      <el-table-column align="center" prop="wholesalePrice" label="批发价格"></el-table-column>
      <el-table-column align="center" prop="specialFunction" label="特殊功用"></el-table-column>
      <el-table-column align="center" prop="type" label="品类"></el-table-column>
      <el-table-column align="center" prop="make" label="材质或制作方法"></el-table-column>
      <el-table-column align="center" prop="applicableSpecifications" label="适用规格"></el-table-column>
      <el-table-column align="center" prop="exclusiveSpecifications" label="专属规格"></el-table-column>
      <el-table-column align="center" prop="packingSpecification" label="包装规格"></el-table-column>
      <el-table-column align="center" prop="taste" width="100px" label="口味"></el-table-column>
      <el-table-column align="center" prop="placeOfOrign" label="产地"></el-table-column>
      <el-table-column align="center" prop="dateOfProduction" label="出厂日期"></el-table-column>
      <el-table-column align="center" prop="expirationDate" label="保质期">
        <template slot-scope="scope">
          <img
            style="width:60px;height:60px"
            :src="'http://localhost:3000/images/'+scope.row.headerImg"
          />
        </template>
      </el-table-column>
      <el-table-column prop="address" label="大图" align="center" width="110px">
        <el-image style="width: 100px; height: 100px" :src="url" :preview-src-list="srcList"></el-image>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import goods from "./goods.vue";
import { mapMutations, mapActions } from "vuex";
export default {
  components: { goods },
  data() {
    return {
      tableData: [],
      tableKey2: 0
    };
  },
  methods: {
    ...mapMutations("buyGoode", ["setBuyGoode"]),
    ...mapActions("wholesale", ["setWholesale"]),
    addRow(row) {
      //   console.log(row)
      row.number = row.number + 1;
    },
    delRow(row) {
      //   console.log(row)
      if (row.number != 0) {
        row.number = row.number - 1;
      }
    },
    submit() {
      // 判断被选购的商品
      let buy = this.tableData.filter(v => {
        return v.number > 0;
      });
      this.setBuyGoode(buy);
    },
    async get() {
      await this.setWholesale();
      this.tableData = this.wholesale;
    }
  },
  computed: {
    ...mapState("buyGoode", ["buyGoode"]),
    ...mapState("wholesale", ["wholesale"])
  }
};
</script>


<style scoped>
.el-table thead {
  color: #fff;
}
.goods {
  float: left;
}
</style>