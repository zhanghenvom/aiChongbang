<template>
  <div>
    <el-button type="mini" @click="dialogFormVisible = true">新增宠物</el-button>
    <el-dialog title="新增宠物信息" :visible.sync="dialogFormVisible">
      <el-form :model="pets">
        <el-form-item label="名字" :label-width="formLabelWidth">
          <el-input v-model="pets.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="品种" :label-width="formLabelWidth">
          <el-input v-model="pets.category" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="种类" :label-width="formLabelWidth">
          <el-input v-model="pets.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="颜色" :label-width="formLabelWidth">
          <el-input v-model="pets.color" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" :label-width="formLabelWidth">
          <el-input v-model="pets.time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性格" :label-width="formLabelWidth">
          <el-input v-model="pets.character" autocomplete="off"></el-input>
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
      pets: {},
      form: {
        name: ""
      },
      formLabelWidth: "80px"
    };
  },
  methods: {
    ...mapMutations("platform", ["setPet"]),
    addPetClick() {
      this.setPet(this.pets);
      this.dialogFormVisible = false;
    }
  }
};
</script>

<style>
</style>
