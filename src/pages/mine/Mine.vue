<template>
   <section>
      <section class="page">
         <div class="mine_user">
            <img src="../../assets/images/portrait.png" alt="portrait">
            <main>
               <div class="user_name">{{user.name}}</div>
               <!--<div class="user_intro">{{user.stype}}</div>-->
               <div>
                  <router-link to="/personalinfo">个人信息详情</router-link>
               </div>
            </main>
         </div>

         <div class="consultant">
            <el-collapse v-model="activeName">
               <el-collapse-item title="" name="1">
                  <template slot="title">
                     <img src="../../assets/images/mine/wdgw.png" class="consultant_icon" alt="protrait">
                     <span>我的顾问</span>
                  </template>
                  <div class="consultant_list" v-for="(item,index) in user.signfname" :key="Math.random()" v-if="item">
                     <img src="../../assets/images/portrait.png" alt="portrait">
                     <main>
                        <div>{{item}}</div>
                        <div>签约顾问</div>
                     </main>
                  </div>

                  <div class="consultant_list" v-for="(item,index) in user.docfname" :key="Math.random()*2" v-if="item">
                     <img src="../../assets/images/portrait.png" alt="portrait">
                     <main>
                        <div>{{item}}</div>
                        <div>文案顾问</div>
                     </main>
                  </div>

                  <div class="consultant_list" v-for="(item,index) in user.earlyfname" :key="Math.random()*3" v-if="item">
                     <img src="../../assets/images/portrait.png" alt="protrait">
                     <main>
                        <div>{{item}}</div>
                        <div>前期顾问</div>
                     </main>
                  </div>

                  <div class="consultant_list" v-for="(item,index) in user.midfname" :key="Math.random()*4" v-if="item">
                     <img src="../../assets/images/portrait.png" alt="portrait">
                     <main>
                        <div>{{item}}</div>
                        <div>中期顾问</div>
                     </main>
                  </div>

                  <div class="consultant_list" v-for="(item,index) in user.endfname" :key="Math.random()*5" v-if="item">
                     <img src="../../assets/images/portrait.png" alt="portrait">
                     <main>
                        <div>{{item}}</div>
                        <div>后期顾问</div>
                     </main>
                  </div>

                  <div v-if="!(user.signfname&&user.docfname&&user.earlyfname&&user.midfname&&user.endfname)" class="warm_hint">暂无信息</div>
               </el-collapse-item>
            </el-collapse>
         </div>

         <div class="message_info">
            <router-link :to="item.url" v-for="(item,index) in list" :key="index">
               <div class="message_info_list">
                  <main class="left">
                     <img :src="item.imgUrl" alt="icon">
                     <!--<i :class="item.icon"></i>-->
                     <span>{{item.title}}</span>
                  </main>
                  <main class="right">
                     <!--<i class="el-collapse-item__arrow el-icon-arrow-right"></i>-->
                     <i class="iconfont icon-iconfontyoujiantou-copy-copy"></i>
                  </main>
               </div>
            </router-link>
         </div>
      </section>
   </section>
</template>

<script>
   import {counselorList} from "../../api.js";
   import {systemTimeout} from "../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../assets/js/loading.js";

   export default {
      name: "Mine",

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            list: [{
               imgUrl: require("../../assets/images/mine/htxx.png"),
               icon: "iconfont icon-hetong2",
               title: "合同信息",
               url: "/process/compact/index",
            }, {
               imgUrl: require("../../assets/images/mine/fkxx.png"),
               icon: "iconfont icon-fukuan",
               title: "付款信息",
               url: "/index/payment"
            }, {
               imgUrl: require("../../assets/images/mine/hxfw.png"),
               icon: "iconfont icon-fuwu",
               title: "后续服务",
               url: "/index/service"
            }/*, {
               icon: "iconfont icon-contract_01",
               title: "待签合同",
               url: "/process/nosigncompact"
            }*/],
            user: {
               name: "",
               stype: "",
               signfname: [],
               docfname: [],
               earlyfname: [],
               midfname: [],
               endfname: [],
            },
            activeName: "",
         }
      },

      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         //获取顾问列表
         getCounselorList() {
            counselorList().then(res => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  this.user = datas;
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
         this.getCounselorList(); //执行【获取顾问列表】
      },

      destroyed() {
         this.getCounselorList = null;
      }
   }
</script>

<style lang="scss" scoped>
   @import "../../assets/styles/common.scss";

   .mine_user{
      width: 100%;
      padding: 10px 0;
      text-align: center;
      background-color: #fff;

      img{
         width: 68px;
         height: 68px;
         line-height: 25px;
         font-size: 0;
         /*margin-left: 10px;*/
         display: block;
         vertical-align: top;
         margin: 0 auto;
      }
      main{
         height: 50px;
         display: block;
         flex: 1;
         /*div {*/
         /*height: 25px;*/
         /*line-height: 25px;*/
         /*}*/
         .user_name{
            font-size: 24px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #24272b;
         }

         .user_intro{
            font-size: 13px;
            font-weight: normal;
            font-stretch: normal;
            letter-spacing: 0px;
            color: #4b5461;
            opacity: 0.45;
         }
      }
   }

   .consultant{
      width: 100%;
      padding: 10px 0;
      .consultant_list{
         /*width: calc(50% - 3px);*/
         /*display: inline-block;*/
         width: 50%;
         padding: 10px 0;
         float: left;
         img{
            width: 50px;
            height: 50px;
            line-height: 25px;
            font-size: 0;
            margin: 0 5px 0 20px;
            display: inline-block;
            vertical-align: top;
         }
         main{
            /*height: 50px;*/
            display: inline-block;
            flex: 1;
            div{
               /*height: 25px;*/
               /*line-height: 25px;*/
               &:nth-of-type(1){
                  font-size: 16px;
                  font-weight: normal;
                  font-stretch: normal;
                  letter-spacing: 0px;
                  color: #24272b;
               }
               &:nth-of-type(2){
                  font-size: 16px;
                  font-weight: normal;
                  font-stretch: normal;
                  letter-spacing: 0px;
                  color: #4b5461;
               }
            }
         }
      }
   }

   .message_info{
      width: 100%;
      .message_info_list{
         width: 100%;
         height: 48px;
         line-height: 48px;
         display: inline-flex;
         background-color: #fff;
         border-bottom: 1px solid #d3dfef;
         main{
            display: inline-block;
            &.left{
               img{
                  vertical-align: middle;
                  margin: 0 5px 0 20px;
               }
               span{
                  /*font-size: 16px;*/
                  font-weight: normal;
                  font-stretch: normal;
                  letter-spacing: 0px;
                  color: #3e4a59;
                  opacity: 0.7;
                  vertical-align: middle;
               }
            }
            &.right{
               margin: 0 20px 0 auto;
            }
         }
      }
   }
</style>

<style lang="scss">
   @import "../../assets/styles/message.scss";

   .consultant{
      .el-collapse{
         .el-collapse-item{
            .el-collapse-item__header{
               padding-left: 20px;
               img{
                  vertical-align: middle;
               }
               span{
                  /*font-size: 16px;*/
                  font-weight: normal;
                  font-stretch: normal;
                  letter-spacing: 0px;
                  color: #3e4a59;
                  opacity: 0.7;
                  margin: 0 0 0 5px;
                  vertical-align: middle;
               }
               .el-collapse-item__arrow{
                  margin-right: 20px;
               }
            }
            .el-collapse-item__content{
               div{
                  margin: 0;
               }
            }
         }
      }
   }
</style>