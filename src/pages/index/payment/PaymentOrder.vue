<template>
   <section class="page" style="background-color: #ffffff;">
      <el-form class="payOrder" ref="payOrder" :model="payOrder" :rules="payRules">
         <div class="pay_title">订单支付</div>

         <el-form-item label="支付订单号：" prop="orderCode">
            <el-input v-model="payOrder.orderCode" disabled></el-input>
            <!--<div>{{payOrder.orderCode}}</div>-->
         </el-form-item>

         <el-form-item label="合同号：" prop="number">
            <el-input v-model="payOrder.number" disabled></el-input>
         </el-form-item>

         <el-form-item label="合同名称：" prop="name">
            <el-input v-model="payOrder.name" disabled></el-input>
         </el-form-item>

         <!-- <div class="pay_deputy_title">支付订单号:</div>
          <div class="pay_content">{{payOrder.orderCode}}</div>
 
          <div class="pay_deputy_title">合同号:</div>
          <div class="pay_content">{{payOrder.number}}</div>
 
          <div class="pay_deputy_title">合同名称:</div>
          <div class="pay_content">{{payOrder.name}}</div>-->

         <el-form-item label="支付金额:" prop="cost">
            <div>
               <span>￥</span>
               <el-input class="input_cost" v-model.trim="payOrder.cost"></el-input>
            </div>
         </el-form-item>

         <el-form-item label="订单日期：" prop="createTime">
            <el-input v-model="payOrder.lastupdateTime" disabled></el-input>
         </el-form-item>
         <!--<div class="pay_deputy_title">订单日期:</div>
         <div class="pay_content">{{payOrder.createTime}}</div>-->

         <el-form-item label="支付描述:" prop="describe">
            <el-input v-model="payOrder.describe"></el-input>
         </el-form-item>

         <div class="toPay">
            <el-button @click.native.prevent="toPay">我要支付</el-button>
         </div>
      </el-form>
   </section>
</template>

<script>
   import {paymentOrder, paymentDetail, submitPay} from "../../../api.js";
   import {systemTimeout, payCostZero} from "../../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../../assets/js/loading.js";

   export default {
      name: "PaymentOrder",
      data() {
         return {
            payOrder: {
               cost: "",
               describe: "",
            },
            payRules: {
               cost: [
                  {required: true, message: "支付金额不能为空", trigger: "blur"}
               ],
            },
            contractId: "",  //合同id
         }
      },

      methods: {
         //生成订单
         getPaymentOrder(contractId) {
            let param = new URLSearchParams();
            // param.append("billId", "DiEMS7OGSv694knW06jB8yOVzh4=");
            param.append("contractId", contractId);
            paymentOrder(param).then(res => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  this.payOrder = datas;
                  this.payOrder.cost = "";
                  this.payOrder.describe = "";
                  closeLoading(this) //关闭loading
               }
            })
         },

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
                  // this.paymentDetail = datas;
                  this.payOrder = datas;
                  this.payOrder.cost = datas.orderTranAmount;
                  this.payOrder.describe = datas.orderRemarks;
                  closeLoading(this) //关闭loading
               }
            })
         },

         //去支付
         toPay() {
            let that = this;
            if (this.payOrder.cost <= 0) {
               payCostZero();
               return false;
            }

            this.$refs.payOrder.validate((valid) => {
               if (valid) {
                  let params = {};
                  params.contractId = this.payOrder.contractId;
                  params.orderCode = this.payOrder.orderCode;
                  params.orderTranAmount = this.payOrder.cost;
                  params.orderRemarks = this.payOrder.describe;
                  params.id = this.payOrder.id;
                  params.name = this.payOrder.name;
                  params.number = this.payOrder.number;

                  submitPay(params).then(res => {
                     let {status, message, datas} = res;

                     if (status !== 0) {
                        systemTimeout(status, message);
                        closeLoading(this) //关闭loading
                     } else {
                        // let url = datas.payurl;
                        // let target = url.indexOf("?");
                        // let payUrl = url.substring(0, target);
                        // let payParams = url.substring(target + 1, url.length);

                        // that.$router.push({path: "/index/payment/link", query: {id1: payUrl, id2: payParams}})
                        window.location = datas.payurl;
                     }
                  });
               } else {
                  console.error("pay error")
               }
            })
         }
      },

      created() {
         loading(this) //加载loading
         // this.contractId = this.$route.query.id;
         // this.getPaymentOrder(this.contractId);  //执行【生成订单】

         // let createdId = this.$route.query.idAll;
         if (this.$route.query.idAll) {
            this.contractId = this.$route.query.idAll;
            this.getPaymentOrder(this.$route.query.idAll); //执行【生成订单】
         } else if (this.$route.query.idWait) {
            this.contractId = this.$route.query.idWait;
            this.getPaymentDetail(this.$route.query.idWait);//执行【获取订单详情】
         }

      },

      destroyed() {
         this.getPaymentOrder = null;
      }
   }
</script>

<style lang="scss">
   @import "../../../assets/styles/common.scss";
   @import "../../../assets/styles/message.scss";

   .payOrder {
      width: 90%;
      margin: 20px auto;
      .el-form-item {
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
         & + .el-form-item {
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

   .toPay {
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