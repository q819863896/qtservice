<template>
   <section class="page">
      <div class="payOrder">
         <div class="pay_title">支付订单详细</div>
         <div class="pay_list">
            <div class="pay_deputy_title">支付订单号:</div>
            <div class="pay_content">{{paymentDetail.orderCode}}</div>
         </div>

         <div class="pay_list">
            <div class="pay_deputy_title">支付金额:</div>
            <div class="pay_content">￥{{paymentDetail.orderTranAmount}}</div>
         </div>

         <div class="pay_list">
            <div class="pay_deputy_title">付款日期:</div>
            <div class="pay_content">{{paymentDetail.requestTime}}</div>
         </div>

         <div class="pay_list">
            <div class="pay_deputy_title">支付描述:</div>
            <div class="pay_content">{{paymentDetail.orderRemarks}}</div>
         </div>

         <div class="navigatorTo">
            <router-link to="/index/payment">
               <el-button>返回付款列表</el-button>
            </router-link>
         </div>
      </div>
   </section>
</template>

<script>
   import {backPaymentInfo} from "../../../api.js";
   import {systemTimeout} from "../../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../../assets/js/loading.js";
   import {urlParse} from "../../../assets/js/urlToJson";

   export default {
      name: "PaymentDetail",

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            paymentDetail: {}
         }
      },

      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         // toBackPaymentInfo(params) {
         //    params.orderRemarks = decodeURIComponent(params.orderRemarks);
         //    backPaymentInfo(params).then(res => {
         //       let {status, message, datas} = res;
         //
         //       if (status !== 0) {
         //          systemTimeout(status, message);
         //       } else {
         //          this.paymentDetail = datas;
         //          closeLoading(this) //关闭loading
         //       }
         //    })
         // }
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         // loading(this) //加载loading

         /* let url = window.location.href;
          let target = url.indexOf("?");
          let payUrl = url.substring(0, target);
          let payParams = url.substring(target + 1, url.length);

          // let payParams = window.location.search;

          function urlToJson(str) {
             let arr = [], json = {};
             arr = str.split('&');

             for (var i = 0; i < arr.length; i++) {
                json[arr[i].split('=')[0]] = arr[i].split('=')[1];
             }
             return json;
          }*/

         // let urlParams = urlToJson(payParams);

         let urlParams = urlParse(window.location.href);
         // this.toBackPaymentInfo(urlParams);
         urlParams.orderRemarks = decodeURIComponent(urlParams.orderRemarks);
         this.paymentDetail = urlParams;
      },

      destroyed() {
         // this.toBackPaymentInfo = null;
      }
   }
</script>

<style lang="scss" scoped>
   .payOrder {
      width: 90%;
      margin: 20px auto;
      .pay_list {
         margin: 0 auto;
         padding: 20px 0;
         .el-form-item__label {
            float: none;
            line-height: 20px;
            font-size: 16px;
            letter-spacing: 0px;
            color: #24272b;
            margin-top: 10px;
            &::before {
               content: "";
            }
         }
         .el-form-item__content {
            line-height: 20px;
            .el-input {
               .el-input__inner {
                  border: none;
                  padding: 0;
                  height: 20px;
                  line-height: 20px;
                  font-size: 16px;
                  letter-spacing: 0px;
                  color: #777777;
                  background-color: #fff;
               }
            }
            .input_cost {
               display: inline-block;
               width: calc(100% - 20px);
            }
         }
         & + .pay_list {
            border-top: 1px solid #d3dfef;
         }
      }
   }

   .pay_title {
      /*text-align: center;*/
      font-size: 28px;
      line-height: 38px;
      letter-spacing: 0px;
      color: #363636;
   }

   /* .pay_title {
       text-align: center;
    }

    .pay_deputy_title {
       margin-left: 10px;
    }*/

   .pay_content {
      /*margin-left: 10px;*/
      word-break: break-all;
   }

   .navigatorTo {
      width: 90%;
      margin: 30px auto 0;
      border-radius: 8px;
      overflow: hidden;
      .el-button {
         width: 100%;
         height: 47px;
         font-size: 16px;
         color: #ffffff;
         background-color: #1daa95;
      }
   }
</style>

<style lang="scss">
   @import "../../../assets/styles/message.scss";
</style>