<template>
   <section class="page">
      <!--<iframe src="/pdf/web/viewer.html" frameborder="0" :height="winH" width="100%"></iframe>-->
      <iframe v-if="!showOtherPdf" :src="'/qtservice/pdf/web/viewer.html?file='+pdfUrl" frameborder="0" :height="$store.state.winH" width="100%"></iframe>
      <iframe v-if="showOtherPdf" src="/qtservice/pdf/web/viewer.html?file=/qtservice/registration-card.pdf" frameborder="0" :height="$store.state.winH" width="100%"></iframe>
   </section>
</template>

<script>
   import {contractPDF} from "../../../api.js";
   import {systemTimeout, pdfHint} from "../../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../../assets/js/loading.js";

   export default {
      name: "CompactPDF",
      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            pdfUrl: "",
            showOtherPdf: "",
         }
      },
      /*****************************************************************************************************
       * 本页面注册组件
       ******************************************************************************************************/
      components: {},
      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         //获取PDF文件
         getContractPDF(contractId, flag) {
            let param = new URLSearchParams();
            // param.append("contractId", "DiEMS7OGSv694knW06jB8yOVzh4=");
            param.append("contractId", contractId);
            param.append("flag", flag);
            contractPDF(param).then(res => {
               let {message, status} = res;
               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
                  pdfHint()
               } else {
                  let blob = new Blob([res], {type: "application/pdf"});
                  this.pdfUrl = window.URL.createObjectURL(blob);
               }
               closeLoading(this) //关闭loading
            })
         }
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         // loading(this) //加载loading
         // let contractId = this.$route.query.id; //获取路由参数
         // let flag = this.$route.query.flag; //获取路由参数
         // this.getContractPDF(decodeURIComponent(contractId), flag); //执行【获取PDF文件】
         // console.log('contractId', decodeURIComponent(contractId))

         this.pdfUrl = this.$route.query.pdfSrc;
         this.showOtherPdf = this.$route.query.otherPdf;

      },

      destroyed() {
         this.getContractPDF = null;
      }
   }
</script>

<style lang="scss">
   @import "../../../assets/styles/common.scss";
   @import "../../../assets/styles/message.scss";
</style>