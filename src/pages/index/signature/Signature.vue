<template>
   <section class="page">
      <div class="s_container">
         <el-tabs v-model="activeName" class="signature_tab">
            <el-tab-pane label="待签列表" name="1">
               <el-card v-for="(item,index) in signature.result" :key="index">
                  <div slot="header" class="header">
                     <b>{{item.contractName}} {{item.fnumber}}</b>
                     <div>状态：{{item.status}}</div>
                     <div class="myorder-cost">
                        <span>类别：{{item.stype}}</span>
                     </div>
                  </div>
                  <div class="s_bottom">
                     <span v-if="item.signStatus !== '1'" @click.prevent="getSelectMobile(item.contractID,'sqr',item.id,item.flag)">申请人签字</span>
                     <span v-if="item.signStatusAgent !== '1'" @click.prevent="getSelectMobile(item.contractID,'dlr',item.id,item.flag)">代理人签字</span>
                     <!--<router-link :to="'/index/signature/link?params='+encodeURIComponent(JSON.stringify({id1:item.id,id2:'sqr',id3:item.flag}))">申请人签字</router-link>-->
                     <!--<router-link :to="'/index/signature/link?params='+encodeURIComponent(JSON.stringify({id1:item.id,id2:'dlr',id3:item.flag}))">代理人签字</router-link>-->
                  </div>
               </el-card>
               <div class="warm_hint" v-if="!signature.result.length">暂无数据</div>
            </el-tab-pane>
            <!------------------------------------------------------------------------------------------------------------------------------------------------------------------------>
            <el-tab-pane label="已签列表" name="2">
               <el-card v-for="(item,index) in signature.qyresult" :key="index">
                  <div slot="header" class="header">
                     <b>{{item.contractName}} {{item.fnumber}}</b>
                     <div>状态：{{item.status}}</div>
                     <div class="myorder-cost">
                        <span>类别：{{item.stype}}</span>
                     </div>
                  </div>
                  <div class="s_bottom" @click.prevent="getContractPDF(item.id,item.flag)">
                     <!--<router-link :to="'/process/compact/pdf?id='+encodeURIComponent(item.id)+'&flag='+item.flag">点击查看完整合同电子版</router-link>-->
                     点击查看完整合同电子版
                  </div>
               </el-card>

               <div class="warm_hint" v-if="!signature.qyresult.length">暂无数据</div>
            </el-tab-pane>
         </el-tabs>
      </div>
   </section>
</template>

<script lang="ts">
   import {signature, selectMobile, contractPDF} from "../../../api";
   import {systemTimeout, sqrHint, dlrHint, pdfHint} from "../../../assets/js/variousHint";
   import {loading, closeLoading} from "../../../assets/js/loading";

   export default {
      name: "Signature",

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            activeName: "1",
            signature: {
               qyresult: [],  // 已签列表
               result: []     // 待签列表
            }
         }
      },

      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         //获取签字列表
         getSignature() {
            signature().then(res => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  // this.signature = datas;

                  let qyresult = [], result = [];
                  datas.result.forEach((item, index) => {
                     // console.log('item', item)
                     if (item.signStatus === "1" && item.signStatusAgent === "1") {
                        qyresult.push(item)
                     } else if (item.status === '审批通过' || item.status === '已收款未盖章') {
                        result.push(item)
                     } else {
                        qyresult.push(item)
                     }

                     // if ((item.signStatus === "1" && item.signStatusAgent === "1") || item.status === '审批通过' || item.status === '已收款未盖章') {
                     //     result.push(item)
                     // } else {
                     //     qyresult.push(item)
                     // }
                  });
                  this.signature.qyresult = qyresult;
                  this.signature.result = result;
                  closeLoading(this) //关闭loading
               }
            })
         },

         //获取合同手机号
         getSelectMobile(contractID, type, id, flag) {
            let params = new URLSearchParams();
            params.append("fid", contractID);
            selectMobile(params).then(res => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  // this.contractDetail = datas;
                  // CUSMOBILE 申请人, AGENTMOBILE 代理人, loginMobile 登录手机号
                  let {CUSMOBILE, AGENTMOBILE, loginMobile} = datas.contract;

                  if (type === 'sqr') {
                     if (loginMobile !== CUSMOBILE) {
                        sqrHint()
                     } else {
                        this.$router.push({path: "/index/signature/link", query: {params: encodeURIComponent(JSON.stringify({id1: id, id2: 'sqr', id3: flag}))}})
                        /*<router-link :to="'/index/signature/link?params='+encodeURIComponent(JSON.stringify({id1:item.id,id2:'sqr',id3:item.flag}))">申请人签字</router-link>*/
                     }
                  }
                  if (type === 'dlr') {
                     if (loginMobile !== AGENTMOBILE) {
                        dlrHint()
                     } else {
                        this.$router.push({path: "/index/signature/link", query: {params: encodeURIComponent(JSON.stringify({id1: id, id2: 'dlr', id3: flag}))}})
                        /*<router-link :to="'/index/signature/link?params='+encodeURIComponent(JSON.stringify({id1:item.id,id2:'dlr',id3:item.flag}))">代理人签字</router-link>*/
                     }
                  }
                  // closeLoading(this) //关闭loading
               }
            })
         },

         //获取PDF文件
         getContractPDF(contractId, flag) {
            let param = new URLSearchParams();
            // param.append("contractId", "DiEMS7OGSv694knW06jB8yOVzh4=");
            param.append("contractId", contractId);
            param.append("flag", flag);
            contractPDF(param).then(ArrayBuffer => {
               // console.log('ArrayBuffer', ArrayBuffer)
               if (ArrayBuffer.byteLength === 0) {
                  pdfHint()
               } else {
                  let blob = new Blob([ArrayBuffer], {type: "application/pdf"});
                  let pdfSrc = window.URL.createObjectURL(blob);
                  this.$router.push({path: "/process/compact/pdf", query: {pdfSrc}})
               }
            })
         }
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         loading(this) //加载loading
         this.getSignature();//执行【获取签字列表】
      },

      destroyed() {
         this.getSignature = null;
      }
   }
</script>

<style lang="scss">
   @import "../../../assets/styles/common.scss";
   @import "../../../assets/styles/message.scss";
   /*@import "../../../assets/styles/tabs.scss";*/

   .s_container{
      width: 100%;
      background-color: #fff;
      .el-tabs{
         width: 100%;
         .el-tabs__header{
            width: 100%;
            padding: 0;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1;
            background-color: #fff;
            .el-tabs__nav{
               width: 100%;
               .el-tabs__item{
                  width: 50%;
                  padding: 0;
                  text-align: center;
                  letter-spacing: 0px;
                  color: #8795a8;
                  font-size: 16px;
               }
               .el-tabs__item.is-active{
                  color: #1daa95;
               }
               .el-tabs__active-bar{
                  background-color: #1daa95;
               }
            }
            .el-tabs__nav-wrap::after{
               display: none;
            }
         }
         .el-tabs__content{
            margin-top: 38px;
         }
      }

      .el-card.is-always-shadow{
         border: none;
         border-top: 1px solid #d3dfef;
         border-radius: 0;
         margin-bottom: 20px;
         box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.08);
         .el-card__header{
            border-bottom: 1px solid #d3dfef;
            .header{
               b{
                  font-size: 16px;
               }
               div{
                  color: #363636;
                  opacity: 0.7;
               }
            }
         }
      }
   }

   .el-card__body{
      padding: 10px 20px;
      .s_bottom{
         @extend .flexCN;
         span{
            font-size: 16px;
            width: 107px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            background-color: #1daa95;
            border-radius: 16px;
            color: #FFF;
            /*a {
                color: #FFFFFF;
            }*/
            &:nth-of-type(1){
               /*color: #1daa95;*/
               margin: 0 0 0 auto;
            }
            &:nth-of-type(2){
               margin-left: 20px;
            }
         }
      }
   }

</style>