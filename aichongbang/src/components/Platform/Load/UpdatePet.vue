<template>
  <div>
    <el-button type="mini" @click="dialogFormVisible = true">修改</el-button>
    <el-dialog title="修改宠物信息" :visible.sync="dialogFormVisible">
      <el-form :model="pet">
        <el-form-item label="名字" :label-width="formLabelWidth">
          <el-input v-model="pet.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="品种" :label-width="formLabelWidth">
          <el-input v-model="pet.category" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="种类" :label-width="formLabelWidth">
          <el-input v-model="pet.type" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="颜色" :label-width="formLabelWidth">
          <el-input v-model="pet.color" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出生日期" :label-width="formLabelWidth">
          <el-input v-model="pet.time" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性格" :label-width="formLabelWidth">
          <el-input v-model="pet.character" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="update()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    props:['pet'],
  data() {
    return {
      dialogFormVisible: false,
      form: {
        desc: ""
      },
      formLabelWidth: "80px"
    };
  },
  methods:{
    ...mapMutations('platform',['setUpdatePet']),
    update(){
      this.setUpdatePet(this.pet)
      this.dialogFormVisible = false
    }
  }
};
</script>

<style>
</style>
