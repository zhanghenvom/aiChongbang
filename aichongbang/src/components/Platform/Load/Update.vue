<template>
  <div>
    <el-button size="mini" type="primary" @click="dialogFormVisible = true">修改</el-button>
    <el-dialog title="修改信息" :visible.sync="dialogFormVisible">
      <el-form :model="load">
        <el-form-item label="电话号码" :label-width="formLabelWidth">
          <el-input v-model="load.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="昵称" :label-width="formLabelWidth">
          <el-input v-model="load.nickname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" :label-width="formLabelWidth">
          <el-input v-model="load.realName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="会员卡" :label-width="formLabelWidth">
          <el-input v-model="load.vipCard" autocomplete="off"></el-input>
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
          <el-input v-model="load.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="区域" :label-width="formLabelWidth">
          <el-input v-model="load.region" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="积分" :label-width="formLabelWidth">
          <el-input v-model="load.integral" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="拥有宠物" :label-width="formLabelWidth">
          <el-table :data="load.pets">
            <el-table-column property="name" label="名字"></el-table-column>
            <el-table-column property="category" label="品类"></el-table-column>
            <el-table-column property="type" label="种类"></el-table-column>
            <el-table-column property="color" label="颜色"></el-table-column>
            <el-table-column property="time" label="出生日期"></el-table-column>
            <el-table-column property="character" label="性格"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="text">
                  <UpdatePet :pet="scope.row"></UpdatePet>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
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
import { mapState, mapActions } from "vuex";
import UpdatePet from "./UpdatePet";
import { updateLoad } from "../../../service/platformService/load";
export default {
  components: {
    UpdatePet
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      headerImg: "",
      imageUrl: "http://localhost:3000/images/dog1.jpg",
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapState("platform", ["load",'updatePet'])
  },
  methods: {
    ...mapActions('platform',['setLoads']),
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.load.headerImg = res;
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
    update() {
      this.load.pets[0] = this.updatePet;
      updateLoad(this.load);
      this.setLoads();
      this.dialogFormVisible = false;
    }
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
