<template>
   <section class="page">
      <section class="face">
         <main class="info_item" v-if="infos[0].baseInfo">
            <mt-cell title="基本信息" @click.native="openPopup('base')">
               <i class="iconfont icon-iconfontyoujiantou-copy-copy"></i>
               <img slot="icon" src="../../assets/images/mine/jbxx.png" width="24" height="24">
            </mt-cell>

            <div class="infos_box">
               <div class="infos_detail">单据编号 {{infos[0].baseInfo.number?infos[0].baseInfo.number:'无'}}</div>
               <div class="infos_detail">业务日期 {{infos[0].baseInfo.bizDate?infos[0].baseInfo.bizDate:'无'}}</div>
               <div class="infos_detail">中文姓名 {{infos[0].baseInfo.chineseName?infos[0].baseInfo.chineseName:'无'}}</div>
               <div class="infos_detail">联系电话 {{infos[0].baseInfo.mobile?infos[0].baseInfo.mobile:'无'}}</div>
            </div>
         </main>
         <!------------------------------------------------------------------------------------------------------------------------------->
         <main class="info_item" v-if="infos[0].baseInfo">
            <mt-cell title="父母信息" @click.native="openPopup('parent')">
               <i class="iconfont icon-iconfontyoujiantou-copy-copy"></i>
               <img slot="icon" src="../../assets/images/mine/fmxx.png" width="24" height="24">
            </mt-cell>

            <div class="infos_box">
               <div class="infos_detail">父亲姓名 {{infos[0].baseInfo.fatName?infos[0].baseInfo.fatName:'无'}}</div>
               <div class="infos_detail">父亲手机号 {{infos[0].baseInfo.fatMobile?infos[0].baseInfo.fatMobile:'无'}}</div>
               <div class="infos_detail">母亲姓名 {{infos[0].baseInfo.motName?infos[0].baseInfo.motName:'无'}}</div>
               <div class="infos_detail">母亲手机号 {{infos[0].baseInfo.motMobile?infos[0].baseInfo.motMobile:'无'}}</div>
            </div>
         </main>
         <!------------------------------------------------------------------------------------------------------------------------------->
         <main class="info_item" v-if="infos[0].baseInfoEdub">
            <mt-cell title="教育背景">
               <i class="iconfont icon-iconfontyoujiantou-copy-copy"></i>
               <img slot="icon" src="../../assets/images/mine/jybj.png" width="24" height="24">
            </mt-cell>

            <div class="infos_box">
               <div class="infos_detail">学校名称 {{infos[0].baseInfo.schoolName?infos[0].baseInfo.schoolName:'无'}}</div>
               <div class="infos_detail">英文名称 {{infos[0].baseInfo.englishName?infos[0].baseInfo.englishName:'无'}}</div>
               <div class="infos_detail">就读专业 {{infos[0].baseInfo.studyProfessional?infos[0].baseInfo.studyProfessional:'无'}}</div>
               <div class="infos_detail">就读时间 {{infos[0].baseInfo.studyTime?infos[0].baseInfo.studyTime:'无'}}</div>
            </div>
         </main>
         <!------------------------------------------------------------------------------------------------------------------------------->
         <main class="info_item" v-if="infos[0].examResult">
            <mt-cell title="考试成绩">
               <i class="iconfont icon-iconfontyoujiantou-copy-copy"></i>
               <img slot="icon" src="../../assets/images/mine/kscj.png" width="24" height="24">
            </mt-cell>

            <div class="infos_box">
               <div class="infos_detail">考试类型 {{infos[0].baseInfo.testTypeID?infos[0].baseInfo.testTypeID:'无'}}</div>
               <div class="infos_detail">考试科目 {{infos[0].baseInfo.testSubjectID?infos[0].baseInfo.testSubjectID:'无'}}</div>
               <div class="infos_detail">考试分数 {{infos[0].baseInfo.testScore?infos[0].baseInfo.testScore:'无'}}</div>
               <div class="infos_detail">考试分数限制 {{infos[0].baseInfo.testLimit?infos[0].baseInfo.testLimit:'无'}}</div>
            </div>
         </main>
      </section>
      <!------------------------------------------------------------------------------------------------------------------------------->

      <mt-popup v-model="base" position="right">
         <main>
            <mt-header title="编辑基本信息">
               <i class="iconfont icon-fanhui" slot="left" @click="closePopup('base')"></i>
               <i class="iconfont icon-baocun1" slot="right" @click="saveBaseInfo('base')"></i>
            </mt-header>
            <div class="detail_box">
               <el-form ref="base" :model="infos[0].baseInfo" label-width="80px" size="mini">
                  <el-form-item label="单据编号">
                     <el-input v-model="infos[0].baseInfo.number" disabled clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="业务日期">
                     <el-col :span="24">
                        <el-date-picker type="date" placeholder="选择日期" v-model="infos[0].baseInfo.bizDate" format="yyyy-MM-dd" value-format="yyyy-MM-dd" disabled></el-date-picker>
                     </el-col>
                     <!--<el-col class="line" :span="2">-</el-col>-->
                     <!--<el-col :span="11">-->
                     <!--<el-time-picker type="fixed-time" placeholder="选择时间" v-model="infos[0].baseInfo.date2" style="width: 100%;"></el-time-picker>-->
                     <!--</el-col>-->
                  </el-form-item>
                  <el-form-item label="中文姓名">
                     <el-input v-model="infos[0].baseInfo.chineseName" disabled clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="名称拼音">
                     <el-input v-model="infos[0].baseInfo.chinaPinyin" disabled clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="身份证号">
                     <el-input v-model="infos[0].baseInfo.idcard" disabled clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="出生日期">
                     <el-col :span="24">
                        <el-date-picker type="date" placeholder="选择日期" v-model="infos[0].baseInfo.birthday" format="yyyy-MM-dd" value-format="yyyy-MM-dd" disabled></el-date-picker>
                     </el-col>
                  </el-form-item>
                  <el-form-item label="性别">
                     <el-select v-model="infos[0].baseInfo.sex==='1'?'男':'女'" placeholder="" style="width: 100%" disabled>
                        <el-option label="男" value="shanghai"></el-option>
                        <el-option label="女" value="beijing"></el-option>
                     </el-select>
                  </el-form-item>
                  <el-form-item label="出生地">
                     <el-input v-model="infos[0].baseInfo.birthPlace" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="联系邮箱">
                     <el-input v-model="infos[0].baseInfo.email" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="联系电话">
                     <el-input v-model="infos[0].baseInfo.mobile" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="邮编">
                     <el-input v-model="infos[0].baseInfo.postCode" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="地址">
                     <el-input v-model="infos[0].baseInfo.address" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>


                  <!--<el-form-item label="性别">-->
                  <!--<el-select v-model="infos[0].baseInfo.region" placeholder="请选择活动区域">-->
                  <!--<el-option label="区域一" value="shanghai"></el-option>-->
                  <!--<el-option label="区域二" value="beijing"></el-option>-->
                  <!--</el-select>-->
                  <!--</el-form-item>-->

                  <!--<el-form-item label="活动性质">-->
                  <!--<el-checkbox-group v-model="infos[0].baseInfo.type">-->
                  <!--<el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>-->
                  <!--<el-checkbox-button label="地推活动" name="type"></el-checkbox-button>-->
                  <!--<el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>-->
                  <!--</el-checkbox-group>-->
                  <!--</el-form-item>-->
                  <!--<el-form-item label="特殊资源">-->
                  <!--<el-radio-group v-model="infos[0].baseInfo.resource" size="medium">-->
                  <!--<el-radio border label="线上品牌商赞助"></el-radio>-->
                  <!--<el-radio border label="线下场地免费"></el-radio>-->
                  <!--</el-radio-group>-->
                  <!--</el-form-item>-->
                  <!--<el-form-item size="large">-->
                  <!--<el-button type="primary" @click="onSubmit">立即创建</el-button>-->
                  <!--<el-button>取消</el-button>-->
                  <!--</el-form-item>-->
               </el-form>
            </div>
         </main>
      </mt-popup>
      <!------------------------------------------------------------------------------------------------------------------------------->
      <mt-popup v-model="parent" position="right">
         <main>
            <mt-header title="编辑父母信息">
               <i class="iconfont icon-fanhui" slot="left" @click="closePopup('parent')"></i>
               <i class="iconfont icon-baocun1" slot="right" @click="saveBaseInfo('parent')"></i>
            </mt-header>
            <div class="detail_box">
               <el-form ref="parent" :model="infos[0].baseInfo" label-width="105px" size="mini">
                  <el-form-item label="父亲姓名">
                     <el-input v-model="infos[0].baseInfo.fatName" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="父亲手机号">
                     <el-input v-model="infos[0].baseInfo.fatMobile" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="父亲出生日期">
                     <el-col :span="24">
                        <el-date-picker type="date" placeholder="选择日期" v-model="infos[0].baseInfo.fatBirthday" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
                     </el-col>
                  </el-form-item>
                  <el-form-item label="父亲邮箱">
                     <el-input v-model="infos[0].baseInfo.fatEmail" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="父亲职务">
                     <el-input v-model="infos[0].baseInfo.fatPosition" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="父亲工作单位">
                     <el-input v-model="infos[0].baseInfo.fatWorkUnit" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="父亲工作地址">
                     <el-input v-model="infos[0].baseInfo.fatWorkAddr" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>

                  <el-form-item label="母亲姓名">
                     <el-input v-model="infos[0].baseInfo.motName" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="母亲手机号">
                     <el-input v-model="infos[0].baseInfo.motMobile" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="母亲出生日期">
                     <el-col :span="24">
                        <el-date-picker type="date" placeholder="选择日期" v-model="infos[0].baseInfo.motBirthday" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></el-date-picker>
                     </el-col>
                  </el-form-item>
                  <el-form-item label="母亲邮箱">
                     <el-input v-model="infos[0].baseInfo.motEmail" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="母亲职务">
                     <el-input v-model="infos[0].baseInfo.motPosition" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="母亲工作单位">
                     <el-input v-model="infos[0].baseInfo.motWorkUnit" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
                  <el-form-item label="母亲工作地址">
                     <el-input v-model="infos[0].baseInfo.motWorkAddr" clearable minlength=0 maxlength=50></el-input>
                  </el-form-item>
               </el-form>
            </div>
         </main>
      </mt-popup>
   </section>
</template>

<script>
   /**/
   import {userInfoQuery, updateBase} from "../../api.js"
   import {systemTimeout, saveSuccess} from "../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../assets/js/loading.js";

   export default {
      name: "PersonalInfo",
      data() {
         return {
            base: false,
            parent: false,
            modal: false,
            // baseInfo: {
            //    number: "JBXX-201810-19267",
            //    date: "2018-10-10",
            //    chineseName: "",
            // },
            // infos: {
            //    name: '无',
            //    region: '无',
            //    date1: '无',
            //    date2: '无',
            //    delivery: false,
            //    type: [],
            //    resource: '无',
            //    desc: '无'
            // }
            infos: [{
               baseInfo: {},
               baseInfoEdub: [{}],
               baseInfoExamResult: [{}]
            }]
         }
      },
      methods: {
         openPopup(target) {
            console.log(target);
            switch (target) {
               case 'base':
                  this.base = true;
                  break;
               case 'parent':
                  this.parent = true;
                  break;
            }
         },
         closePopup(target) {
            switch (target) {
               case 'base':
                  this.base = false;
                  break;
               case 'parent':
                  this.parent = false;
                  break;
            }
         },
         saveBaseInfo(formName) {
            loading(this) //加载loading
            this.$refs[formName].validate((valid) => {
               if (valid) {
                  updateBase(this.infos[0].baseInfo).then(res => {
                     let {status, message, datas} = res;

                     if (status !== 0) {
                        systemTimeout(status, message);
                        closeLoading(this) //关闭loading
                     } else {
                        saveSuccess();
                        setTimeout(() => {
                           this.base = false;
                        }, 2000);
                        closeLoading(this) //关闭loading
                     }
                  })
               } else {
                  console.log('error submit!!');
                  return false;
               }
            });
         },
         queryUserInfo() {
            loading(this) //加载loading
            userInfoQuery().then(res => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  this.infos = datas;
                  closeLoading(this) //关闭loading
               }
            })
         }
      },
      created() {
         this.queryUserInfo()
      }
   }
</script>

<style lang="scss">
   .page{
      /*background-color: #F5F4F4;*/
      position: relative;
   }

   .face{
      width: 100%;
      /*height: 100%;*/
      height: 100vh;
      /*padding: 10px 0;*/
      background-color: #F7F7F7;
      overflow-y: scroll;
      position: fixed;
      top: 0;
      left: 0;
   }

   /*面板列表*/
   .info_item{
      width: calc(100% - 40px);
      width: -webkit-calc(100% - 40px);
      height: auto;
      overflow: hidden;
      background-color: #fff;
      margin: 20px;
      border-radius: 10px;
      color: #444;
      .mint-cell{
         border-top-left-radius: 10px;
         border-top-right-radius: 10px;
         .mint-cell-wrapper{
            /*border-bottom: 1px solid #D3DFEF;*/
            background-position: bottom center;
            background-size: calc(100% - 20px) 1px;
            background-size: -webkit-calc(100% - 20px) 1px;
         }
      }

      .infos_box{
         margin-bottom: 10px;
         .infos_detail{
            line-height: 25px;
            padding: 0 10px;
         }
      }
   }

   /*popup*/
   .mint-popup-right{
      width: 100%;
      height: 100%;
      .mint-header{
         background-color: #fff;
         color: #444;
         .iconfont{
            color: #33C3AE;
         }
      }
      .detail_box{
         width: 100%;
         height: calc(100vh - 40px);
         overflow-y: scroll;
         .el-form{
            height: 100%;
            .el-input{
               width: calc(100% - 10px);
            }
         }
      }
   }

   /*popup - modal*/
   .v-modal{
      opacity: 1;
      background: #fff;
   }
</style>