<template>
   <section class="page">
      <div class="process_top_bar">
         <p style="float: left">合同信息</p>
         <p style="float: right">
            <router-link :to="'/process/compact/index?id='+encodeURIComponent(0)"><i class="iconfont icon-zhuanhuan"></i><span>切换合同</span></router-link>
         </p>
      </div>

      <el-row v-if="showPlate">
         <!--<el-col :span="24" v-for="(item,index) in card">
            <el-card>
               <div slot="header" class="clearfix">
                  {{item.title}}
               </div>
               <div class="text item">{{item.value}}</div>
               <div class="text item">￥{{item.key}}</div>
               <div class="text item">{{item.isServer?'服务中':'停止服务'}}</div>
               <div class="text item">截止日期：{{item.endDate}}</div>
            </el-card>
         </el-col>-->
         <el-col :span="24">
            <el-card class="box_card">
               <div class="title">{{contractInfo.CONTRACTNAME}}&nbsp;&nbsp;{{contractInfo.BILLNUMBER}}</div>
               <div class="item">基本服务费：￥{{contractInfo.SIGNAMOUNT}}</div>
               <div class="item">合同状态：{{contractInfo.STATUS}}</div>
               <div class="item">截止日期：{{contractInfo.BIZDATE}}</div>
               <i class="iconfont icon-xiangxia"></i>
            </el-card>
         </el-col>
      </el-row>

      <div class="process_bot_bar" v-if="showPlate && processNoData">暂无数据</div>
      <div class="process_bot_bar" v-if="!showPlate">{{hidePlateHint}}</div>

      <!--20181009删除转案-->
      <!--<div class="process_infos" v-if="process.tranCase.length">
         <div class="process_info_title">转案</div>
         <div v-for="(item,index) in process.tranCase" :key="index" class="process_list" @click.prevent="pullDown($event)">
            <div class="process_info_mid" v-if="item.QQEARLY">前期顾问：{{item.QQEARLY}}</div>
            <div class="process_info_mid" v-if="item.ZHONGQIEARLY">中期顾问：{{item.ZHONGQIEARLY}}</div>
            <div class="process_info_mid" v-if="item.HOUQIEARLY">后期顾问：{{item.HOUQIEARLY}}</div>
            <div class="process_info_mid" v-if="item.WENANEARLY">文案顾问：{{item.WENANEARLY}}</div>
            <div class="process_info_end">转案日期：{{item.CFTRANSCASEDATE}}</div>
         </div>
      </div>-->

      <!-- <div class="process_infos" v-if="process.documentNN.length>0">
          <span class="process_info_title">文书</span>
          <div v-for="(item,index) in process.documentNN" :key="index" class="process_list">
             <div class="process_info_mid">单据编号：{{item.DOCUMENTNNNUMBER}}</div>
             <div class="process_info_mid">业务日期：{{item.FBIZDATE}}</div>
             <div class="process_info_mid">合同：{{item.MAINCONTRACTNUMBER}}</div>
             <div class="process_info_mid">公司：{{item.COMPANYNAME}}</div>
             <div class="process_info_mid">部门：{{item.ADMINNAME}}</div>
             <div class="process_info_mid">学生姓名：{{item.CFSTUDENTNAME}}</div>
             <div class="process_info_mid">状态：{{item.STATUS}}</div>
             <div class="process_info_end">
                <div>下载附件：</div>
                <div class="process_info_end_list" v-for="(itemChild,indexChild) in item.attach " :key="indexChild" @click="downAttachFile(itemChild.FID,itemChild.FSIMPLENAME,itemChild.TYPE)">
                   <div style="font-style: italic">{{itemChild.TYPE}}.{{itemChild.FSIMPLENAME}}</div>
                </div>
             </div>
          </div>
       </div>-->

      <div class="process_infos" v-if="process.selectSchool.length>0">
         <span class="process_info_title">选校</span>
         <div v-for="(item,index) in process.selectSchool" :key="index" class="process_list" @click.prevent="pullDown($event)">
            <div class="process_info_mid">单据编号：{{item.DOCUMENTNNNUMBER}}</div>
            <div class="process_info_mid">业务日期：{{item.FBIZDATE}}</div>
            <div class="process_info_mid">合同：{{item.MAINCONTRACTNUMBER}}</div>
            <div class="process_info_mid">公司：{{item.COMPANYNAME}}</div>
            <div class="process_info_mid">部门：{{item.ADMINNAME}}</div>
            <div class="process_info_mid">学生姓名：{{item.CFSTUDENTNAME}}</div>
            <div class="process_info_end">状态：{{item.STATUS}}</div>
         </div>
      </div>

      <div class="process_infos" v-if="process.collegeApplicationNN.length>0">
         <span class="process_info_title">院校申请</span>
         <div v-for="(item,index) in process.collegeApplicationNN" :key="index" class="process_list" @click.prevent="pullDown($event)">
            <div class="process_info_mid">学校中文名：{{item.CFSCHOOLCH}}</div>
            <div class="process_info_mid">学校英文名：{{item.CFSCHOOLEN}}</div>
            <div class="process_info_mid">申请时间：{{item.CFSUBMISSIONDATE}}</div>
            <div class="process_info_end">申请状态：{{item.STATUS}}</div>
         </div>
      </div>

      <div class="process_infos" v-if="process.admissionsResults.length>0">
         <span class="process_info_title">录取结果</span>
         <div v-for="(item,index) in process.admissionsResults" :key="index" class="process_list" @click.prevent="pullDown($event)">
            <div class="process_info_mid">学生姓名：{{item.CFSTUDETNAME}}</div>
            <div class="process_info_mid">公司：{{item.COMPANYNAME}}</div>
            <div class="process_info_mid">学校中文名：{{item.SCHOOLCH}}</div>
            <div class="process_info_mid">学校英文名：{{item.CFSCHOOLEN}}</div>
            <div class="process_info_mid">申请专业：{{item.ZHUANYE}}</div>
            <div class="process_info_mid">申请时间：{{item.CFRESULTSDATE}}</div>
            <div class="process_info_mid">录取状态：{{item.ADMISSIONSTATUS}}</div>
            <!--<div class="process_info_mid">录取状态：{{item.STATUS}}</div>-->  <!--20181010 modify-->
            <div class="process_info_end" v-if="item.admissionsResultsAtta">
               <div>下载附件：</div>
               <div class="process_info_end_list" v-for="(itemChild,indexChild) in item.admissionsResultsAtta " :key="indexChild">
                  <el-input type="text" v-model="downUrl" :ref="'urlInput'+itemChild.FID" style="width:1px;opacity: 0;position:absolute"></el-input>
                  <div style="font-style: italic" @click.prevent="downAttachFile(itemChild.FID,itemChild.NAME,itemChild.FSIMPLENAME)">{{itemChild.NAME}}.{{itemChild.FSIMPLENAME}}</div>
               </div>
            </div>
         </div>
      </div>

      <div class="process_infos" v-if="process.visaResultNN.length>0">
         <span class="process_info_title">签证</span>
         <div v-for="(item,index) in process.visaResultNN" :key="index" class="process_list" @click.prevent="pullDown($event)">
            <div class="process_info_mid">学生姓名：{{item.CFSTUDENTNAME}}</div>
            <div class="process_info_mid">公司：{{item.COMPANYNAME}}</div>
            <div class="process_info_mid">入读国家：{{item.COUNTRY}}</div>
            <div class="process_info_mid">入读学校：{{item.SCHOOLNAME}}</div>
            <div class="process_info_mid">申请专业：{{item.ZHUANYE}}</div>
            <div class="process_info_mid">递交时间：{{item.CFSUMMITDATE}}</div>
            <div class="process_info_mid">签证状态：{{item.STATUS}}</div>
            <div class="process_info_end" v-if="item.visaResultNNAtta">
               <div>下载附件：</div>
               <div class="process_info_end_list" v-for="(itemChild,indexChild) in item.visaResultNNAtta" :key="indexChild">
                  <input type="text" v-model="downUrl" :ref="'urlInput'+itemChild.FID" style="width:1px;opacity: 0;position:absolute"/>
                  <div style="font-style: italic" @click.prevent="downAttachFile(itemChild.FID,itemChild.NAME,itemChild.FSIMPLENAME)">{{itemChild.NAME}}.{{itemChild.FSIMPLENAME}}</div>
               </div>
            </div>
         </div>
      </div>
      <!--<img src="/images/ewm.png" download="xiazai"/>-->
      <QR ref="QR" :emitQRVisible="QRVisible" :emitQRSrc="QRSrc" :emitQRName="QRName" @acceptQRDirective="QRDirective"></QR>
   </section>
</template>

<script>
   import {processInfos, creatQRCode} from "../../api.js"
   import {systemTimeout, copyDownUrl} from "../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../assets/js/loading.js";
   import QR from "./AttachScanner.vue";

   export default {
      name: "Process",

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            contractInfo: {}, //合同信息
            process: {
               // tranCase: [],              // 转案
               // documentNN: [],            // 文书
               selectSchool: [],          // 选校
               collegeApplicationNN: [],  // 院校申请
               admissionsResults: [],     // 录取结果
               visaResultNN: [],          // 签证
            },
            processNoData: true,          // 进程无信息
            downUrl: "",                  // 下载链接
            QRVisible: false,             // 二维码弹框
            QRSrc: "",                    // 二维码src
            QRName: "",                   // 附件名称
            showPlate: true,              // status===2 隐藏
            hidePlateHint: "",            // 隐藏面板提示信息
         }
      },
      components: {
         QR
      },


      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         //进程列表
         getProcessInfos(contractId) {
            let param = new URLSearchParams();
            // param.append("billId", contractId);
            if (contractId !== undefined) param.append("contractid", decodeURIComponent(contractId));
            processInfos(param).then(res => {
               let {status, message, datas} = res;

               if (status === 2) {
                  this.hidePlateHint = message;
                  this.showPlate = false;
                  closeLoading(this); //关闭loading
               } else if (status === 0) {
                  this.contractInfo = datas.contractInfo;
                  this.process = datas.process;

                  if ((datas.process.admissionsResults.length || datas.process.collegeApplicationNN.length || datas.process.selectSchool.length || datas.process.visaResultNN.length) > 0) {
                     this.processNoData = false
                  }
                  closeLoading(this) //关闭loading
               } else {
                  systemTimeout(status, message);
                  closeLoading(this); //关闭loading
               }

               // if (status !== 0) {
               //    systemTimeout(status, message);
               //    closeLoading(this); //关闭loading
               //    this.showPlate = false;
               // } else if (status === 0) {
               //    this.contractInfo = datas.contractInfo;
               //    this.process = datas.process;
               //
               //    if ((datas.process.admissionsResults.length || datas.process.collegeApplicationNN.length || datas.process.selectSchool.length || datas.process.visaResultNN.length) > 0) {
               //       this.processNoData = false
               //    }
               //    closeLoading(this) //关闭loading
               // }
            })
         },

         downAttachFile(id, name, type) {
            // console.log(id, name, type);

            // let disUrl = window.location.host;
            // this.downUrl = `${disUrl}/#/attach/down?id=${id}&name=${name}&type=${type}`;
            // let urlInput = 'urlInput' + id;
            // this.$refs[urlInput][0].select();
            // document.execCommand("Copy");
            // copyDownUrl() //提示成功

            let param = new URLSearchParams();
            // param.append("attaId", "P24AAAASuIj0r08D");
            // param.append("attaId", "P24AAAAWVs30r08D");
            param.append("attaId", id);
            creatQRCode(param).then(res => {
               console.log("res", res);
               this.QRSrc = window.URL.createObjectURL(new Blob([res], {type: "image/png"}));
               // this.QRSrc = url;
               this.QRVisible = true;
               this.QRName = name;
               // let link = document.createElement('a');
               // link.href = url;
               // // window.location = url;
               // // link.setAttribute('download', name);
               // link.setAttribute('download', name + '.' + type);
               // document.body.appendChild(link);
               // link.click()
            })
         },

         //接收关闭QR弹框指令
         QRDirective(directive) {
            this.QRVisible = directive;
         },

         //下拉改变样式
         pullDown(e) {
            // console.log(e.target.parentNode.classList.contains('active'))
            if (e.target.classList.contains("process_list")) {
               if (!e.target.classList.contains('active')) {
                  e.target.classList.add("active");
               } else {
                  e.target.classList.remove("active");
               }
            } else {
               if (!e.target.parentNode.classList.contains('active')) {
                  e.target.parentNode.classList.add("active");
               } else {
                  e.target.parentNode.classList.remove("active");
               }
            }
         }
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         loading(this) //加载loading
         this.contractId = this.$route.query.id;
         this.getProcessInfos(this.$route.query.id);//执行【进程列表】
      },
      destroyed() {
         this.getProcessInfos = null;
      }
   }
</script>

<style lang="scss" scoped>
   @import "../../assets/styles/common.scss";

   .process_top_bar{
      margin: 0 auto;
      height: auto;
      overflow: hidden;
      background-color: #fff;
      &:after{
         content: '';
         width: 0;
         height: 0;
         display: inline-block;
         opacity: 0;
         clear: both;
      }
      p{
         height: 30px;
         line-height: 30px;
         margin: 0 10px;
         i{
            display: inline-block;
            vertical-align: middle;
         }
         span{
            display: inline-block;
         }
      }
   }

   .process_bot_bar{
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
   }

   /*卡片信息*/
   .box_card{
      border: none;
      border-top: 1px solid #d3dfef;
      box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.08);
      position: relative;
      .icon-xiangxia{
         position: absolute;
         top: 50%;
         right: 10px;
         color: #1daa95;
      }
      &::before{
         content: "";
         width: 5px;
         height: 100%;
         display: block;
         background-color: #33c3ae;
         position: absolute;
         left: 0;
         top: 0;
      }
      .title{
         font-size: 16px;
         font-weight: normal;
         font-stretch: normal;
         letter-spacing: 0px;
         color: #1daa95;
      }
      .icon-icon1{
         position: absolute;
         top: 50%;
         right: 10px;
      }
      .item{
         line-height: 20px;
         font-size: 14px;
         font-weight: normal;
         font-stretch: normal;
         letter-spacing: 0px;
         color: #363636;
         opacity: 0.7;
      }
   }

   /*进程信息*/
   .process_infos{
      width: 72%;
      padding: 5px 14%;
      margin: 0 auto 10px;
      background-color: #fff;
      /*position: relative;*/
      .process_list{
         /*margin-bottom: 10px;*/
         position: relative;
         /*border-bottom: 1px solid #e8eef6;*/
         height: 20px;
         overflow: hidden;
         &.active{
            height: auto;
            overflow: unset;
            margin-bottom: 10px;
            &::after{
               opacity: 0;
            }
         }
         &:nth-of-type(1){
            margin-top: 0;
         }
         &::before{
            content: "";
            width: 1px;
            height: 80%;
            display: block;
            position: absolute;
            top: 10%;
            left: -20px;
            border-left: 1px dashed #37cbb9;
         }
         &::after{
            content: "...";
            width: auto;
            height: 20px;
            line-height: 20px;
            font-weight: bold;
            background-color: #fff;
            text-indent: 8px;
            display: block;
            position: absolute;
            top: 0;
            right: 0;
         }
      }

      .process_info_title, .process_info_end{
         font-size: 14px;
         font-weight: normal;
         font-stretch: normal;
         letter-spacing: 0px;
         color: #1daa95;
         position: relative;
         &::after{
            content: "";
            width: 11px;
            height: 11px;
            border-radius: 100%;
            background-color: #1daa95;
            display: block;
            position: absolute;
            top: 5px;
            left: -25px;
            z-index: 1;
         }
         &::before{
            content: "";
            width: 15px;
            height: 15px;
            background-color: #1daa95;
            opacity: 0.2;
            border-radius: 100%;
            display: block;
            position: absolute;
            top: 3px;
            left: -27px;
            z-index: 1;
         }
      }

      .process_info_end{
         color: #000;
         /*.process_info_end_list {*/
         /*text-indent: 2em;*/
         /*}*/
      }

      .process_info_mid, .process_info_status{
         font-size: 14px;
         font-weight: normal;
         font-stretch: normal;
         letter-spacing: 0px;
         color: #373f4a;
         /*height: 20px;*/
         line-height: 20px;
         position: relative;
         &::after{
            content: "";
            width: 7px;
            height: 7px;
            border-radius: 100%;
            background-color: #1daa95;
            display: block;
            position: absolute;
            top: 6px;
            left: -23px;
            z-index: 1;
         }
      }
   }
</style>

<style lang="scss">
   @import "../../assets/styles/message.scss";
</style>