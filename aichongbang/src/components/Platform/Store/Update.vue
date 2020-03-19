<template>
  <div>
    <el-button @click="dialogFormVisible = true">修改门店</el-button>
    <el-dialog style="width:1200px;margin:auto" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input style="width:300px;float:left" v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="营业执照号码" :label-width="formLabelWidth">
          <el-input style="width:300px;float:left" v-model="form.number" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="营业执照图片" :label-width="formLabelWidth">
          <el-input style="width:300px;float:left" v-model="form.licenseImg" autocomplete="off"></el-input>
        </el-form-item> -->
        <el-form-item label="营业执照地址" :label-width="formLabelWidth">
          <el-input style="width:300px;float:left" v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="定位" :label-width="formLabelWidth">
          <el-input style="width:300px;float:left" v-model="form.location" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="城市" :label-width="formLabelWidth">
          <el-input style="width:300px;float:left" v-model="form.city" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="法人" :label-width="formLabelWidth">
          <el-input style="width:300px;float:left" v-model="form.legal" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input style="width:300px;float:left" v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="特色" :label-width="formLabelWidth">
          <el-input style="width:300px;float:left" v-model="form.characteristic" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="VIP" :label-width="formLabelWidth">
          <el-input style="width:300px;float:left" v-model="form.vip" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="佣金比例" :label-width="formLabelWidth">
          <el-input style="width:300px;float:left" v-model="form.commission" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="审核状态" :label-width="formLabelWidth">
          <el-input style="width:300px;float:left" v-model="form.status" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="店员信息 " :label-width="formLabelWidth">
          <el-table :data="this.form.clerk">
            <el-table-column property="name" label="名字"></el-table-column>
            <el-table-column property="phone" label="电话"></el-table-column>
            <el-table-column property="title" label="职位"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="text">
                  <UpdatePeople :pet="scope.row"></UpdatePeople>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item label="上传" :label-width="formLabelWidth">
          <el-radio-group v-model="form.licenseImg">
        <el-upload
          class="upload-demo"
          action="/ip/store/public"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleAddImg"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击修改营业执照</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        </el-radio-group>
        </el-form-item>
        <el-form-item label="上传" :label-width="formLabelWidth">
          <el-radio-group v-model="form.headerImg">
        <el-upload
          class="upload-demo"
          action="/ip/store/headImg"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="handleAddHeadImg"
          :file-list="fileList"
          list-type="picture"
        >
          <el-button size="small" type="primary">点击上传头图</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible=false">取 消</el-button>
        <el-button type="primary" @click="handleUpdates">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import { updateStore } from "../../../service/storeService";
import UpdatePeople from "./UpdatePeople"
import {mapState, mapActions,mapMutations} from 'vuex'
export default {
  props: ["storeMsg"],
  data() {
    return {
      form: {
        name: "",
        number: "",
        licenseImg: "",
        address: "",
        location: "",
        city: "",
        legal: "",
        phone: "",
        headerImg: "",
        characteristic: "",
        vip: "",
        commission: "",
        status:"",
        clerk:{},
      },
      dialogFormVisible: false,
      formLabelWidth: "120px",
      fileList:[]
    };
  },
  components:{
    UpdatePeople
  },
  computed: {
      ...mapState("stores",["store"]),
      // ...mapState("stores",["dialogFormVisible"]),
      ...mapState("stores", ["load",'updatePet'])
  },
  beforeUpdate(){
    console.log( this.storeMsg);
      this.form = this.storeMsg
  },
  methods: {
    ...mapActions('stores',['setLoads']),
    async handleUpdates(){
        let res = await updateStore(this.form)
         this.setStores()
         this.dialogFormVisible = false;
      },
    ...mapActions("stores",["setDialogFormVisible","setStore","setStores",]),
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleAddImg(response, file, fileList){
        this.form.licenseImg=response
      },
      handleAddHeadImg(response, file, fileList){
        this.form.headerImg =response
      },
  }
};
</script>

<style>
</style>