<template>
   <!-- <keep-alive> -->
   <section class="score">
      <div>
         <div class="header">
            <p><span>信管测试10</span>同学/同学家长您好！ 感谢您选择新东方前途出国。我们一直致力于留学服务体验的不断提升， 您的意见对我们来说非常重要。调查问卷将严格保密，谢谢您的支持和理解！</p>
         </div>
         <el-form class="main" :model="scoreform" :rules="rules" ref="scoreform">
            <el-form-item class="one" label="1.您有多大可能向您的亲朋好友推荐新东方前途的出国留学服务？请打分！" prop="score">
               <div class="top">
                  <p class="pics"><img src="/public/images/sorce.png" alt=""></p>
               </div>
               <div class="under">
                  <el-radio-group v-model="scoreform.score">
                     <el-radio-button label="1"></el-radio-button>
                     <el-radio-button label="2"></el-radio-button>
                     <el-radio-button label="3"></el-radio-button>
                     <el-radio-button label="4"></el-radio-button>
                     <el-radio-button label="5"></el-radio-button>
                     <el-radio-button label="6"></el-radio-button>
                     <el-radio-button label="7"></el-radio-button>
                     <el-radio-button label="8"></el-radio-button>
                     <el-radio-button label="9"></el-radio-button>
                     <el-radio-button label="10"></el-radio-button>
                  </el-radio-group>
               </div>

               <div class="ltsix" v-if="Number(scoreform.score)<=6">
                  <div class="title">
                     您打(0-6分)不会推荐的原因是？<span style="color: rgb(255, 140, 0); font-family: 'microsoft yahei';">（反馈内容将严格保密，请放心填写！必填）</span>
                  </div>
                  <el-input
                        type="textarea"
                        :rows="3"
                        placeholder="请输入内容"
                        v-model="scoreform.ltsixTextarea"
                        prop="ltsixTextarea">
                  </el-input>
               </div>
            </el-form-item>
            <!-- q -->
            <!-- q -->
            <el-form-item label="2.您是根据以下哪个原因给出上题的分数？(单选)" prop="reason">
               <el-radio-group v-model="scoreform.reason.list">
                  <el-radio label="服务态度"></el-radio>
                  <el-radio label="选校申请"></el-radio>
                  <el-radio label="服务价格"></el-radio>
                  <el-radio label="专业知识"></el-radio>
                  <el-radio label="签证辅导"></el-radio>
                  <el-radio label="服务流程"></el-radio>
                  <el-radio label="沟通频次"></el-radio>
                  <el-radio label="材料准备"></el-radio>
                  <el-radio label="合作机构"></el-radio>
                  <el-radio label="工作衔接"></el-radio>
                  <el-radio label="留学规划"></el-radio>
                  <el-radio label="境外服务"></el-radio>
                  <el-radio label="人员配置"></el-radio>
                  <el-radio label="录取结果"></el-radio>
                  <el-radio label="品牌知名度"></el-radio>
                  <el-radio label="个性化指导"></el-radio>
                  <el-radio label="服务效率"></el-radio>
                  <el-radio label="背景提升"></el-radio>
                  <div class="other_input">
                     <el-radio label="其他">其他
                        <el-input type="text" v-model="scoreform.reason.other" v-if="scoreform.reason.list.includes('其他')"></el-input>
                     </el-radio>

                  </div>
               </el-radio-group>
            </el-form-item>
            <!-- q -->
            <!-- q -->
            <el-form-item label="3.您最希望新东方前途在哪些方面有所提升？(单选)" prop="future">
               <el-radio-group v-model="scoreform.future.list">
                  <el-radio label="服务态度"></el-radio>
                  <el-radio label="选校申请"></el-radio>
                  <el-radio label="服务价格"></el-radio>
                  <el-radio label="专业知识"></el-radio>
                  <el-radio label="签证辅导"></el-radio>
                  <el-radio label="服务流程"></el-radio>
                  <el-radio label="沟通频次"></el-radio>
                  <el-radio label="材料准备"></el-radio>
                  <el-radio label="合作机构"></el-radio>
                  <el-radio label="工作衔接"></el-radio>
                  <el-radio label="留学规划"></el-radio>
                  <el-radio label="境外服务"></el-radio>
                  <el-radio label="人员配置"></el-radio>
                  <el-radio label="录取结果"></el-radio>
                  <el-radio label="品牌知名度"></el-radio>
                  <el-radio label="个性化指导"></el-radio>
                  <el-radio label="服务效率"></el-radio>
                  <el-radio label="背景提升"></el-radio>
                  <div class="other_input">
                     <el-radio label="其他">其他
                        <el-input type="text" v-model="scoreform.future.other" v-if="scoreform.future.list.includes('其他')"></el-input>
                     </el-radio>

                  </div>

               </el-radio-group>
            </el-form-item>
            <!-- qq -->
            <!-- qq -->
            <el-form-item label="4.前期申请服务(请对前期老师的选校面谈、院校信息、沟通效率进行打分)" prop="earlyTime">
               <el-radio-group v-model="scoreform.earlyTime.list">
                  <el-col>
                     <el-radio label="9~10分（满意）"></el-radio>
                  </el-col>
                  <el-col>
                     <el-radio label="7~8分(一般）"></el-radio>
                  </el-col>
                  <el-col>
                     <el-radio label="0~6分（不满意）"></el-radio>
                  </el-col>
                  <div class="other_input">
                     <el-radio label="其他">其他
                        <el-input type="text" v-model="scoreform.earlyTime.other" v-if="scoreform.earlyTime.list.includes('其他')"></el-input>
                     </el-radio>
                  </div>
               </el-radio-group>
            </el-form-item>
            <!-- q -->
            <!-- q -->
            <el-form-item label="6.签约后老师联系您的次数(1-2月内)" prop="teachTime">
               <el-radio-group v-model="scoreform.teachTime.list">
                  <el-col :span="12">
                     <el-radio label="0次"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="1-2次"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="3-5次"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="6-10次"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="10次以上"></el-radio>
                  </el-col>
                  <div class="other_input">
                     <el-radio label="其他">其他
                        <el-input type="text" v-model="scoreform.teachTime.other" v-if="scoreform.teachTime.list.includes('其他')"></el-input>
                     </el-radio>

                  </div>
               </el-radio-group>
            </el-form-item>
            <!-- q -->
            <!-- q -->
            <el-form-item label="7.目前您是否进入选校阶段？" prop="stage">
               <el-radio-group v-model="scoreform.stage.list">
                  <el-col>
                     <el-radio label="是"></el-radio>
                  </el-col>
                  <el-col>
                     <el-radio label="否"></el-radio>
                  </el-col>
                  <div class="other_input">
                     <el-radio label="其他">其他
                        <el-input type="text" v-model="scoreform.stage.other" v-if="scoreform.stage.list.includes('其他')"></el-input>
                     </el-radio>

                  </div>

               </el-radio-group>
            </el-form-item>
            <!--  -->
            <!--  -->
            <p>为了方便以后更好的为您服务，需要您回答以下几个问题，再次感谢您的支持和理解！</p>
            <!--  -->
            <!--  -->
            <el-form-item label="1.您方便沟通联系的方式是？" prop="contactType">
               <el-radio-group v-model="scoreform.contactType.list">
                  <el-col :span="12">
                     <el-radio label="电话"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="面谈"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="微信"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="邮件"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="QQ"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="以上均可"></el-radio>
                  </el-col>
                  <div class="other_input">
                     <el-radio label="其他">其他
                        <el-input type="text" v-model="scoreform.contactType.other" v-if="scoreform.contactType.list.includes('其他')"></el-input>
                     </el-radio>
                  </div>
               </el-radio-group>
            </el-form-item>
            <!-- q -->
            <!-- q -->
            <!-- q -->
            <el-form-item label="2.您觉得比较理想沟通的频次" prop="communicationTime">
               <el-radio-group v-model="scoreform.communicationTime.list">
                  <el-col :span="12">
                     <el-radio label="每天/次"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="每周/次"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="半个月/次"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="每月/次"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="有问题随时联系"></el-radio>
                  </el-col>
                  <div class="other_input">
                     <el-radio label="其他">其他
                        <el-input type="text" v-model="scoreform.communicationTime.other" v-if="scoreform.communicationTime.list.includes('其他')"></el-input>
                     </el-radio>

                  </div>
               </el-radio-group>
            </el-form-item>
            <!-- q -->
            <!-- q -->
            <!-- q -->
            <el-form-item label="3.您方便联系的时间段是？" prop="contactTime">
               <el-radio-group v-model="scoreform.contactTime.list">
                  <el-col :span="12">
                     <el-radio label="工作日"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="周末"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="早上"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="中午"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="晚上"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="随时"></el-radio>
                  </el-col>
                  <div class="other_input">
                     <el-radio label="其他">其他
                        <el-input type="text" v-model="scoreform.contactTime.other" v-if="scoreform.contactTime.list.includes('其他')"></el-input>
                     </el-radio>
                  </div>
               </el-radio-group>
            </el-form-item>
            <!-- q -->
            <!-- q -->
            <el-form-item label="4.您能接受最长的回复时间是？" prop="answerTime">
               <el-radio-group v-model="scoreform.answerTime.list">
                  <el-col :span="12">
                     <el-radio label="2小时以内"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="6小时以内"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="12小时以内"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="24小时以内"></el-radio>
                  </el-col>
                  <el-col :span="12">
                     <el-radio label="48小时以内"></el-radio>
                  </el-col>
                  <div class="other_input">
                     <el-radio label="其他">其他
                        <el-input type="text" v-model="scoreform.answerTime.other" v-if="scoreform.answerTime.list.includes('其他')"></el-input>
                     </el-radio>

                  </div>
               </el-radio-group>
            </el-form-item>
            <!-- q -->
            <!-- q -->
            <!-- q -->
            <el-form-item label="5.后续留学事宜主要联系人" prop="Contacts" style="text-align: left;">
               <el-radio-group v-model="scoreform.Contacts.list">
                  <el-col>
                     <el-radio label="学生本人"></el-radio>
                  </el-col>
                  <el-col>
                     <el-radio label="家长"></el-radio>
                  </el-col>
                  <el-col>
                     <el-radio label="学生&家长"></el-radio>
                  </el-col>
                  <div class="other_input">
                     <el-radio label="其他">其他
                        <el-input type="text" v-model="scoreform.Contacts.other" v-if="scoreform.Contacts.list.includes('其他')"></el-input>
                     </el-radio>

                  </div>
               </el-radio-group>
            </el-form-item>
            <!-- q -->
            <!-- q -->
            <el-form-item>
               <div class="title">
                  6.如您对服务有其他建议，请说明具体原因，我们将竭力改进！ <span style="color: rgb(255, 140, 0); font-family: 'microsoft yahei';">(反馈内容将严格保密，请放心填写！非必填)</span>
               </div>
               <el-input
                     type="textarea"
                     :rows="3"
                     placeholder="请输入内容"
                     v-model="scoreform.textarea">
               </el-input>
            </el-form-item>


            <!-- <div class="footer"> -->
            <el-form-item>
               <el-button type="primary" @click="savescoreForm('scoreform')">保存</el-button>
               <el-button type="success" @click="submitBtn('scoreform')">提交</el-button>
               <el-button type="info" class="cancelBtn" @click="cancel()">取消</el-button>
            </el-form-item>
            <!-- </div> -->
         </el-form>
      </div>
   </section>
   <!-- </keep-alive> -->
</template>

<script>
   import {submitScore} from "../../api";

   export default {
      name: "Score",
      data() {
         return {
            scoreform: {
               score: "",
               ltsixTextarea: "", // 0-6文本域
               reason: {    // 原因
                  list: [],
                  other: ""
               },
               // reasonInput: "", // 原因其他
               future: {   // 哪方面提升
                  list: [],
                  other: ""
               },
               // futureInput: "", // 其他--提升
               earlyTime: {    // 前期申请服务
                  list: [],
                  other: ""
               },
               // earlyTimeInput: "", // 其他--前期
               teachTime: {    // 老师联系次数
                  list: [],
                  other: ""
               },
               // teachTimeInput: "", // 其他--联系次数
               stage: {    // 选校阶段
                  list: [],
                  other: ""
               },
               // stageInput: "", // 其他--选校阶段
               contactType: {  // 沟通联系方式
                  list: [],
                  other: ""
               },
               // contactTypeInput: "", // 其他--沟通联系方式
               communicationTime: {
                  list: [],
                  other: ""
               }, // 沟通频次
               // communicationTimeInput: "", // 其他--沟通频次
               contactTime: {  // 联系的时间
                  list: [],
                  other: ""
               },
               // contactTimeInput: "", // 其他--联系时间
               answerTime: {   // 回复时间
                  list: [],
                  other: ""
               },
               // answerTimeInput: "", // 其他--回复时间
               Contacts: { // 联系人
                  list: [],
                  other: ""
               },
               // ContactsInput: "", // 其他--联系人
               textarea: "",
               ltflag: false
            },
            rules: {
               score: [
                  {required: true, message: '请选择,不能为空', trigger: 'click'}
               ],
               reason: [
                  {required: true, message: '请选择,不能为空', trigger: 'click'}
               ],
               future: [
                  {required: true, message: '请选择,不能为空', trigger: 'click'}
               ],
               earlyTime: [
                  {required: true, message: '请选择,不能为空', trigger: 'click'}
               ],
               teachTime: [
                  {required: true, message: '请选择,不能为空', trigger: 'click'}
               ],
               stage: [
                  {required: true, message: '请选择,不能为空', trigger: 'click'}
               ],
               contactType: [
                  {required: true, message: '请选择,不能为空', trigger: 'click'}
               ],
               communicationTime: [
                  {required: true, message: '请选择,不能为空', trigger: 'click'}
               ],
               contactTime: [
                  {required: true, message: '请选择,不能为空', trigger: 'click'}
               ],
               answerTime: [
                  {required: true, message: '请选择,不能为空', trigger: 'click'}
               ],
               Contacts: [
                  {required: true, message: '请选择,不能为空', trigger: 'click'}
               ]
            }
         };
      },
      created() {
         // this.getSessionStorage();
      },
      mounted() {
         if (sessionStorage.getItem("scoref")) {
            let that = this;
            let obj = JSON.parse(sessionStorage.getItem("scoref"));
            that.scoreform.score = obj.score;
            that.scoreform.ltsixTextarea = obj.ltsixTextarea;
            that.scoreform.reason = obj.reason;
            that.scoreform.future = obj.future;
            that.scoreform.earlyTime = obj.earlyTime;
            that.scoreform.contactTime = obj.contactTime;
            that.scoreform.stage = obj.stage;
            that.scoreform.contactType = obj.contactType;
            that.scoreform.communicationTime = obj.communicationTime;
            that.scoreform.teachTime = obj.teachTime;
            that.scoreform.answerTime = obj.answerTime;
            that.scoreform.Contacts = obj.Contacts;
            that.scoreform.textarea = obj.textarea;
         }
      },
      methods: {
         // 点击0-6分
         // 评分<=6
         ltsix() {
            this.scoreform.ltflag = true;
         },
         // 评分>7
         gtsix() {
            this.scoreform.ltflag = false;
         },
         // 保存按钮
         savescoreForm(formName) {   // 保存到缓存   sessionStorage
            this.$refs[formName].validate((valid) => {
               if (valid) {
                  // console.log(valid);
                  this.$confirm('保存, 是否继续?', '提示', {
                     confirmButtonText: '确定',
                     cancelButtonText: '取消',
                     type: 'warning'
                  }).then(() => {
                     this.$message({
                        type: 'success',
                        message: '保存成功!'
                     });
                     sessionStorage.setItem("scoref", JSON.stringify(this.scoreform));
                  }).catch(() => {
                     this.$message({
                        type: 'info',
                        message: '已取消保存'
                     });
                  });

               } else {
                  this.$alert('请完整填写信息', '提示', {
                     confirmButtonText: '确定',
                     callback: action => {
                        this.$message({
                           type: 'warning',
                           message: '重新填写'
                        });
                     }
                  });
                  return false;
               }
            });

         },
         // 提交按钮
         submitBtn(formName) {
            this.$refs[formName].validate((valid) => {
               if (valid) {
                  // console.log(valid);
                  this.$confirm('提交数据, 是否继续?', '提示', {
                     confirmButtonText: '确定',
                     cancelButtonText: '取消',
                     type: 'warning'
                  }).then(() => {
                     this.$message({
                        type: 'success',
                        message: '提交成功!'
                     });
                  }).catch(() => {
                     this.$message({
                        type: 'info',
                        message: '已取消提交'
                     });
                  });
               } else {
                  this.$alert('请完整填写信息', '提示', {
                     confirmButtonText: '确定',
                     callback: action => {
                        this.$message({
                           type: 'warning',
                           message: '重新填写'
                        });
                     }
                  });
                  return false;
               }
            })

         },
         // 取消按钮
         cancel() {
            console.log("cancel");
         }
      },
      watch: {
         "scoreform.Contacts.other": function () {
            if (this.scoreform.Contacts.other !== "") {
               this.scoreform.Contacts.list.replace("其他", this.scoreform.Contacts.other);
            }
         },
         "scoreform.answerTime.other": function () {
            if (this.scoreform.answerTime.other !== "") {
               this.scoreform.answerTime.list.replace("其他", this.scoreform.answerTime.other);
            }
         },
         "scoreform.contactTime.other": function () {
            if (this.scoreform.contactTime.other !== "") {
               this.scoreform.contactTime.list.replace("其他", this.scoreform.contactTime.other);
            }
         },
         "scoreform.communicationTime.other": function () {
            if (this.scoreform.communicationTime.other !== "") {
               this.scoreform.communicationTime.list.replace("其他", this.scoreform.communicationTime.other);
            }
         },
         "scoreform.contactType.other": function () {
            if (this.scoreform.contactType.other !== "") {
               this.scoreform.contactType.list.replace("其他", this.scoreform.contactType.other);
            }
         },
         "scoreform.stage.other": function () {
            if (this.scoreform.stage.other !== "") {
               this.scoreform.stage.list.replace("其他", this.scoreform.stage.other);
            }
         },
         "scoreform.teachTime.other": function () {
            if (this.scoreform.teachTime.other !== "") {
               this.scoreform.teachTime.list.replace("其他", this.scoreform.teachTime.other);
            }
         },
         "scoreform.earlyTime.other": function () {
            if (this.scoreform.earlyTime.other !== "") {
               this.scoreform.earlyTime.list.replace("其他", this.scoreform.earlyTime.other);
            }
         },
         "scoreform.future.other": function () {
            if (this.scoreform.future.other !== "") {
               this.scoreform.future.list.replace("其他", this.scoreform.future.other);
            }
         },
         "scoreform.reason.other": function () {
            if (this.scoreform.reason.other !== "") {
               this.scoreform.reason.list.replace("其他", this.scoreform.reason.other);
            }
         }
      }
   };
</script>

<style lang="scss">
   @import "../../assets/styles/common.scss";
   // @import "../../assets/styles/main.scss";
   @import "../../assets/styles/message.scss";

   .score {
      width: 90%;
      height: 100%;
      padding: 5% 5% 0 5%;
      .header {
         margin: 3% 0;
         p {
            text-indent: 0.18rem;
            span {
               border-bottom: 1px solid red;
            }
         }
      }
      .el-form {
         width: 100%;
         height: 100%;
         .one {
            img {
               width: 95%;
            }
            .under {
               width: 100%;
               .scoreF {
                  width: 100%;
                  label {
                     .el-radio-button__inner {
                        width: 100%;
                        text-align: center;
                     }
                  }
               }
            }
         }
         .el-form-item {
            margin-bottom: 10px;
            .el-form-item__label {
               font-size: 12px;
               text-align: left;
               line-height: 30px;
               display: block;
               float: left;
            }
            .el-form-item__content {
               width: 100%;
               font-size: 12px;
               .el-input {
                  width: 1rem;
                  .el-input__inner {
                     width: 100%;
                     height: 0.3rem;
                     line-height: 0.3rem;
                     padding: 0 0 0 5px;
                     border-radius: 0;
                     border: 1px solid #dcdfe6;
                  }
               }
               .el-radio-group {
                  width: 100%;
                  .el-radio {
                     width: 33.33333333%;
                     margin-top: 0.1rem;
                     & + .el-radio {
                        margin-left: 0;
                     }
                  }
               }
            }
         }
      }
   }

   .score .el-form .el-form-item .el-form-item__content button {
      width: 73px;
      height: 35px;
      margin-top: 10px;
      color: #fff;
      background-color: #409eff;
      border: none;
      &:nth-child(2) {
         background: #67c23a;
      }
      &:nth-child(3) {
         background: #909399;
      }
   }

   .el-message-box__wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      .el-message-box {
         width: 80%;
         min-width: 260px;
         height: auto;
      }
   }
</style>