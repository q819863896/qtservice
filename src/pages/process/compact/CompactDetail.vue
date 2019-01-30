<template>
   <section class="compact_detail_page">
      <div class="process_top_bar">
         <p style="float: left">合同信息</p>
         <p style="float: right">
            <router-link to="/process/compact/index"><i class="iconfont icon-zhuanhuan"></i><span>切换合同</span></router-link>
         </p>
      </div>
      <!----------------------------------------------------------------------------------------------------------------------------------------------------------------->
      <el-card class="compact_detail_card">
         <div slot="header" class="compact_detail_head">{{contractDetail.billInfo.CONTRACTNAME}}</div>
         <div>业务日期：{{contractDetail.billInfo.BIZDATE}}</div>
         <div>签约金额：￥{{contractDetail.billInfo.SIGNAMOUNT}}</div>
         <!--<div>截止日期：{{contractDetail.billInfo.ENDDATE}}</div>-->
         <div @click.prevent="getContractPDF">点击查看完整合同电子版</div>
         <!--<router-link :to="'/process/compact/pdf?id='+encodeURIComponent(this.contractId)+'&flag=1'">点击查看完整合同电子版</router-link>-->
      </el-card>
      <!----------------------------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="consultant">
         <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="基本信息" name="1">
               <div class="contract_title">合同编号：{{contractDetail.billInfo.BILLNUMBER}}</div>
               <div>签约公司：{{contractDetail.billInfo.COMPANYNAME}}</div>
               <div>公司地址：{{contractDetail.billInfo.COMADDRESS}}</div>
               <div>公司电话：<a :href="'tel:'+contractDetail.billInfo.COMMOBILE">{{contractDetail.billInfo.COMMOBILE}}</a></div>
               <div>签约产品：{{contractDetail.billInfo.PRODUCTTYPE}}</div>
               <div>入学年度：{{contractDetail.billInfo.SCHOOLYEAR}}</div>
               <div>入学季度：{{contractDetail.billInfo.SCHOOLSEASON}}</div>
               <div>客户电话：{{contractDetail.billInfo.CUSMOBILE}}</div>
               <div>客户地址：{{contractDetail.billInfo.CUSADDRESS}}</div>
               <div>身份证号：{{contractDetail.billInfo.CUSIDCARD}}</div>
               <div>签字日期：{{contractDetail.billInfo.SIGNDATE}}</div>
               <div>盖章日期：{{contractDetail.billInfo.SEALDATE}}</div>
               <div>首付款日期：{{contractDetail.billInfo.DOWNPAYMENTDATE}}</div>
            </el-collapse-item>
            <!------------------------------------------------------------------------------------------------------>
            <!--<el-collapse-item :title="'选校条款（当前学校：'+contractDetail.selectCount+'个）'" name="2">-->
            <el-collapse-item title="选校条款" name="2">
               <!--<div v-if="contractDetail.hasSelect" v-for="(item,index) in contractDetail.selectInfo" :key="index">
                  <div class="select_title">协议编号：{{item.BILLNUMBER}}</div>
                  <div v-for="(itemChild,indexChild) in item.schoolList" :key="indexChild" class="select_list">
                     <div>签订日期：{{itemChild.BIZDATE}}</div>
                     <div>基本选校数：{{itemChild.BASEQTY}}</div>
                     <div>当前选校数：{{itemChild.CURRENTQTY}}</div>
                     <div>变更选校数：{{itemChild.CHANGEDQTY}}</div>
                     <div>应收选校费：{{itemChild.ADDAMOUNT}}</div>
                     <div>变实收选校费：{{itemChild.ACTUALAMOUNT}}</div>
                     <div>特殊需求：{{itemChild.REMARK}}</div>
                     <div>院校中文名：{{itemChild.FSCHOOLENAME}}</div>
                     <div>院校英文名：{{itemChild.CFSCHOOLEN}}</div>
                     <div>专业名称：{{itemChild.CFSPECIALTYDETAILC}}</div>
                     <div>是否取消：{{itemChild.CFIsCancel}}</div>
                  </div>
               </div>-->

               <div v-if="contractDetail.hasSelect" v-for="(item,index) in contractDetail.selectInfo" :key="index">
                  <div class="select_title">协议编号：{{item.BILLNUMBER}}</div>
                  <div>签订日期：{{item.BIZDATE}}</div>
                  <div>基本选校数：{{item.BASEQTY}}</div>
                  <div>当前选校数：{{item.CURRENTQTY}}</div>
                  <div>变更选校数：{{item.CHANGEDQTY}}</div>
                  <div>应收选校费：{{item.ADDAMOUNT}}</div>
                  <div>变实收选校费：{{item.ACTUALAMOUNT}}</div>
                  <div>特殊需求：{{item.REMARK}}</div>
                  <div>协议状态：{{item.STATUS}}</div>
                  <div v-for="(itemChild,indexChild) in item.schoolList" :key="indexChild" class="select_list">
                     <div>院校中文名：{{itemChild.FSCHOOLENAME}}</div>
                     <div>院校英文名：{{itemChild.CFSCHOOLEN}}</div>
                     <div>专业名称：{{itemChild.CFSPECIALTYDETAILC}}</div>
                     <div>是否取消：{{item.CFISCANCEL === 1 ? "是" : "否"}}</div>
                  </div>
               </div>
               <div v-if="!contractDetail.hasSelect" class="warm_hint">暂无信息</div>
            </el-collapse-item>
            <!------------------------------------------------------------------------------------------------------>
            <el-collapse-item title="协议信息" name="3">
               <div v-if="contractDetail.preferent.length">
                  <div class="protocol_title">优惠协议</div>
                  <div v-for="(item,index) in contractDetail.preferent" :key="index" class="protocol_list">
                     <div>协议编号：{{item.FNUMBER}}</div>
                     <div>业务日期：{{item.BIZDATE}}</div>
                     <div>优惠类型：{{item.TYPE}}</div>
                     <div>增加选校数：{{item.ADDSELECTS}}</div>
                     <div>给予内容：{{item.GIVECONTENT}}</div>
                     <div>优惠价值(不减钱)：￥{{item.DISCOUNTAMONTJZ}}</div>
                     <div>优惠价值(减钱)：￥{{item.DISCOUNTAMONT}}</div>
                     <div>单据状态：{{item.STATUS}}</div>
                  </div>
               </div>
               <!----------------------------------------------------------------------->
               <div v-if="contractDetail.refunInfo.length">
                  <div class="protocol_title">退费协议</div>
                  <div v-for="(item,index) in contractDetail.refunInfo" :key="index" class="protocol_list">
                     <div>协议编号：{{item.FNUMBER}}</div>
                     <div v-if="item.ENDCONTRACT">终止合同：是</div>
                     <div v-if="item.TRANSFER">转签合同：是</div>
                     <div v-if="item.TRANSFER">转签合同编号：{{item.TRANSFERID}}</div>
                     <div>退还总金额：￥{{item.REFUNDAMT}}</div>
                     <div>退还服务费金额：￥{{item.REFUNDSERAMT}}</div>
                     <div>退多收服务费：￥{{item.REFUNDOVERAMT}}</div>
                     <div>单据状态：{{item.STATUS}}</div>
                     <div>协议说明：{{item.CONTENT}}</div>

                     <div v-if="item.RECEIVEPERSON">收款人：{{item.RECEIVEPERSON}}</div>
                     <div v-if="item.RECEIVEACCOUNT">收款账号：{{item.RECEIVEACCOUNT}}</div>
                     <div v-if="item.RECEIVETEL">收款人电话：{{item.RECEIVETEL}}</div>
                     <div v-if="item.DEPOSITBANKP">开户行省：{{item.DEPOSITBANKP}}</div>
                     <div v-if="item.DEPOSITBANKC">开户行市：{{item.DEPOSITBANKC}}</div>
                     <div v-if="item.DEPOSITBANK">开户银行：{{item.DEPOSITBANK}}</div>
                     <div v-if="item.DEPOSITBANKSUB">开户支行分行：{{item.DEPOSITBANKSUB}}</div>
                     <div v-if="item.BANKINGOFFICE">分理处：{{item.BANKINGOFFICE}}</div>
                  </div>
               </div>
               <!----------------------------------------------------------------------->
               <div v-if="contractDetail.supargeement.length">
                  <div class="protocol_title">补充协议</div>
                  <div v-for="(item,index) in contractDetail.supargeement" :key="index" class="protocol_list">
                     <div>协议编号：{{item.FNUMBER}}</div>
                     <div>增加服务金额：￥{{item.ADDACCOUNT}}</div>
                     <div>协议说明：{{item.CONTENT}}</div>
                     <div>单据状态：{{item.STATUS}}</div>
                  </div>
               </div>
               <div v-if="!(contractDetail.preferent.length||contractDetail.refunInfo.length||contractDetail.supargeement.length)" class="warm_hint">暂无信息</div>
            </el-collapse-item>
         </el-collapse>
      </div>

      <el-button @click.native.prevent="selectContract" class="select_btn">合同进程</el-button>
   </section>
</template>

<script>
   import {contractDetail, contractPDF} from "../../../api.js";
   import {systemTimeout, pdfHint} from "../../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../../assets/js/loading.js";

   export default {
      name: "CompactDetail",
      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            activeName: "1",
            contractDetail: {
               billInfo: {}, //基本信息
               selectInfo: [], //选校信息
               selectCount: "", //当前学校
               hasSelect: null, //是否有选校信息
               // otherList: []
               preferent: [], // 优惠协议
               refunInfo: [], // 退费协议
               supargeement: [] // 补充协议
            },
            contractId: ""
         };
      },
      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/

      methods: {
         //获取合同详情
         getContractDetail(contractId) {
            let param = new URLSearchParams();
            param.append("billId", contractId);
            // param.append("billId", "DiEMS7OGSv694knW06jB8yOVzh4=");
            contractDetail(param).then(res => {
               let {status, message, datas} = res;
               console.log(res);
               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  // // 数据重排
                  // let arr = [], target = [], list = [], schoolList = [];
                  //
                  // if (datas.hasSelect) {
                  //    datas.selectInfo.forEach((item) => {
                  //       arr.push(item.BILLNUMBER)  //["BJAX201803003-XX-01","BJAX201803003-XX-01","BJAX201803003-XX-02","BJAX201803003-XX-02"]
                  //    });
                  //
                  //    for (let i = 0; i < arr.length; i++) {
                  //       if (!target.includes(arr[i])) target.push(arr[i]); //["BJAX201803003-XX-01","BJAX201803003-XX-02"]
                  //    }
                  //
                  //    // for (let j = target.length - 1; j--; j = 0) {
                  //    // for (let i = datas.selectInfo.length - 1; i--; i = 0) {
                  //
                  //    for (let j = 0; j < target.length; j++) {
                  //       for (let i = 0; i < datas.selectInfo.length; i++) {
                  //          if (target[j] === datas.selectInfo[i].BILLNUMBER) {
                  //             schoolList[i] = {
                  //                BIZDATE: datas.selectInfo[i].BIZDATE,
                  //                BASEQTY: datas.selectInfo[i].BASEQTY,
                  //                CURRENTQTY: datas.selectInfo[i].CURRENTQTY,
                  //                CHANGEDQTY: datas.selectInfo[i].CHANGEDQTY,
                  //                ADDAMOUNT: datas.selectInfo[i].ADDAMOUNT,
                  //                ACTUALAMOUNT: datas.selectInfo[i].ACTUALAMOUNT,
                  //                REMARK: datas.selectInfo[i].REMARK,
                  //                FSCHOOLENAME: datas.selectInfo[i].FSCHOOLENAME,
                  //                CFSCHOOLEN: datas.selectInfo[i].CFSCHOOLEN,
                  //                CFSPECIALTYDETAILC: datas.selectInfo[i].CFSPECIALTYDETAILC,
                  //                CFIsCancel: datas.selectInfo[i].CFIsCancel === 1 ? "是" : "否",
                  //             };
                  //             list[j] = {
                  //                BILLNUMBER: target[j],
                  //                schoolList: schoolList
                  //             };
                  //             // console.log('schoolList', schoolList)
                  //             // console.log('list', list)
                  //          }
                  //       }
                  //    }
                  // }
                  // datas.selectInfo = list;
                  this.contractDetail = datas;
                  closeLoading(this); //关闭loading
               }
            });
         },
         selectContract() {
            // router.push({path: "/process/compact", query: {billId: "DiEMS7OGSv694knW06jB8yOVzh4="}})
            this.$router.push({path: "/process", query: {id: this.contractId}});
         },
         //获取PDF文件
         getContractPDF() {
            let param = new URLSearchParams();
            // param.append("contractId", "DiEMS7OGSv694knW06jB8yOVzh4=");
            param.append("contractId", this.contractId);
            param.append("flag", "1");
            contractPDF(param).then(ArrayBuffer => {
               if (ArrayBuffer.byteLength === 0) {
                  pdfHint();
               } else {
                  let blob = new Blob([ArrayBuffer], {type: "application/pdf"});
                  let pdfSrc = window.URL.createObjectURL(blob);
                  this.$router.push({
                     path: "/process/compact/pdf",
                     query: {pdfSrc}
                  });
               }
            });
         }
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         loading(this); //加载loading
         this.contractId = decodeURIComponent(this.$route.query.id); //获取路由参数
         this.getContractDetail(this.contractId); //执行【获取合同详情】
      },

      destroyed() {
         this.getContractDetail = null;
      }
   };
</script>

<style lang="scss" scoped>
   @import "../../../assets/styles/common.scss";

   .compact_detail_page{
      position: relative;
      background: transparent;
      &:after{
         content: "";
         width: 100%;
         height: 150px;
         display: inline-block;
         background-color: #1daa95;
         position: absolute;
         top: 0;
         left: 0;
         z-index: -1;
      }
   }

   .compact_detail_card{
      width: calc(100% - 20px);
      margin: 10px auto 5px;
      border: none;
      box-shadow: 3px 5px 9px 0px rgba(0, 0, 0, 0.08);
      .el-card__body{
         padding: 20px;
      }
   }

   .process_top_bar{
      margin: 0 auto;
      height: auto;
      overflow: hidden;
      color: #fff;
      &:after{
         content: "";
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
            color: #fff;
         }
         span{
            display: inline-block;
            color: #fff;
         }
      }
   }

   /*协议信息*/
   .protocol_title,
   .select_title,
   .contract_title{
      width: 100%;
      line-height: 30px;
      font-size: 14px;
      color: #1daa95;
   }

   .protocol_list,
   .select_list{
      margin-top: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #f2f2f2;
   }

   /*选择按钮*/
   .select_btn{
      width: 90%;
      margin: 10px 5% 60px;
      background-color: #1daa95;
      color: #fff;
   }
</style>

<style lang="scss">
   @import "../../../assets/styles/message.scss";

   .consultant{
      .el-collapse{
         .el-collapse-item{
            .el-collapse-item__header{
               padding-left: 20px;
               .el-collapse-item__arrow{
                  margin-right: 20px;
               }
            }
            .el-collapse-item__content{
               padding: 0 20px;
               /* div {
                          margin: 0 20px;
                       }*/
            }
         }
      }
   }
</style>