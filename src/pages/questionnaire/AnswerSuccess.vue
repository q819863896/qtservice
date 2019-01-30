<template>
   <section class="success">
      <img src="../../assets/images/success.png" alt="success">
      <div class="answer_success">提交成功，感谢您对我们服务的支持!</div>
      <!--<div class="answer_success">提交成功，感谢您对我们服务的支持，{{remainSecond}}s后页面自动跳转...</div>-->
      <!--<el-button class="btn_navigate" @click.prevent="navigatorTo">跳转</el-button>-->
   </section>
</template>

<script>
   import {urlParse} from "../../assets/js/urlToJson";

   export default {
      name: "AnswerSuccess",
      data() {
         return {
            backUrlData: {openId: "",},
            remainSecond: 3,  //剩余s
         }
      },
      methods: {
         navigatorTo() {
            // this.$router.push({path: '/videologin', query: {autoLogin: true, openId: this.backUrlData.openId}})
         },
         //定时器
         interval() {
            let i = 3;
            this.timer = setInterval(() => {
               i--;
               this.remainSecond = i;
               if (i < 1) {
                  clearInterval(this.timer);
                  this.navigatorTo();
               }
            }, 1000);
         }
      },
      created() {
         // this.backUrlData = urlParse(window.location.href);
         // this.interval();
      }
   }
</script>

<style lang="scss" scoped>
   .success{
      width: 100%;
      height: calc(100vh - 1px);
      background-color: #EFEBEF;
      padding-top: 1px;
      img{
         display: block;
         margin: 50px auto 20px;
      }
      .answer_success{
         width: 80%;
         margin: 0 auto 30px;
         text-align: center;
         color: #303133;
         font-size: 16px;
      }

      .btn_navigate{
         width: 80%;
         margin: 0 auto;
         display: block;
         background-color: #23B29E;
         color: #fff;
         font-size: 14px;
      }
   }
</style>