<template>
  <div>
  <el-button size="mini" type="primary" @click="dialogTableVisible = true">查看详情</el-button>
  <el-dialog title="宠物详情" :visible.sync="dialogTableVisible">
  <el-table :data="pets.pets">
    <el-table-column property="name" label="名字"></el-table-column>
    <el-table-column property="category" label="品类"></el-table-column>
    <el-table-column property="type" label="种类"></el-table-column>
    <el-table-column property="color" label="颜色"></el-table-column>
    <el-table-column property="time" label="出生日期"></el-table-column>
    <el-table-column property="character" label="性格"></el-table-column>
  </el-table>
</el-dialog>
  </div>
</template>

<script>
export default {
  props:['pets'],
    data() {
      return {
        dialogTableVisible: false,
      };
    }
  };
</script>

<style></style>
