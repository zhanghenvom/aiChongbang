<template>
  <div>
    <el-button size="mini" @click="open"  style="display:block">修改</el-button>
    <el-dialog title="修改" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
      <el-form :model="form">
          <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入商品名称"
            v-model="form.name"
            width="80"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="品类" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入商品品类"
            v-model="form.type"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="材质或制作方法" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入商品材质或制作方法"
            v-model="form.make"
            autocomplete="off"
            label-width="80px"
            size:mixins
          ></el-input>
        </el-form-item>
        <el-form-item label="适用规格" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入商品适用规格"
            v-model="form.applicableSpecifications" 
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="专属规格" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入商品专属规格"
            v-model="form.exclusiveSpecifications"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="包装规格" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入商品包装规格"
            v-model="form.packingSpecification"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="口味" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入商品口味"
            v-model="form.taste"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="特殊功用" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入商品特殊功用"
            v-model="form.specialFunction"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="产地" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入商品产地"
            v-model="form.placeOfOrign"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="出厂日期" :label-width="formLabelWidth">
          <div class="block">
            <span class="demonstration"></span>
            <el-date-picker
              v-model="form.dateOfProduction"
              type="date"
              align="left"
              placeholder="选择出厂日期"
              autocomplete="off"
              size="large"
              format="yyyy 年 MM 月 dd 日"
            >
            </el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="保质期" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入商品保质期"
            v-model="form.expirationDate"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="供应商编号" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入供应商编号"
            v-model="form.supplierNumber"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="特色说明" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入商品特色说明"
            type="textarea"
            :rows="3"
            v-model="form.featuresThat"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入商品价格"
            v-model="form.wholesalePrice"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="供应商ID" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入商品价格"
            v-model="form.supplierId"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="上传"
          :label-width="formLabelWidth"
        >
          <el-upload
            class="upload-demo"
            action="/ip/storeGoods/upload"
            :on-remove="handleRemove"
            :on-success="handleSuccess"
            :file-list="fileList"
            multiple
            :limit="3"
            show-file-list="true"
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
import { getStoreGoodsById, upDateStoreGoods } from "../../service/storeGoods";
import { mapActions, mapState } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      dialogFormVisible: false,
      form: {
         name: "",
        type: "",
        make: "", //材质或制作方法
        applicableSpecifications: "", //适用规格
        exclusiveSpecifications: "", //专属规格
        packingSpecification: "", //包装规格
        taste: "", //口味
        specialFunction: "", //特殊功用
        placeOfOrign: "", //产地
        dateOfProduction: "", //出厂日期
        expirationDate: "", //保质期
        supplierNumber: "", //供应商编号
        featuresThat: "", //特色说明
        wholesalePrice: "", //批发价格
        number:0,
        imgs: []
      },
      formLabelWidth: "120px"
    };
  },
  computed: {
    fileList() {
    //   console.log("this.form",this.form);
      if(this.form.imgs){
        return this.form.imgs.map(item => {
         return  { name: item, url: "/ip/" + item,response:item }
        });
      }
      return [];
    },
    ...mapState("storeGoods", ["storeGoods"])
  },
  methods: {
    ...mapActions("storeGoods", ["setStoreGoods"]),
    async open() {
      let storeGoods = await getStoreGoodsById(this.id);
      this.form = storeGoods;
      this.dialogFormVisible = true;
      // console.log("this.form",this.form)
    },
    async update() {
      await upDateStoreGoods(this.form);
      // console.log("form",this.form)
      this.setStoreGoods();
      this.dialogFormVisible = false;
    },
    handleRemove(file, fileList) {
      this.storeGoods.imgs = this.storeGoods.imgs.filter(item => item != file.response);
    },
    handleSuccess(response, file, fileList) {
      if (!this.storeGoods.imgs) {
        this.storeGoods.imgs = [];
      }
      this.storeGoods.imgs.push(response);
      // console.log("response1",response,fileList,file)
    }
  }
};
</script>

<style></style>
