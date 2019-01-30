<template>
   <section class="page">
      <div class="custom_carousel">
         <!-- <el-carousel trigger="click">
            <el-carousel-item v-for="(item,index) in scroll" :key="index" :style="{backgroundImage: 'url('+item.url+')'}"></el-carousel-item>
         </el-carousel> -->
         <!-- 轮播 -->
         <mt-swipe :auto="0">
            <mt-swipe-item v-for="(item,index) in scroll" :key="index" :style="{backgroundImage: 'url('+item+')'}">
            </mt-swipe-item>
         </mt-swipe>
      </div>
      <!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
      <!--<br/>-->
      <!--<div class="logo_info"><img src="../../assets/images/logo.png" alt=""><span>新东方前途出国 权威|专业|诚信</span></div>-->
      <!--<br/>-->
      <div class="sub_menus">
         <el-menu :default-active="$route.path" router mode="horizontal" @select="handleSelect">
            <template v-for="item in routes" v-if="item.path==='/index'">
               <el-menu-item :index="itemChild.path+''" v-for="(itemChild,indexChild) in item.children" v-if="itemChild.grandson" :key="indexChild">
                  <img :src="itemChild.url" alt="image">
                  <span> {{itemChild.name}}</span>
               </el-menu-item>
            </template>
         </el-menu>
      </div>
      <!---------------------------------------------------------------------------------------------------------------------------------------------------------------------->
      <div class="process_title">申请进度</div>
      <div class="process_info_box">
         <router-link :to="'/process/compact/detail?id='+encodeURIComponent(item.ID)" v-for="(item,index) in contractList" :key="index">
            <el-card class="box_card">
               <div class="title">
                  <span>{{item.CONTRACTNAME}} {{item.BILLNUMBER}}</span>
               </div>
               <div class="item">
                  签约金额:{{item.SIGNAMOUNT}}元
               </div>
               <div class="item">
                  签约日期：{{item.BIZDATE}}
               </div>
               <i class="iconfont icon-right1"></i>
            </el-card>
            <!--
            <div class="process_info" v-for="(itemChild,indexChild) in item.VisApplyList" :key="indexChild" v-if="item.VisApplyList.length>0">
               <div class="process_info_list">
                  <div class="process_info_title">签证信息:</div>
                  <div class="process_info_country">国家:{{itemChild.COUNTRYNAME}}</div>
                  <div class="process_info_status">状态：{{itemChild.STATUS}}</div>
                  <div class="process_info_time">申请时间：{{itemChild.DATE}}</div>
               </div>
            </div>-->
         </router-link>
      </div>
   </section>
</template>

<script>
   import {processList} from "../../api.js"
   import {systemTimeout} from "../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../assets/js/loading.js";

   export default {
      name: "Index",

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            scroll: [],
            routes: [],
            contractList: [],
         }
      },

      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         handleSelect(key, keyPath) {
            console.log(key, keyPath);
         },

         //获取申请进度列表
         getProcessList() {
            processList().then((res) => {
                let {status, message, datas} = res;
                if (status !== 0) {
                    systemTimeout(status, message);
                    closeLoading(this) //关闭loading
                } else {
                    this.contractList = datas;
                    this.scroll=datas[datas.length-1].advertList;
                    closeLoading(this) //关闭loading
                }
            })
         },
      },

      /*****************************************************************************************************
       * 本页面注册组件
       ******************************************************************************************************/
      components: {},


      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         this.getProcessList(); //执行【获取申请进度列表】

         let routes = this.$router.options.routes;
         routes.forEach((item) => {
            this.routes = item.children;
            /*item.children.forEach((itemChild, indexChild) => {
               if (itemChild.children === "/index") {
                  this.routes = itemChild.children;
               }
            })*/
         });

         loading(this) //加载loading
      },

      destroyed() {
         this.getProcessList = null;
      }
   }
</script>


<style lang="scss" scoped>
   @import "../../assets/styles/common.scss";

   /*.page {*/
   /*background-color: #e7ecf5;*/
   /*}*/

   /*.index {
      max-width: 640px;
      min-width: 320px;
      height: auto;
      overflow: hidden;
   }*/

   /*.logo_info {
      width: 100%;
      height: 30px;
      line-height: 30px;
      text-align: center;
      img {
         width: 30px;
         height: 30px;
         display: inline-block;
         vertical-align: middle;
         border: 0;
      }
      span {
         height: 30px;
         line-height: 30px;
         display: inline-block;
      }
   }*/

   /*导航菜单*/
   .sub_menus {
      margin: 10px auto 15px;
      height: auto;
      overflow: hidden;
      box-shadow: 0px 6px 7px 0px rgba(0, 0, 0, 0.08);
      .el-menu {
         padding: 0 0 15px;
         .el-menu-item {
            width: 25%;
            height: auto;
            padding: 10px 0 0;
            @extend .flexCC, .flexV;
            img {
               width: 46px;
            }
            span {
               height: 30px;
               line-height: 30px;
               font-size: 16px;
               color: #363636;
            }
         }
      }
   }

   /*进程title*/
   .process_title {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: #ffffff;
      font-size: 20px;
      color: #363636;
   }

   /*卡片信息*/
   .box_card {
      border: none;
      border-top: 1px solid #d3dfef;
      box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.08);
      position: relative;
      margin-bottom: 10px;
      &::before {
         content: "";
         width: 5px;
         height: 100%;
         display: block;
         background-color: #33c3ae;
         position: absolute;
         left: 0;
         top: 0;
      }
      .title {
         font-size: 16px;
         font-weight: normal;
         font-stretch: normal;
         letter-spacing: 0px;
         color: #1daa95;
      }
      .icon-right1 {
         position: absolute;
         top: 50%;
         right: 10px;
         color: #1daa95;
      }
      .item {
         line-height: 20px;
         font-size: 14px;
         font-weight: normal;
         font-stretch: normal;
         letter-spacing: 0px;
         color: #363636;
         opacity: 0.7;
      }
   }

   /*进程信息*/
   .process_info {
      width: 60%;
      padding: 5px 20%;
      margin: 0 auto 10px;
      background-color: #fff;
      /*position: relative;*/
      .process_info_list {
         position: relative;
         &::after {
            content: "";
            width: 1px;
            height: 90%;
            display: block;
            position: absolute;
            top: 5%;
            left: -20px;
            border-left: 1px dashed #37cbb9;
         }
      }

      .process_info_title, .process_info_time {
         font-size: 14px;
         font-weight: normal;
         font-stretch: normal;
         letter-spacing: 0px;
         color: #1daa95;
         position: relative;
         &::after {
            content: "";
            width: 11px;
            height: 11px;
            border-radius: 100%;
            background-color: #1daa95;
            display: block;
            position: absolute;
            top: 5px;
            left: -25px;
            z-index: 1;
         }
         &::before {
            content: "";
            width: 15px;
            height: 15px;
            background-color: #1daa95;
            opacity: 0.2;
            border-radius: 100%;
            display: block;
            position: absolute;
            top: 3px;
            left: -27px;
            z-index: 1;
         }
      }
      .process_info_time {
         color: #000000;
      }

      .process_info_country, .process_info_status {
         font-size: 14px;
         font-weight: normal;
         font-stretch: normal;
         letter-spacing: 0px;
         color: #373f4a;
         position: relative;
         &::after {
            content: "";
            width: 7px;
            height: 7px;
            border-radius: 100%;
            background-color: #1daa95;
            display: block;
            position: absolute;
            top: 6px;
            left: -23px;
            z-index: 1;
         }
      }
   }
</style>

<style lang="scss">
   @import "../../assets/styles/scroll.scss";
   @import "../../assets/styles/message.scss";
</style>