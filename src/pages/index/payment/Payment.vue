<template>
   <section class="page">
      <div class="tabs_container">
         <el-tabs v-model="nowTab" @tab-click="handMenu">
            <!--<el-tab-pane :label="item.label" :name="item.name" v-for="(item,index) in menu" :key="index">没有合同信息，请联系相应顾问</el-tab-pane>-->
            <el-tab-pane label="全部合同" name="1">
               <el-card v-if="contract.contractList.length" :body-style="{ padding: '5px 20px' }" v-for="(item,index) in contract.contractList" :key="index">
                  <div slot="header">
                     <div>{{item.CONTRACTNAME}} {{item.BILLNUMBER}}</div>
                     <div><span>签约时间：{{item.SIGNDATE}}</span></div>
                     <div><span>签约金额：￥{{item.SIGNAMOUNT}}</span></div>
                     <div>签约状态：{{item.STATUS}}</div>
                  </div>
                  <div class="pay_bottom">
                     <span>可支付任意金额：</span> <span><router-link :to="'/index/payment/order?idAll='+encodeURIComponent(item.ID)">去支付</router-link></span>
                  </div>
               </el-card>

               <div class="warm_hint" v-if="!contract.contractList.length">暂无数据</div>
            </el-tab-pane>
            <!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
            <el-tab-pane label="待付款" name="2">
               <el-card v-if="contract.payOrderList.length" :body-style="{ padding: '5px 20px' }" v-for="(item,index) in contract.payOrderList" :key="index">
                  <div slot="header">
                     <div>{{item.FORDERCODE}} {{item.FORDERREMARKS}}</div>
                     <div><span>订单日期：{{item.FLASTUPDATETIME}}</span></div>
                     <div><span>订单金额：￥{{item.FORDERTRANAMOUNT}}</span></div>
                  </div>
                  <div class="pay_bottom">
                     <span>待支付：</span> <span><router-link :to="'/index/payment/order?idWait='+encodeURIComponent(item.FID)">去支付</router-link></span>
                  </div>
               </el-card>

               <div class="warm_hint" v-if="!contract.payOrderList.length">暂无数据</div>
            </el-tab-pane>
            <!-------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
            <el-tab-pane label="已付款" name="3">
               <el-card v-if="contract.fulfilPayOrderList.length" :body-style="{ padding: '5px 20px' }" v-for="(item,index) in contract.fulfilPayOrderList" :key="index">
                  <div slot="header">
                     <div>{{item.FORDERCODE}} {{item.FORDERREMARKS}}</div>
                     <div><span>付款日期：{{item.FLASTUPDATETIME}}</span></div>
                     <div><span>付款金额：￥{{item.FORDERTRANAMOUNT}}</span></div>
                  </div>
                  <div class="pay_bottom">
                     <span>已支付</span>
                     <span><router-link :to="'/index/payment/detail?id='+encodeURIComponent(item.FID)">订单详情</router-link></span>
                     <!--<span><router-link :to="'/process/compact/detail?id='+encodeURIComponent(item.FCONTRACTID)">&nbsp;查看合同详情</router-link></span>-->
                  </div>
               </el-card>

               <div class="warm_hint" v-if="!contract.fulfilPayOrderList.length">暂无数据</div>
            </el-tab-pane>
         </el-tabs>
      </div>
   </section>
</template>

<script>
   import {paymentInfo} from "../../../api.js";
   import {systemTimeout} from "../../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../../assets/js/loading.js";

   export default {
      name: "payment",

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            menu: [{
               label: "全部合同",
               name: "1",
            }, {
               label: "待付款",
               name: "2",
            }, {
               label: "已付款",
               name: "3",
            }],
            nowTab: "1",
            contract: {
               contractList: [],
               fulfilPayOrderList: [],
               payOrderList: [],
            }
         }
      },

      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         handMenu(tab, event) {
            console.log(tab, event)
         },

         //获取支付列表
         getPaymentInfo() {
            paymentInfo().then(res => {
               let {status, message, datas} = res;
               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  this.contract = datas;
                  closeLoading(this) //关闭loading
               }
            })
         },
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         this.getPaymentInfo();//获取
         loading(this) //加载loading
      },

      destroyed() {
         this.getPaymentInfo = null;
      }
   }
</script>

<style lang="scss">
   @import "../../../assets/styles/common.scss";
   @import "../../../assets/styles/message.scss";

   .tabs_container{
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
                  width: 33.33333333333333%;
                  padding: 0;
                  text-align: center;
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
         margin-bottom: 20px;
         box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.08);
      }
   }

   .pay_bottom{
      @extend .flexSBC;
      span{
         font-size: 16px;
         font-weight: normal;
         font-stretch: normal;
         letter-spacing: 0px;
         &:nth-of-type(1){
            color: #1daa95;
         }
         &:nth-of-type(2){
            width: 107px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            background-color: #1daa95;
            border-radius: 16px;
            a{
               color: #FFF;
            }
         }
      }
   }
</style>