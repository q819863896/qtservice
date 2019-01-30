<template>
   <section class="page" style="background-color:#fff;">
      <div class="school_box" style="background:#1DAA95 url('./images/school_bg.png') no-repeat center">
         <div class="school_detail">
            <div class="school_list_mid">
               <img src="../../../assets/images/school_img.png" alt="img">
               <div class="school_list_mid_content">
                  <div>{{schoolIntro.CHINESENAME}}</div>
                  <div>{{schoolIntro.ENAME}}</div>
                  <div class="school-cost">编号：{{schoolIntro.CODE}}</div>
               </div>
            </div>

            <div class="school_btm">
               <div>院校类型：{{schoolIntro.TYPE}}</div>
               <div>学校网址：<i class="color_success1">{{schoolIntro.URL}}</i></div>
            </div>
         </div>
      </div>

      <el-tabs v-model="activeName" class="school_tab" type="card" @tab-click="handClick">
         <el-tab-pane label="学院详情" name="1">
            <!--<h6>学院简介</h6>-->
            <p>{{schoolIntro.DESCRIDE}}</p>
         </el-tab-pane>
         <el-tab-pane label="客观数据" name="2">
            <!--<h6>客观数据</h6>-->
            <p>{{schoolIntro.FEATURE}}</p>
         </el-tab-pane>
      </el-tabs>
   </section>
</template>

<script>
   import {schoolIntro} from "../../../api.js";
   import {systemTimeout} from "../../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../../assets/js/loading.js";
   import {urlParse} from "../../../assets/js/urlToJson";

   export default {
      name: "SchoolIntro",

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            schoolIntro: [],
            activeName: "1",
         }
      },

      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         //获取学校简介
         getSchoolIntro(fid) {
            let param = new URLSearchParams();
            // param.append("selectSchool", "P24AAAAB6nWEjIJh");
            param.append("selectSchool", fid);
            schoolIntro(param).then(res => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  this.schoolIntro = datas;
                  closeLoading(this) //关闭loading
               }
            })
         },

         handClick(tab, event) {
            // console.log(tab, event)
         }
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         loading(this) //加载loading
         let urlParams = urlParse(window.location.href);
         this.fid = urlParams.id;
         this.getSchoolIntro(this.fid);//执行【获取学校简介】
      },

      destroyed() {
         this.getSchoolIntro = null;
      }
   }
</script>


<style lang="scss">
   @import "../../../assets/styles/common.scss";
   @import "../../../assets/styles/message.scss";

   .school_box {
      width: 100%;
      height: 200px;
      padding-top: 1px;
      margin-bottom: 90px;
      border-bottom: 1px solid #d3dfef;
      position: relative;
      &::after {
         content: "";
         width: 100%;
         height: 1px;
         display: block;
         background-color: #d3dfef;
         position: absolute;
         left: 0;
         bottom: -75px;
      }

      .school_detail {
         width: 80%;
         padding: 20px 10px;
         margin: 100px auto 0;
         background-color: #ffffff;
         box-shadow: 0px 6px 7px 0px rgba(0, 0, 0, 0.08);
         border-radius: 5px 5px 0px 0px;
         position: relative;
      }
   }

   .school_list_mid {
      margin: -35px 0 20px;
      @extend .flexCC;
      &::after {
         content: "";
         width: 0;
         height: 0;
         display: block;
         clear: both;
      }
      img {
         width: 80px;
         height: 80px;
         display: block;
         margin-right: 10px;
      }
      .school_list_mid_content {
         margin-top: 20px;
         div {
            &:nth-of-type(1) {
               font-size: 16px;
               color: #8795a8;
            }
            &:nth-of-type(2) {
               font-size: 12px;
               color: #8795a8;
            }
            &:nth-of-type(3) {
               font-size: 12px;
               color: #1daa95;
            }
         }
      }
   }

   .school_btm {
      div {
         line-height: 25px;
         font-size: 16px;
         color: #8795a8;
         word-break: break-all;
      }
   }

   .school_tab {
      width: 80%;
      margin: 0 auto;
      .el-tabs__header {
         border: none;
         .el-tabs__nav-wrap {
            height: 48px;
            .el-tabs__nav-scroll {
               .el-tabs__nav {
                  width: 100%;
                  border: none;
                  @extend .flexSBC;
                  .el-tabs__item {
                     width: calc(50% - 5px);
                     margin: 5px;
                     padding: 0;
                     text-align: center;
                     border: none;
                     background-color: #ffffff;
                     box-shadow: 0px 4px 8px 1px rgba(0, 0, 0, 0.13);
                     border-radius: 5px;
                     font-size: 16px;
                     color: #1daa95;
                     &.is-active {
                        color: #ffffff;
                        background-color: #1daa95;
                     }
                  }
               }
            }
         }
      }

      .el-tabs__content {
         padding: 0;
         margin: 0;
         .el-tab-pane {
            p {
               font-size: 16px;
               line-height: 24px;
               letter-spacing: 0px;
               color: #373f4a;
               word-break: break-all;
               margin: 0;
            }
         }
      }
   }
</style>