<template>
  <div>
    <el-button type="primary" @click="dialog">我的订单</el-button>
    <el-dialog title="我的订单" :visible.sync="dialogTableVisibles">
      <el-table :data="buyGoode" style="width: 100%">
        <el-table-column label="名称" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="价格" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.wholesalePrice }}</span>
          </template>
        </el-table-column>
        <el-table-column label="数量" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.number }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button style="margin-left:310px;margin-top:50px" type="primary" @click="buy">确定提交</el-button>
    </el-dialog>
  </div>
</template>


<script>
import { mapState, mapMutations } from "vuex";
import { buy } from "../../service/buyGoode/buyGoode";
export default {
  props: ["submit"],
  data() {
    return {
      dialogTableVisibles: false,
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapMutations("buyGoode", ["setBuyGoode"]),
    dialog() {
      (this.dialogTableVisibles = true), this.submit();
    },
    buy() {
      this.buyGoode.map(v => {
        v._id = this.user.data._id;      
        buy(v);
      });
      this.dialogTableVisibles=false
    },
    handleDelete(a, b) {
      let data = this.buyGoode.filter(function(v) {
        if (v.name !== b.name) {
          return v;
        }
      });
      this.setBuyGoode(data);
    }
  },
  computed: {
    ...mapState("buyGoode", ["buyGoode"]),
    ...mapState("user", ["user"])
  }
};
</script>
