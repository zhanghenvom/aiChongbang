<template>
  <div>
    <el-button size="mini" type="primary" @click="dialogFormVisible = true">新增宠主</el-button>
    <el-dialog title="新增宠主" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="电话号码" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="form.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" :label-width="formLabelWidth">
          <el-input v-model="form.realName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="会员卡" :label-width="formLabelWidth">
          <el-input v-model="form.vipCard" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="头图" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="/ip/platform/upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="送货地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="区域" :label-width="formLabelWidth">
          <el-input v-model="form.region" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="积分" :label-width="formLabelWidth">
          <el-input v-model="form.integral" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="宠物" :label-width="formLabelWidth">
          <AddPet></AddPet>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addLoad()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import AddPet from "./AddPet";
import { mapState, mapActions } from "vuex";
import { addLoad } from "../../../service/platformService/load";
export default {
  components: {
    AddPet
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {},
      imageUrl: "",
      formLabelWidth: "120px"
    };
  },
  methods: {
      ...mapActions('platform',['setLoads']),
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.form.headerImg = res;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    addLoad() {
      let petArr = [];
      petArr.push(this.pet);
      this.form.pets = petArr;
      console.log(this.form);
      addLoad(this.form);
      this.setLoads();
      this.dialogFormVisible = false;
    }
  },
  computed: {
    ...mapState("platform", ["pet"])
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
