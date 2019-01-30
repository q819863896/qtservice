<template>
   <div id="app">
      <transition name="fade" mode="out-in">
         <router-view></router-view>
      </transition>
   </div>
</template>

<script>
   import {requestToken,} from "./api";

   export default {
      name: 'app',
      created() {
         // console.log('app created')
         //获取视口高度
         let winH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
         this.$store.dispatch("getWindowHeight", winH);

         // this.getToken();
      },
      mounted() {
         // console.log('app mounted')
      },
      methods: {
         getToken() {
            // let tokenParams = {grant_type: "client_credentials", scope: "read", client_id: "rajithapp1", client_secret: "secret"};
            let tokenParams = {grant_type: "client_credentials", scope: "read", client_id: "1001", client_secret: "haiwei10012018"};
            let tokenSingle = sessionStorage.getItem('tokenSingle');
            requestToken(tokenParams).then(res => {
               let token = res.value;
               sessionStorage.setItem("tokenSingle", token);
            });
         },
      },
      destroyed() {
         // this.getToken = null;
         // sessionStorage.removeItem("tokenSingle")
      }
   }
</script>

<style lang="scss">
   /*loading 加载样式*/
   .el-loading-mask.is-fullscreen {
      .el-loading-spinner {
         .el-icon-loading {
            color: #1daa95;
         }
         .el-loading-text {
            color: #1daa95;
         }
      }
   }

   body {
      max-width: 640px;
      min-width: 320px;
      margin: 0 auto;
      /*height: auto;*/
      /*overflow: hidden;*/
      padding: 0;
      font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
      font-size: 14px;
      -webkit-font-smoothing: antialiased;
      background-color: #fff;

      /*overflow: scroll;*/
      /*overflow-scrolling: touch;*/
      /*-webkit-overflow-scrolling: touch;*/
      /*overflow: hidden;*/
      /* width: 100%;
       height: 100%;*/

      /*-webkit-overflow-scrolling: touch;
      -webkit-backface-visibility: hidden;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      -o-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      -webkit-perspective: 1000;
      -moz-backface-visibility: hidden;
      -moz-perspective: 1000;
      backface-visibility: hidden;
      perspective: 1000*/

   }

   #app {
      width: 100%;
      height: auto;
      overflow: hidden;
      /*width: calc(100% + 20px);*/
      /* overflow-y: scroll;
       overflow-x: hidden;
       position: absolute;
       top: 0;
       bottom: 0;*/
      /*-webkit-overflow-scrolling: touch;*/
      /*-webkit-backface-visibility: hidden;*/
      /*-webkit-transform: translate3d(0,0,0);*/
      /*position: relative;*/
      /*height: auto;*/
   }

   .el-submenu [class^=fa] {
      vertical-align: baseline;
      margin-right: 10px;
   }

   .el-menu-item [class^=fa] {
      vertical-align: baseline;
      margin-right: 10px;
   }

   .toolbar {
      background: #f2f2f2;
      padding: 10px;
      //border:1px solid #dfe6ec;
      margin: 10px 0;
      .el-form-item {
         margin-bottom: 10px;
      }
   }

   .fade-enter-active, .fade-leave-active {
      transition: all .2s ease;
   }

   .fade-enter, .fade-leave-active {
      opacity: 0;
   }

</style>
