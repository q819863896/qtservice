<template>
   <section class="page" :style="{height:$store.state.winH+'px'}">
      <div class="pay_title">支付订单详细</div>

      <div class="pay_detail_box">
         <div class="pay_detail_list">
            <div class="pay_deputy_title">支付订单号:</div>
            <div class="pay_content">{{paymentDetail.orderCode}}</div>
         </div>

         <div class="pay_detail_list">
            <div class="pay_deputy_title">支付金额:</div>
            <div class="pay_content">{{paymentDetail.orderTranAmount}}</div>
         </div>

         <div class="pay_detail_list">
            <div class="pay_deputy_title">付款日期:</div>
            <div class="pay_content">{{paymentDetail.requestTime}}</div>
         </div>

         <div class="pay_detail_list">
            <div class="pay_deputy_title">支付描述:</div>
            <div class="pay_content">{{paymentDetail.orderRemarks}}</div>
         </div>
      </div>
   </section>
</template>

<script>
   import {paymentDetail} from "../../../api.js";
   import {systemTimeout} from "../../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../../assets/js/loading.js";

   export default {
      name: "PaymentDetail",

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            paymentDetail: []
         }
      },

      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         //获取订单详情
         getPaymentDetail(createdId) {
            let param = new URLSearchParams();
            // param.append("ddid", "MB201801049-180502145122468");
            param.append("fid", createdId);
            paymentDetail(param).then(res => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  this.paymentDetail = datas;
                  closeLoading(this) //关闭loading
               }
            })
         }
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         let createdId = this.$route.query.id;
         this.getPaymentDetail(createdId);//执行【获取订单详情】
         loading(this) //加载loading
      },

      destroyed() {
         this.getPaymentDetail = null;
      }
   }
</script>

<style lang="scss" scoped>
   .page{
      margin: 0;
      background-color: #fff;
   }

   .pay_title{
      font-size: 28px;
      line-height: 38px;
      letter-spacing: 0px;
      color: #1daa95;
      margin: 30px;
   }

   .pay_detail_box{
      width: 90%;
      height: auto;
      overflow: hidden;
      margin: 0 auto;
      box-shadow: 1px 4px 17px 4px rgba(16, 2, 58, 0.12);
      padding-top: 1px;
      .pay_detail_list{
         margin: 30px auto;
         .pay_deputy_title{
            margin: 0 10px;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0px;
            color: #24272b;
            word-break: break-all;
         }

         .pay_content{
            margin: 0 10px;
            font-size: 16px;
            line-height: 20px;
            letter-spacing: 0px;
            color: #777;
            word-break: break-all;
         }
      }
   }
</style>

<style lang="scss">
   @import "../../../assets/styles/message.scss";
</style>