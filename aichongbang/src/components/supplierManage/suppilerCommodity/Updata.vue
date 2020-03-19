<template>
  <div style="display:inline-block">
    <el-button type="primary" @click="handleUpdata" size="small">查看</el-button>
    <el-dialog title="更新商品信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="供应商编号" :label-width="formLabelWidth">
          <el-input v-model="form.supplierNumber" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="特色说明" :label-width="formLabelWidth">
          <el-input v-model="form.featuresThat" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="批发价格" :label-width="formLabelWidth">
          <el-input v-model="form.wholesalePrice" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="特殊功用" :label-width="formLabelWidth">
          <el-input v-model="form.specialFunction" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="品类" :label-width="formLabelWidth">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option
              v-for="item in types"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="材质或制作方法" :label-width="formLabelWidth">
          <el-select v-model="form.make" placeholder="请选择">
            <el-option
              v-for="item in makes"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.type==(form.type=='猫粮'||form.type=='狗粮')"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="适用规格" :label-width="formLabelWidth">
          <el-select v-model="form.applicableSpecifications" placeholder="请选择">
            <el-option
              v-for="item in applicableSpecifications"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.type==form.type"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="专属规格" :label-width="formLabelWidth">
          <el-select v-model="form.exclusiveSpecifications" placeholder="请选择">
            <el-option
              v-for="item in exclusiveSpecifications"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.type==(form.applicableSpecifications=='幼猫'||form.applicableSpecifications=='成猫')"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="包装规格" :label-width="formLabelWidth">
          <el-select v-model="form.packingSpecification" placeholder="请选择">
            <el-option
              v-for="item in packingSpecification"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.type==(form.applicableSpecifications=='幼猫'||form.applicableSpecifications=='成猫')"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="口味" :label-width="formLabelWidth">
          <el-select v-model="form.taste" placeholder="请选择">
            <el-option
              v-for="item in taste"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.type==(form.applicableSpecifications=='幼猫'||form.applicableSpecifications=='成猫')"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产地" :label-width="formLabelWidth">
          <el-select v-model="form.placeOfOrign" placeholder="请选择">
            <el-option
              v-for="item in placeOfOrign"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.type==(form.applicableSpecifications=='幼猫'||form.applicableSpecifications=='成猫')"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出厂日期" :label-width="formLabelWidth">
          <div class="block">
            <el-date-picker v-model="form.dateOfProduction" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </el-form-item>
        <el-form-item label="保质期" :label-width="formLabelWidth">
          <el-select v-model="form.expirationDate" placeholder="请选择">
            <el-option
              v-for="item in expirationDate"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              :disabled="item.type==(form.applicableSpecifications=='幼猫'||form.applicableSpecifications=='成猫')"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上传" :label-width="formLabelWidth">
          <el-radio-group v-model="form.imgs">
            <el-upload
              class="upload-demo"
              action="/ip/supplierCommodity/public"
              :on-success="handleSuccess"
              :on-remove="handleRemove"
              list-type="picture"
              :limit="3"
              multiple
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-radio-group>
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
import { updateSupplierCommodity,getSupplierCommodity } from "@/service/supplier/supplier";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        type: "",
        make: "",
        applicableSpecifications: "",
        exclusiveSpecifications: "",
        packingSpecification: "",
        taste: "",
        specialFunction: "",
        placeOfOrign: "",
        dateOfProduction: "",
        expirationDate: "",
        supplierNumber: "",
        featuresThat: "",
        wholesalePrice: "",
        imgs: []
      },
      types: [
        {
          value: "猫粮",
          label: "猫粮"
        },
        {
          value: "狗粮",
          label: "狗粮"
        },
        {
          value: "玩具球",
          label: "玩具球"
        },
        {
          value: "其他玩具",
          label: "其他玩具"
        }
      ],
      expirationDate: [
        {
          value: "一个月",
          label: "一个月"
        },
        {
          value: "三个月",
          label: "三个月"
        },
        {
          value: "五个月",
          label: "五个月"
        },
        {
          value: "七个月",
          label: "七个月"
        },
        {
          value: "九个月",
          label: "九个月"
        },
        {
          value: "一年",
          label: "一年"
        },
        {
          value: "两年",
          label: "两年"
        }
      ],
      placeOfOrign: [
        {
          value: "中国",
          label: "中国"
        },
        {
          value: "台湾",
          label: "台湾"
        },
        {
          value: "新加坡",
          label: "新加坡"
        },
        {
          value: "美国",
          label: "美国"
        },
        {
          value: "德国",
          label: "德国"
        },
        {
          value: "",
          label: ""
        }
      ],
      packingSpecification: [
        {
          value: "1kg",
          label: "1kg"
        },
        {
          value: "2kg",
          label: "2kg"
        },
        {
          value: "5kg",
          label: "5kg"
        },
        {
          value: "10kg",
          label: "10kg"
        },
        {
          value: "",
          label: ""
        }
      ],
      taste: [
        {
          value: "鸡肉味",
          label: "鸡肉味"
        },
        {
          value: "牛肉味",
          label: "牛肉味"
        },
        {
          value: "奶味",
          label: "奶味"
        },
        {
          value: "",
          label: ""
        }
      ],
      makes: [
        {
          value: "绒毛",
          label: "绒毛",
          type: true
        },
        {
          value: "塑料",
          label: "塑料",
          type: true
        },
        {
          value: "烘培",
          label: "烘培",
          type: false
        },
        {
          value: "膨化",
          label: "膨化",
          type: false
        },
        {
          value: "",
          label: ""
        }
      ],
      applicableSpecifications: [
        {
          value: "幼犬",
          label: "幼犬",
          type: "猫粮"
        },
        {
          value: "成犬",
          label: "成犬",
          type: "猫粮"
        },
        {
          value: "幼猫",
          label: "幼猫",
          type: "狗粮"
        },
        {
          value: "成猫",
          label: "成猫",
          type: "狗粮"
        },
        {
          value: "",
          label: ""
        }
      ],
      exclusiveSpecifications: [
        {
          value: "贵宾专用",
          label: "贵宾专用",
          type: true
        },
        {
          value: "比熊专用",
          label: "比熊专用",
          type: true
        },
        {
          value: "苏格兰折耳猫专用",
          label: "苏格兰折耳猫专用",
          type: false
        },
        {
          value: "阿什拉专用",
          label: "阿什拉专用",
          type: false
        },
        {
          value: "",
          label: ""
        }
      ],
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions("supplier", [
      "setSupplierCommoditys",
    ]),
    async update() {
      let data = await updateSupplierCommodity(this.form);
      if (data) {
        alert("修改信息成功");
        this.setSupplierCommoditys();
      }
      this.dialogFormVisible = false;
    },
    handleRemove(file, fileList) {
      this.form.imgs = this.form.imgs.filter(item => item != file.response);
    },
    handleSuccess(response, file, fileList) {
      this.form.imgs.push(response);
    },
    async handleUpdata() {
      let data= await getSupplierCommodity(this.id);
      this.form = data;
      this.dialogFormVisible = true;
    }
  },
  props: ["id"]
};
</script>

<style>
</style>