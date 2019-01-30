<template>
   <section class="page">
      <div class="custom_carousel">
         <el-carousel trigger="click">
            <el-carousel-item v-for="(item,index) in scroll" :key="index" :style="{backgroundImage: 'url('+item.url+')'}"></el-carousel-item>
         </el-carousel>
      </div>

      <div v-for="(item,index) in StatusSqlList" :key="index" class="service_box">
         <div class="service_title">{{item.FNAME}}</div>
         <div class="service_finance">
            <div class="service_finance_list" v-for="(itemChild,indexChild) in item.lists" :key="indexChild">
               <router-link :to="'/index/service/detail?id='+encodeURIComponent(itemChild.FID)">
                  <img :src="itemChild.encode2" onerror="onerror=null;src='/qtservice/images/onerror.png'"/>
                  <div>{{itemChild.CFABBNAME}}</div>
               </router-link>
            </div>
         </div>
      </div>

      <!--<div>
         <div class="service_title">金融服务</div>
         <div class="service_finance">
            <router-link to="/index/service/1" v-for="(item,index) in finance" :key="index">
               <div class="service_finance_list">{{item.value}}</div>
            </router-link>
         </div>

         <div class="service_title">留学管家</div>
         <div class="service_finance">
            <router-link to="/index/service/2" v-for="(item,index) in finance" :key="index">
               <div class="service_finance_list">{{item.value}}</div>
            </router-link>
         </div>

         <div class="service_title">落地服务</div>
         <div class="service_finance">
            <router-link to="/index/service/3" v-for="(item,index) in finance" :key="index">
               <div class="service_finance_list">{{item.value}}</ div>
            </router-link>
         </div>
      </div>-->
   </section>
</template>

<script>
   import {afterService} from "../../../api.js"
   import {systemTimeout} from "../../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../../assets/js/loading.js";

   export default {
      name: "service",
      data() {
         return {
            scroll: [{
               url: require("../../../assets/images/service/banner.png")
            }, {
               url: require("../../../assets/images/service/banner.png")
            }, {
               url: require("../../../assets/images/service/banner.png")
            }],
            // finance: [{
            //    value: "存款证明"
            // }, {
            //    value: "存款证明"
            // }, {
            //    value: "存款证明"
            // }],
            StatusSqlList: [],
         }
      },

      methods: {
         getAfterService() {
            afterService().then(res => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  this.StatusSqlList = datas.StatusSqlList;
                  closeLoading(this) //关闭loading
               }
            })
         }
      },

      created() {
         this.getAfterService();
         loading(this) //加载loading
      },

      destroyed() {
         this.getAfterService = null;
      }
   }
</script>

<style lang="scss" scoped>
   @import "../../../assets/styles/common.scss";

   .service_box{
      background-color: #fff;
      margin: 10px auto;
      & + .service_box{
         margin: 10px auto;
      }
   }

   .service_title{
      width: 100%;
      height: 36px;
      line-height: 36px;
      padding-left: 20px;
      border-bottom: 1px solid #F2F2F2;
   }

   .service_finance{
      width: 100%;
      height: auto;
      overflow: hidden;
      .service_finance_list{
         width: 33.33333333333333%;
         float: left;
         text-align: center;
         border-right: 1px solid #F2F2F2;
         border-bottom: 1px solid #F2F2F2;
         padding: 20px 0;
         @extend .box-sizingBB;
         /*   &:nth-of-type(3) {
               border: none;
            }*/
         img{
            width: 46px;
            height: 46px;
            border-radius: 100%;
         }
         div{
            width: 100%;
            height: 20px;
            line-height: 20px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #515f71;
         }
      }
   }
</style>

<style lang="scss">
   @import "../../../assets/styles/scroll.scss";
   @import "../../../assets/styles/message.scss";
</style>