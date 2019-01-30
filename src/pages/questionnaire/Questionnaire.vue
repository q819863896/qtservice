<template>
   <div class="questionnaire" ref="questionnaire">
      <el-form ref="questionForm" :rules="rules" :model="form">
         <el-form-item label="1.学员姓名？" prop="stuName">
            <el-input type="text" v-model.trim="form.stuName"></el-input>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="2.电话？" prop="stuPhone">
            <el-input type="text" v-model.trim="form.stuPhone"></el-input>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="3.社会身份？" prop="identity">
            <el-radio-group v-model="form.identity">
               <el-radio label="在校生"></el-radio>
               <el-radio label="在职人士"></el-radio>
               <!--<el-radio label="0"></el-radio>-->
               <!--<el-radio label="1">在职人士</el-radio>-->
            </el-radio-group>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="4.目前在读(或学历)？" :prop="form.identity==='在职人士'?'':'education'">
            <el-radio-group v-model="form.education" :disabled="form.identity==='在职人士'">
               <el-radio label="小学"></el-radio>
               <el-radio label="初中"></el-radio>
               <el-radio label="高中"></el-radio>
               <el-radio label="大学"></el-radio>
               <el-radio label="硕士"></el-radio>
               <el-radio label="博士"></el-radio>
            </el-radio-group>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="5.学校名称？" :prop="form.identity==='在职人士'?'':'schoolName'">
            <el-input type="text" v-model.trim="form.schoolName" :disabled="form.identity==='在职人士'"></el-input>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="6.就读年级？" :prop="form.identity==='在职人士'?'':'grade'">
            <div v-if="form.education==='小学'||form.education===''">
               <el-radio-group v-model="form.grade" :disabled="form.identity==='在职人士'">
                  <el-radio label="一年级"></el-radio>
                  <el-radio label="二年级"></el-radio>
                  <el-radio label="三年级"></el-radio>
                  <el-radio label="四年级"></el-radio>
                  <el-radio label="五年级"></el-radio>
                  <el-radio label="六年级"></el-radio>
               </el-radio-group>
            </div>
            <div v-if="form.education==='初中'">
               <el-radio-group v-model="form.grade">
                  <el-radio label="初一"></el-radio>
                  <el-radio label="初二"></el-radio>
                  <el-radio label="初三"></el-radio>
               </el-radio-group>
            </div>

            <div v-if="form.education==='高中'">
               <el-radio-group v-model="form.grade">
                  <el-radio label="高一"></el-radio>
                  <el-radio label="高二"></el-radio>
                  <el-radio label="高三"></el-radio>
               </el-radio-group>
            </div>
            <div v-if="form.education==='大学'">
               <el-radio-group v-model="form.grade">
                  <el-radio label="大一"></el-radio>
                  <el-radio label="大二"></el-radio>
                  <el-radio label="大三"></el-radio>
                  <el-radio label="大四"></el-radio>
                  <el-radio label="大五"></el-radio>
               </el-radio-group>
            </div>
            <div v-if="form.education==='硕士'">
               <el-radio-group v-model="form.grade">
                  <el-radio label="研一"></el-radio>
                  <el-radio label="研二"></el-radio>
                  <el-radio label="研三"></el-radio>
               </el-radio-group>
            </div>
            <div v-if="form.education==='博士'">
               <el-radio-group v-model="form.grade">
                  <el-radio label="博一"></el-radio>
                  <el-radio label="博二"></el-radio>
                  <el-radio label="博三"></el-radio>
               </el-radio-group>
            </div>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="7.专业名称？" prop="specialty">
            <el-input type="text" v-model.trim="form.specialty" :disabled="form.identity==='在职人士'"></el-input>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="8.学习目的/目标？" ref="eightQuestion" prop="goal.list">
            <el-checkbox-group v-model="form.goal.list">
               <el-checkbox label="兴趣爱好"></el-checkbox>
               <el-checkbox label="出国留学需要"></el-checkbox>
               <el-checkbox label="工作需要"></el-checkbox>
               <el-checkbox label="考研"></el-checkbox>
               <el-checkbox label="考博"></el-checkbox>
               <el-checkbox label="专业等级考试"></el-checkbox>
               <div class="other_input">
                  <el-checkbox label="其他"></el-checkbox>
                  <el-input type="text" v-model.trim="form.goal.other" v-if="form.goal.list.includes('其他')"></el-input>
               </div>
            </el-checkbox-group>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="9.留学申请的方式？" :prop="!form.goal.list.includes('出国留学需要')?'':'abroadWay'">
            <el-radio-group v-model="form.abroadWay" class="two_clos" :disabled="!form.goal.list.includes('出国留学需要')">
               <el-radio label="DIY办理"></el-radio>
               <el-radio label="委托留学机构办理"></el-radio>
               <el-radio label="暂未确定"></el-radio>
            </el-radio-group>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="10.是否已经确定留学机构？" :prop="!form.goal.list.includes('出国留学需要')?'':'institution'">
            <el-radio-group v-model="form.institution" :disabled="!form.goal.list.includes('出国留学需要')">
               <el-radio label="是"></el-radio>
               <el-radio label="否"></el-radio>
            </el-radio-group>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="11.是否接受专业留学顾问进行的留学规划？" prop="abroadPlan">
            <el-radio-group v-model="form.abroadPlan">
               <el-radio label="是"></el-radio>
               <el-radio label="否"></el-radio>
            </el-radio-group>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="12.是否为全程班、精英计划、直通车学员？" prop="allClass">
            <el-radio-group v-model="form.allClass">
               <el-radio label="是"></el-radio>
               <el-radio label="否"></el-radio>
            </el-radio-group>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="13.课程信息获知渠道？" prop="channel.list">
            <el-checkbox-group v-model="form.channel.list">
               <el-checkbox label="授课教师推荐"></el-checkbox>
               <el-checkbox label="单页或海报"></el-checkbox>
               <el-checkbox label="网站、网页"></el-checkbox>
               <el-checkbox label="微信公众号"></el-checkbox>
               <el-checkbox label="校园讲座及宣传"></el-checkbox>
               <el-checkbox label="微信朋友圈"></el-checkbox>
               <el-checkbox label="同学或朋友推荐"></el-checkbox>
               <div class="other_input">
                  <el-checkbox label="其他"></el-checkbox>
                  <el-input type="text" v-model="form.channel.other" v-if="form.channel.list.includes('其他')"></el-input>
               </div>
            </el-checkbox-group>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="14.选择新东方小语种的原因？" prop="reason">
            <el-checkbox-group v-model="form.reason">
               <el-checkbox label="新东方品牌"></el-checkbox>
               <el-checkbox label="师资力量强"></el-checkbox>
               <el-checkbox label="授课质量好"></el-checkbox>
               <el-checkbox label="价格低"></el-checkbox>
               <el-checkbox label="校区交通便利"></el-checkbox>
               <el-checkbox label="课程设置合理"></el-checkbox>
               <el-checkbox label="授课教材新颖"></el-checkbox>
               <el-checkbox label="培训留学一站式"></el-checkbox>
               <el-checkbox label="增值服务多"></el-checkbox>
            </el-checkbox-group>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-form-item label="15.当课程信息、班级设置有调整，或者有关于欧亚教育各类活动、产品或服务的信息，新东方可以通过电话、短信、微信联系我？" prop="notice">
            <el-radio-group v-model="form.notice">
               <el-radio label="是"></el-radio>
               <el-radio label="否"></el-radio>
            </el-radio-group>
         </el-form-item>
         <!------------------------------------------------------------------------------------------------------------>
         <el-button class="submit" type="primary" @click="onSubmit" :loading="this.submitLoading">提交</el-button>
      </el-form>
   </div>
</template>

<script>
   import {requestToken, allContentAnswer} from "../../api";
   import {systemTimeout} from "../../assets/js/variousHint";
   import {loading, closeLoading} from "../../assets/js/loading";
   import {urlParse} from "../../assets/js/urlToJson";

   export default {
      name: "Questionnaire",
      data() {
         return {
            form: {
               stuName: "",     // 学员姓名
               stuPhone: "",    // 电话
               identity: "",    // 社会身份
               education: "",   // 学历
               schoolName: "",  // 学校名称
               grade: "",       // 年级
               specialty: "",   // 专业名称
               goal: {          // 目标
                  list: [],
                  other: ""
               },
               abroadWay: "",   // 留学申请方式
               institution: "", // 留学机构
               abroadPlan: "",  // 留学计划
               allClass: "",    // 全程班
               channel: {       // 获知渠道
                  list: [],
                  other: ""
               },
               reason: [],      // 选择原因
               notice: ""       // 接收通知
            },
            rules: {
               stuName: [
                  {required: true, message: "请填写,不能为空", trigger: "blur"}
               ],
               stuPhone: [
                  {required: true, message: "请填写,不能为空", trigger: "blur"}
               ],
               identity: [
                  {required: true, message: "请选择,不能为空", trigger: "blur"}
               ],
               education: [
                  {required: true, message: "请选择,不能为空", trigger: "blur"}
               ],
               schoolName: [
                  {required: true, message: "请填写,不能为空", trigger: "blur"}
               ],
               grade: [
                  {required: true, message: "请选择,不能为空", trigger: "blur"}
               ],
               // specialty: [
               //    {required: true, message: '请选择,不能为空', trigger: 'blur'}
               // ],
               "goal.list": [
                  {
                     type: "array", required: true, message: "请至少选择一个", trigger: "change"
                  }
               ],
               abroadWay: [
                  {required: true, message: "请选择,不能为空", trigger: "blur"}
               ],
               institution: [
                  {required: true, message: "请选择,不能为空", trigger: "blur"}
               ],
               abroadPlan: [
                  {required: true, message: "请选择,不能为空", trigger: "blur"}
               ],
               allClass: [
                  {required: true, message: "请选择,不能为空", trigger: "blur"}
               ],
               "channel.list": [
                  {
                     type: "array", required: true, message: "请至少选择一个", trigger: "change"
                  }
               ],
               reason: [
                  {
                     type: "array", required: true, message: "请至少选择一个", trigger: "change"
                  }
               ],
               notice: [
                  {required: true, message: "请选择,不能为空", trigger: "blur"}
               ]
            },
            submitLoading: false,
            fid: "",
            openId: ""
         };
      },
      methods: {
         //跳转
         skipTarget() {
            let targetPostion = this.$refs.eightQuestion.$el.offsetTop,
               speed = 20,
               timer;
            timer = setInterval(function () {
               document.documentElement.scrollTop = document.body.scrollTop = speed;
               speed += 20;
               if (speed >= targetPostion) {
                  speed === targetPostion;
                  clearInterval(timer);
               }
            }, 30);
         },
         onSubmit() {
            // console.log('this.fid', this.fid)
            this.$refs.questionForm.validate(valid => {
               if (valid) {
                  // let tokenParams = {
                  //    grant_type: "client_credentials",
                  //    scope: "read",
                  //    client_id: "1001",
                  //    client_secret: "haiwei10012018"
                  // };
                  // let tokenSingle = sessionStorage.getItem("tokenSingle");
                  // if (!tokenSingle) {
                  //    requestToken(tokenParams).then(res => {
                  //       let token = res.value;
                  //       sessionStorage.setItem("tokenSingle", token);
                  //    });
                  // }

                  this.submitLoading = true;
                  // this.teaList.forEach((item, index) => {
                  //    this.teaIdsTemporary.push(item.teac_id);
                  //    this.teaquestionnairesTemporary.push(item.tea_questionnaire);
                  //    this.teaIdsTempStr = this.teaIdsTemporary.join(',');
                  //    this.teaquestionnairesTempStr = this.teaquestionnairesTemporary.join(',');
                  //    this.form.teaIds = this.teaIdsTempStr;
                  //    this.form.teaquestionnaires = this.teaquestionnairesTempStr;
                  // });
                  if (this.form.goal.other !== "") {
                     let goal = this.form.goal;
                     for (let i = 0; i < goal.list.length; i++) {
                        if (goal.list[i] === "其他") {
                           goal.list.splice(i, 1, goal.other);
                        }
                     }
                     // console.log(this.form.goal);
                  }

                  if (this.form.channel.other !== "") {
                     let channel = this.form.channel;
                     for (let i = 0; i < channel.list.length; i++) {
                        if (channel.list[i] === "其他") {
                           channel.list.splice(i, 1, channel.other);
                        }
                     }
                     // console.log(this.form.channel);
                  }

                  let arr = [
                     {
                        questionNum: 1,
                        question: "1.学员姓名？",
                        result: this.form.stuName,
                        fid: decodeURIComponent(this.fid)
                     },
                     {
                        questionNum: 2,
                        question: "2.电话？",
                        result: this.form.stuPhone
                     },
                     {
                        questionNum: 3,
                        question: "3.社会身份？",
                        result: this.form.identity
                     },
                     {
                        questionNum: 4,
                        question: "4.目前在读(或学历)？",
                        result: this.form.education
                     },
                     {
                        questionNum: 5,
                        question: "5.学校名称？",
                        result: this.form.schoolName
                     },
                     {
                        questionNum: 6,
                        question: "6.就读年级？",
                        result: this.form.grade
                     },
                     {
                        questionNum: 7,
                        question: "7.专业名称？",
                        result: this.form.specialty
                     },
                     {
                        questionNum: 8,
                        question: "8.学习目的/目标？",
                        result: this.form.goal.list.join(",")
                     },
                     {
                        questionNum: 9,
                        question: "9.留学申请的方式？",
                        result: this.form.abroadWay
                     },
                     {
                        questionNum: 10,
                        question: "10.是否已经确定留学机构？",
                        result: this.form.institution
                     },
                     {
                        questionNum: 11,
                        question: "11.是否接受专业留学顾问进行的留学规划？",
                        result: this.form.abroadPlan
                     },
                     {
                        questionNum: 12,
                        question: "12.是否为全程班、精英计划、直通车学员？",
                        result: this.form.allClass
                     },
                     {
                        questionNum: 13,
                        question: "13.课程信息获知渠道？",
                        result: this.form.channel.list.join(",")
                     },
                     {
                        questionNum: 14,
                        question: "14.选择新东方小语种的原因？",
                        result: this.form.reason.join(",")
                     },
                     {
                        questionNum: 15,
                        question: "15.当课程信息、班级设置有调整，或者有关于欧亚教育各类活动、产品或服务的信息，新东方可以通过电话、短信、微信联系我？",
                        result: this.form.notice
                     }
                  ];
                  // if (this.form.identity === "在职人士") {
                  //    arr.splice(3, 4);
                  //    if (!this.form.goal.list.includes("出国留学需要")) arr.splice(4, 2);
                  // } else {
                  //    if (!this.form.goal.list.includes("出国留学需要")) arr.splice(8, 2);
                  // }
                  // 20181010 modify

                  // if (!this.form.identity === "在职人士" && !this.form.goal.list.includes('出国留学需要')) {
                  //    arr.splice(8, 2)
                  // }
                  // if (this.form.identity === "在职人士" && !this.form.goal.list.includes('出国留学需要')) {
                  //    arr.splice(3, 2)
                  // }
                  //   let params = {
                  //      classNumber: "123456",
                  //      questionnaireAll: JSON.stringify(arr)
                  //   };
                  // console.log('arr', arr)
                  allContentAnswer(arr).then(res => {
                     this.editLoading = false;
                     let {message, status} = res;
                     if (status !== 0) {
                        this.$message({message: message, type: "error"});
                        this.submitLoading = false;
                     } else {
                        this.$router.push({path: "/answersuccess", query: {openId: this.openId, fid: this.fid}});
                     }
                  });
               } else {
                  console.error("error submit!");
                  return false;
               }
               setTimeout(() => {
                  this.submitLoading = false;
               }, 5000);
            });
         }
         // getTeaList() {
         //    let param = new URLSearchParams();
         //    param.append("questionnaireUUID", this.form.questionnaireUUID);
         //    //NProgress.start();
         //    getTeaList(param).then((res) => {
         //       let {message, status, datas} = res;
         //       if (status !== 0) {
         //          this.$message({
         //             message: message,
         //             type: 'error'
         //          });
         //       } else {
         //          this.teaList = datas;
         //          console.log({'this.teaList': this.teaList})
         //       }
         //       //NProgress.done();
         //    });
         // },
         // isExists() {
         //    let param = new URLSearchParams();
         //    param.append("questionnaireUUID", this.form.questionnaireUUID);
         //    //NProgress.start();
         //    isExists(param).then((res) => {
         //       let {message, status, datas} = res;
         //       if (status !== 0) {
         //          router.push({path: '/questionnaire/success'});
         //       } else {
         //          if (datas.delFlag !== 0) {
         //             router.push({path: '/questionnaire/success'});
         //          } else {
         //             this.form.questionnaireId = datas.questionnaireId;
         //          }
         //       }
         //    });
         // }
      },
      mounted() {
         // this.form.questionnaireUUID = this.$route.query.billId;
         // this.isExists();
         // this.getTeaList();

         let urlParams = urlParse(window.location.href);
         this.fid = urlParams.fid;
         this.openId = urlParams.openId;
      },
      watch: {
         "form.identity": function () {
            if (this.form.identity === "在职人士") {
               this.skipTarget();
            }
         }
      }
   };
</script>

<style lang="scss">
   .questionnaire{
      min-width: calc(320px - 30px);
      max-width: calc(640px - 30px);
      margin: 0 auto;
      padding: 20px 15px 10px;
      -webkit-box-shadow: 0 0 40px 6px #cac6c6;
      box-shadow: 0 0 40px 6px #cac6c6;
      .el-form{
         .el-form-item{
            /*margin-bottom: 20px;*/
            margin-bottom: 10px;
            border: 1px solid #eee;
            padding: 10px 15px 20px;
            .el-form-item__label{
               float: none;
               display: block;
               text-align: left;
               font-size: 16px;
               margin: 0 0 10px;
               line-height: 20px;
               &::before{
                  color: #606266;
               }
            }
            .el-form-item__content{
               width: 100%;
               /*height: 30px;*/
               line-height: 24px;
               font-size: 12px;
               .el-input{
                  width: 100%;
                  .el-input__inner{
                     width: 100%;
                     height: 24px;
                     line-height: 24px;
                     padding: 0 0 0 5px;
                     border-radius: 0;
                     border: 1px solid #dcdfe6;
                  }
               }
               .el-radio-group{
                  width: 100%;
                  .el-radio{
                     width: 33.33333333%;
                     & + .el-radio{
                        margin-left: 0;
                     }
                     .el-radio__label{
                        font-size: 14px;
                        line-height: 20px;
                     }
                  }
               }
               .two_clos{
                  width: 100%;
                  .el-radio{
                     width: 50%;
                     & + .el-radio{
                        margin-left: 0;
                     }
                  }
                  .other_input{
                     display: flex;
                     display: -webkit-box;
                     display: -webkit-flex;
                     .el-radio{
                        width: auto;
                        margin-right: 10px;
                     }
                     .el-input{
                        width: calc(100% - 10px);
                     }
                  }
               }
               .el-checkbox-group{
                  width: 100%;
                  .el-checkbox{
                     width: 50%;
                     & + .el-checkbox{
                        margin-left: 0;
                     }
                     .el-checkbox__label{
                        font-size: 14px;
                        line-height: 20px;
                        .el-input{
                           .el-input__inner{
                              height: 20px;
                              line-height: 20px;
                           }
                        }
                     }
                  }
                  .other_input{
                     display: flex;
                     display: -webkit-box;
                     display: -webkit-flex;
                     .el-checkbox{
                        width: auto;
                        margin-right: 10px;
                     }
                     .el-input{
                        width: calc(100% - 10px);
                     }
                  }
               }
            }
         }
      }
      p{
         width: 100%;
         line-height: 25px;
         margin: 40px auto 50px;
         text-indent: 2em;
         font-size: 14px;
         color: #333;
      }
      .submit{
         width: 100%;
         text-align: center;
         margin: 20px auto;
         /*background-color: #1daa95;*/
         /*color: #ffffff;*/
      }
   }
</style>