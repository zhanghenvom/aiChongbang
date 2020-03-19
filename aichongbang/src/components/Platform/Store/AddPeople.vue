<template>
  <div>
    <el-button type="mini" @click="dialogFormVisible = true">添加店员信息</el-button>
    <el-dialog title="增加店员信息" :visible.sync="dialogFormVisible">
      <el-form :model="Peoples">
        <el-form-item label="名字" :label-width="formLabelWidth">
          <el-input v-model="Peoples.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="Peoples.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="职位" :label-width="formLabelWidth">
          <el-input v-model="Peoples.title" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addPetClick()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      dialogFormVisible: false,
      Peoples: {},
      form: {
        name: ""
      },
      formLabelWidth: "80px"
    };
  },
  methods: {
    ...mapMutations("stores", ["setPeople"]),
    addPetClick() {
      this.setPeople(this.Peoples);
      this.dialogFormVisible = false;
    }
  }
};
</script>

<style>
</style>
