<template>
   <section class="page">
      <iframe :src="signatureUrl" frameborder="0" :height="$store.state.winH" width="100%"></iframe>
   </section>
</template>

<script>
   import {signatureApi} from "../../../api.js"
   import {systemTimeout} from "../../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../../assets/js/loading.js";

   export default {
      name: "SignatureLink",

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            signatureUrl: "",
         }
      },

      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         getSignatureApi(fid, signLocation, flag) {
            let params = {};
            params.fid = fid;                   //合同id
            params.flag = flag;                  //协议类别
            params.signLocation = signLocation; //申请人或代理人
            signatureApi(params).then(res => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  this.signatureUrl = datas.sign;
                  closeLoading(this) //关闭loading
               }
            })
         }
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         loading(this) //加载loading

         console.log(JSON.parse(decodeURIComponent(this.$route.query.params)))
         // console.log(JSON.parse(this.$route.query.params))
         let params = JSON.parse(decodeURIComponent(this.$route.query.params));

         let fid = params.id1;
         let signLocation = params.id2;
         let flag = params.id3;
         this.getSignatureApi(fid, signLocation, flag);
      },

      destroyed() {
         this.getSignatureApi = null;
      }
   }
</script>

<style lang="scss">
   @import "../../../assets/styles/message.scss";
</style>