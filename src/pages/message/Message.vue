<template>
   <section class="page">
      <div class="message_box">
         <!--<div v-for="(item,index) in list" :key="index" class="message_list">
            <img :src="item.url" alt="img">
            <main>
               <div>{{item.title}}</div>
               <div>{{item.value}}</div>
            </main>
            <time>
               <span>{{item.time}}</span>
            </time>
         </div>-->
         <el-collapse v-model="activeName">
            <!--<el-collapse-item title="" name="1">
               <template slot="title">
                  <img src="../../assets/images/message_c.png" class="consultant_icon" alt="protrait">
                  <span>待办通知</span>
               </template>

               <div class="warm_hint">暂无信息</div>
            </el-collapse-item>-->
            <!------------------------------------------------------------------------------------------>
            <el-collapse-item title="" name="2">
               <template slot="title">
                  <el-badge :value="notice.unReadCount" :max="99" :hidden="notice.unReadCount<=0" class="unread_num"></el-badge>
                  <img src="../../assets/images/message_s.png" class="consultant_icon" alt="protrait">
                  <span>系统通知</span>
               </template>

               <div class="message_list" v-for="(item,index) in notice.messageList" :key="index" v-if="item" @click.prevent="changeMessageState(item.FID,index,item.CFISREAD)">
                  <span :style="{color:item.CFISREAD===0?'#303133':'#78808A'}" :class="{active:index===current}">
                     <em :style="{backgroundColor:item.CFISREAD===0?'#FF0000':'#78808A'}"></em>
                     {{item.CFREMARKS}}&nbsp;&nbsp;{{item.FBIZDATE}}
                  </span>
               </div>

               <div v-if="!notice.messageList.length" class="warm_hint">暂无信息</div>
            </el-collapse-item>
         </el-collapse>
      </div>
   </section>
</template>

<script lang="ts">
   import {messageList, updateMessageState} from "../../api.js";
   import {systemTimeout} from "../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../assets/js/loading.js";

   export default {
      name: "message",
      data() {
         return {
            activeName: "",

            current: "",
            notice: {
               messageList: [],
               unReadCount: "",
            }
            // list: [
            //     {url: require("../../assets/images/message_c.png"), title: "待办通知", value: "功能完善中", time: "13:00"},
            //     {url: require("../../assets/images/message_s.png"), title: "系统通知", value: "功能完善中", time: "13:00"}
            // ]
         }
      },
      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         //获取消息列表
         getMessagesList() {
            messageList().then(res => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  // this.messageList = datas.messageList;
                  // this.unReadCount = datas.unReadCount;
                  this.notice = datas;
                  this.$store.dispatch("getNoticeNum", datas.unReadCount)
                  closeLoading(this) //关闭loading
               }
            })
         },

         changeMessageState(id, index, status) {
            let param = new URLSearchParams();
            param.append("fid", id);
            this.current = index;

            if (status === 0) {
               updateMessageState(param).then(res => {
                  let {status, message} = res;

                  if (status !== 0) {
                     systemTimeout(status, message);
                     closeLoading(this) //关闭loading
                  } else {
                     this.getMessagesList()//执行【获取消息列表】
                  }
               })
            }
         }
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/

      created() {
         loading(this) //加载loading
         this.getMessagesList(); //执行【获取消息列表】
         let messageId = this.$route.query.id;
         // console.log('messageId', messageId);
         let that = this;
         if (messageId !== undefined) {
            this.notice.messageList.forEach((item) => {
               if (item.FID === messageId) {
                  that.$notify({
                     title: '当前信息',
                     message: item.CFREMARKS,
                     duration: 0
                  });
               }
            })
         }
      },

      destroyed() {
         this.getMessagesList = null;
      }
   }
</script>

<style lang="scss" scoped>
   @import "../../assets/styles/common.scss";

   .message_box {
      background-color: #fff;
      margin: 0 auto 10px;
      .message_list {
         width: calc(100% - 40px);
         height: auto;
         overflow: hidden;
         margin: 0 20px 5px;
         position: relative;

         em {
            width: 8px;
            height: 8px;
            margin: 6px 5px 0 0;
            display: inline-block;
            border-radius: 100%;
            /*background-color: #FF0000;*/
            /*float: left;*/
         }
         span {
            /*width: 250px;*/
            height: 20px;
            line-height: 20px;
            display: inline-block;
            overflow: hidden;
            /*text-overflow: ellipsis;*/
            /*white-space: nowrap;*/
            /*float: left;*/
            &::after {
               content: "...";
               width: auto;
               height: 20px;
               line-height: 20px;
               text-indent: 10px;
               font-weight: bold;
               display: inline-block;
               position: absolute;
               top: 0;
               right: 0;
               background-color: #fff;
               color: #333333;
            }
            &.active {
               height: auto;
               overflow: auto;
               white-space: normal;
               &::after {
                  display: none;
               }
            }
         }
      }
   }

   /*.message_list {
      width: 100%;
      padding: 10px 0;
      display: inline-flex;
      @extend .flexNC;
      & + .message_list {
         border-top: 1px solid #dddddd;
      }

      img {
         width: 40px;
         height: 40px;
         margin-left: 10px;
      }
      main {
         height: 60px;
         flex: 1;
         @extend .flexCN, .flexV;
         div {
            width: calc(100% - 10px);
            height: 20px;
            line-height: 20px;
            margin-left: 10px;
         }

      }
      time {
         width: auto;
         height: 60px;
         line-height: 60px;
         margin-right: 10px;
         display: inline-block;
         vertical-align: top;
         span {
            display: inline-block;
            vertical-align: middle;
         }
      }
   }*/
</style>

<style lang="scss">
   @import "../../assets/styles/message.scss";

   .message_box {
      .el-collapse {
         .el-collapse-item {
            .el-collapse-item__header {
               padding-left: 20px;
               position: relative;
               img {
                  vertical-align: middle;
               }
               .unread_num {
                  position: absolute;
                  top: -5px;
                  left: 5px;
                  /*width: 10px;*/
                  /*height: 10px;*/
                  /*line-height: 10px;*/
                  /*text-align: center;*/
                  /*border-radius: 100%;*/
                  /*background-color: #ff0000;*/
                  /*color: #ffffff;*/
                  /*font-size: 12px;*/
               }
               span {
                  /*font-size: 16px;*/
                  font-weight: normal;
                  font-stretch: normal;
                  letter-spacing: 0px;
                  color: #3e4a59;
                  opacity: 0.7;
                  margin: 0 0 0 5px;
                  vertical-align: middle;
               }
               .el-collapse-item__arrow {
                  margin-right: 20px;
               }
            }
            /*.el-collapse-item__content {
               div {
                  margin: 0;
               }
            }*/
         }
      }
   }
</style>