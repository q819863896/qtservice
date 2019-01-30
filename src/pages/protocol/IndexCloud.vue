<template>
   <section class="container" :style="{height:$store.state.winH+'px'}">
      <!--<div class="hint"> 正在跳转...</div>-->
   </section>
</template>

<script>
   import {requestToken, getparam, approval} from "../../api";
   import {systemTimeout} from "../../assets/js/variousHint";
   import {urlParse} from "../../assets/js/urlToJson";
   import axios from "axios";
   import {loading, closeLoading} from "../../assets/js/loading.js";

   export default {
      name: "IndexCloud",
      data() {
         return {
            activeName: "1",
            checkSuggest: "",
            bizDataInfo: {},
            attchFileList: [],
            multiAppList: [],
            assignId: "",
            auditor: "",
            tokenSingle: ""
         }
      },

      methods: {
         getToken() {
            // let tokenParams = {grant_type: "client_credentials", scope: "read", client_id: "rajithapp1", client_secret: "secret"};
            let tokenParams = {grant_type: "client_credentials", scope: "read", client_id: "1001", client_secret: "haiwei10012018"};
            let that = this;
            requestToken(tokenParams).then(res => {
               let token = res.value;
               that.tokenSingle = res.value;
               sessionStorage.setItem("tokenSingle", token);
               console.log('token', token);
               console.log('that.tokenSingle', that.tokenSingle);
            });
            console.log('this.tokenSingle', this.tokenSingle);
         },
         getParamData(assignId, bizMark) {
            // let tokenParams = {grant_type: "client_credentials", scope: "read", client_id: "rajithapp1", client_secret: "secret"};
            // let tokenParams = {grant_type: "client_credentials", scope: "read", client_id: "1001", client_secret: "haiwei10012018"};
            //
            // let tokenSingle;
            // let timer = setInterval(() => {
            //    tokenSingle = sessionStorage.getItem('tokenSingle');
            // }, 30);
            //
            // if (!tokenSingle) {
            //    console.log(1);
            //    requestToken(tokenParams).then(res => {
            //       let token = res.value;
            //       sessionStorage.setItem("tokenSingle", token);
            //    });
            // }

            if (this.tokenSingle) {
               // console.log('tokenSingle', this.tokenSingle);
               // clearInterval(timer);

               let params = {
                  // assignId: "4b95fb1f-bdcd-45b9-aa9f-55936cf5477dWFWKITEM",
                  // assignId: "5923a106-72ed-440c-b9a3-dba8d9769c0dWFWKITEM",
                  // assignId: "215c7013-5b3d-49a7-9080-48c3bbf0f3f7WFWKITEM",
                  //assignId : "a68da4ec-3433-4942-90a6-d52f97b48d58WFWKITEM",
                  // bizMark: "billObject",
                  // bizMark: "getBillMess",
                  assignId,
                  bizMark,
               };

               getparam(this.tokenSingle, params).then(res => {
                  let {datas, message, status} = res;

                  if (status !== 0) {
                     systemTimeout(status, message);

                  } else {
                     let jsonData = JSON.parse(datas);
                     console.log(jsonData)
                     if (jsonData.data.status !== "1") {
                        systemTimeout(status, message);
                        closeLoading(this) //关闭loading
                     } else {
                        if (jsonData.data.taskMessage.pageName !== null && jsonData.data.taskMessage.pageName !== "noPage") {
                           if (jsonData.data.taskMessage.pageName === "expenseBill.html") {            // 费用支出单审批流程
                              this.$router.push({path: "/approve", query: {assignId: encodeURIComponent(this.assignId), auditor: encodeURIComponent(this.auditor)}})
                           } else if (jsonData.data.taskMessage.pageName === "preferential.html") {    // 优惠协议
                              this.$router.push({path: "/discounts", query: {assignId: encodeURIComponent(this.assignId), auditor: encodeURIComponent(this.auditor)}})
                           } else if (jsonData.data.taskMessage.pageName === "refundAgreement.html") { // 退费协议
                              this.$router.push({path: "/backcost", query: {assignId: encodeURIComponent(this.assignId), auditor: encodeURIComponent(this.auditor)}})
                           } else if (jsonData.data.taskMessage.pageName === "selectSchool.html") {    // 选校协议
                              this.$router.push({path: "/selectschool", query: {assignId: encodeURIComponent(this.assignId), auditor: encodeURIComponent(this.auditor)}})
                           } else if (jsonData.data.taskMessage.pageName === "supArgeement.html") {    // 补充协议
                              this.$router.push({path: "/supplement", query: {assignId: encodeURIComponent(this.assignId), auditor: encodeURIComponent(this.auditor)}})
                           }
                        } else {
                           this.$router.push({path: "/404"})
                        }
                     }
                  }
                  closeLoading(this) //关闭loading
               })
            }

         },
      },

      created() {
         loading(this); // 加载loading
         this.getToken();
         this.tokenSingle = sessionStorage.getItem('tokenSingle');
      },

      mounted() {
         let urlParams = urlParse(window.location.href);
         this.assignId = urlParams.assignId;
         this.auditor = urlParams.userName;
         setTimeout(() => {
            this.getParamData(urlParams.assignId, "taskMessage"); //判断页面类型
         }, 2000)

         // if (this.tokenSingle) {
         //    this.getParamData(urlParams.assignId, "taskMessage"); //判断页面类型
         // }
      },

      destroyed() {
         this.getParamData = null;
      }
   }
</script>

<style lang="scss" scoped>
   .container{
      padding-top: 1px;
   }

   .hint{
      width: 100%;
      text-align: center;
      margin-top: 50%;
   }
</style>