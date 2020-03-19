<template>
  <div>
    <el-button type="text" @click="open()">修改</el-button>

<el-dialog title="修改" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
   <el-form :model="form">
        <el-form-item label="订单名" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入订单名"
            v-model="form.orderName"
            width="80"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="服务门店" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入门店"
            v-model="form.storeName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="订单总金额" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入订单总金额"
            v-model="form.totalAmountOfOrder"
            autocomplete="off"
            label-width="80px"
            size:mixins
          ></el-input>
        </el-form-item>
        <el-form-item label="评分" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入订单评分"
            v-model="form.score"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="评价内容" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入评价内容"
            v-model="form.orderContent"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="请选择评价性质" :label-width="formLabelWidth">
          <el-radio-group v-model="form.EvaluationOfNature">
            <el-radio-button label="正常"></el-radio-button>
            <el-radio-button label="纠纷"></el-radio-button>
            <el-radio-button label="刷单"></el-radio-button>
            <el-radio-button label="水贴"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="评价人" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入评价人"
            v-model="form.appraiser"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="上传"
          :label-width="formLabelWidth"
        >
          <el-upload
            class="upload-demo"
            action="/ip/storeOrder/upload"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :file-list="fileList"
            multiple
            :limit="3"
            list-type="picture"
          >
            <el-button
              size="small"
              class="el-icon-upload"
              style="font-size:16px"
              type="primary"
              >点击上传</el-button
            >
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="update">确 定</el-button>
      </div>
</el-dialog>
  </div>
</template>

<script>
import { getStoreOrderById, upDateStoreOrder } from "../../service/storeOrder";
import { mapActions, mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      dialogFormVisible: false,
      form: {
        orderName: "",
        storeName: "",
        totalAmountOfOrder: "",
        score: "",
        orderContent: "",
        EvaluationOfNature: "",
        appraiser: "",
        orderImage: []      
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    fileList() {
      // console.log(this.form);
      if(this.form.orderImage){
        return this.form.orderImage.map(item => {
         return  { name: item, url: "/ip/" + item,response:item }
        });
      }
      return [];
    },
    ...mapState("storeGoods", ["storeOrder"])
  },
  methods: {
    ...mapActions("storeGoods", ["setStoreOrder"]),
    async open() {
      // console.log(1111);
      let storeOrder = await getStoreOrderById(this.id);
      // console.log(this.id)
      this.form = storeOrder;
      this.dialogFormVisible = true;
    },
    async update() {
      await upDateStoreOrder(this.form);
      // console.log("this.form",this.form)
      this.setStoreOrder();
      this.dialogFormVisible = false;
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList)
      this.storeOrder.orderImage = this.storeOrder.orderImage.filter(item => item != file.response);
    },
    handleSuccess(response, file, fileList) {
      if (!this.storeOrder.orderImage) {
        this.storeOrder.orderImage = [];
      }
      this.storeOrder.orderImage.push(response);
    }
  }
};
</script>

<style></style>
