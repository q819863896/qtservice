<template>
   <section class="page">
      <div class="warm_hint" v-if="!selectSchooList.length">您暂没有签订选校协议，如要选校请联系您的服务顾问</div>

      <el-card class="school_list" v-for="(item,index) in selectSchooList" :key="index">
         <router-link :to="'/index/school/intro?id='+item.FID">
            <div class="school_list_top">
               <span>{{item.PDFNAME}}</span>
               <span class="mc-t">{{item.STATUS}}</span>
            </div>
            <!---------------------------------------------------------------------------->
            <div class="school_list_mid">
               <!--<img src="../../../assets/images/school_img.png" alt="img">-->
               <img :src="item.schLogo" @error="item.schLogo=errorImg" alt="img">

               <div class="school_list_mid_content">
                  <div>{{item.CFCHINESENAME }}</div>
                  <div>{{item.CFNAME_EN }}</div>
                  <div class="school-cost">确认时间：{{item.CONFIRMDATE}}</div>
               </div>
            </div>
            <!---------------------------------------------------------------------------->
            <div class="school_list_bot">
               <div>专业：{{item.CFSPECIALTYDETAILC}}({{item.CFSPECIALTYDETAILE}})</div>
               <div>网址：{{item.CFPAGE_URL}}</div>
            </div>
         </router-link>
      </el-card>
   </section>
</template>

<script>
   import {schoolInfo} from "../../../api.js"
   import {systemTimeout} from "../../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../../assets/js/loading.js";

   export default {
      name: "school",

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            selectSchooList: "",
            errorImg: require('../../../assets/images/school_img.png'),
         }
      },

      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         //获取选校信息
         getSchoolInfo() {
            schoolInfo().then(res => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  this.selectSchooList = datas;
                  closeLoading(this) //关闭loading
               }
            })
         }
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         this.getSchoolInfo();//执行【获取选校信息】
         loading(this) //加载loading
      },

      destroyed() {
         this.getSchoolInfo = null;
      }
   }
</script>

<style lang="scss" scoped>
   @import "../../../assets/styles/common.scss";

   .warm_hint{
      width: calc(100% - 20px);
      padding: 10px;
      text-align: center;
      background-color: #fff;
   }

   .school_list{
      margin-bottom: 15px;
      .school_list_top{
         @extend .flexSBC;
         span{
            font-size: 16px;
            &:nth-of-type(1){
               color: #373f4a;
            }
            &:nth-of-type(2){
               color: #1daa95;
            }
         }
      }

      .school_list_mid{
         width: 100%;
         display: flex;
         position: relative;
         padding: 10px 0;
         margin: 10px 0;
         border-top: 1px solid #d3dfef;
         border-bottom: 1px solid #d3dfef;
         &::after{
            content: "";
            width: 0;
            height: 0;
            display: block;
            clear: both;
         }
         img{
            width: 66px;
            height: 66px;
            display: block;
            margin-right: 20px;
            /*float: left;*/
         }
         .school_list_mid_content{
            /*width: 190px;*/
            flex-grow: 1;
            /*float: left;*/
            div{
               &:nth-of-type(1){
                  font-size: 16px;
                  color: #8795a8;
               }
               &:nth-of-type(2){
                  font-size: 12px;
                  color: #8795a8;
               }
               &:nth-of-type(3){
                  font-size: 12px;
                  color: #1daa95;
               }
            }
         }
      }

      .school_list_bot{
         div{
            font-size: 16px;
            color: #8795a8;
            word-break: break-all;
         }
      }
   }
</style>

<style lang="scss">
   @import "../../../assets/styles/message.scss";
</style>