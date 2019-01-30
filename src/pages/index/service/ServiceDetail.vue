<template>
   <section class="page" :style="{height:$store.state.winH+'px',paddingTop:1+'px'}">
      <el-card body-style="padding:10px" class="service_detail">
         <!--<div slot="header" class="s_c_header">
            <span>{{item.CFNAME}}</span>
            <span>{{item.UNITNAME}}</span>
         </div>-->

         <div class="s_c_header">
            <span>{{serveDetail.CFNAME}}</span>
         </div>

         <div class="s_c_content">
            <span>{{serveDetail.CFSERVICEFLOW}}</span>
            <p>{{serveDetail.CFSERVICEPRO}}</p>
         </div>

         <footer class="s_c_footer">
            <el-button @click="backTo">取消</el-button>
            <el-button @click.prevent="navigatorTo" :disabled="serveDetail.cfuserstatus!=='0'">
               <span v-if="serveDetail.cfuserstatus==='0'">选择</span>
               <span v-else>已选</span>
            </el-button>
         </footer>
      </el-card>
   </section>
</template>

<script>
   import {serviceDetail, choiceService} from "../../../api.js"
   import {systemTimeout} from "../../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../../assets/js/loading.js";

   export default {
      name: "ServiceDetail",

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            serveDetail: {},
            isSelect: true,
            serviceId: "",//服务id
         }
      },

      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         //获取服务详情
         getServiceDetail(serviceId) {
            let param = new URLSearchParams();
            // param.append("id", "WkaUxosTSxaQ6SREI8pjCAJld0A=");
            param.append("id", serviceId);
            serviceDetail(param).then(res => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  this.serveDetail = datas;
                  closeLoading(this) //关闭loading
               }
            })
         },

         //选择服务
         postChoiceService() {
            let params = {
               fwid: decodeURIComponent(this.$route.query.id),
               contractId: decodeURIComponent(this.$route.query.id1),
            };
            choiceService(params).then(res => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  this.getServiceDetail(this.serviceId)
               }
            })
         },

         //跳转页面
         navigatorTo() {
            // id1 = pageId 区分那个页面    id2 = serviceId 服务id
            this.$router.push({path: "/process/compact/index", query: {id1: encodeURIComponent(1), id2: this.$route.query.id}})
         },

         //返回上级页面
         backTo() {
            // this.$router.go(-1);
            this.$router.push({path: "/index/service"})
         }
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         loading(this) //加载loading
         this.serviceId = this.$route.query.id;
         let isExecuteMethod = this.$route.query.is; // is=1 调用选择方法
         this.getServiceDetail(this.serviceId); //执行【获取服务详情】
         if (isExecuteMethod === "1") {
            this.postChoiceService();
            console.log("1")
         }
      },

      destroyed() {
         this.getServiceDetail = null;
      }
   }
</script>

<style lang="scss" scoped>
   @import "../../../assets/styles/common.scss";

   .service_detail{
      width: calc(100% - 20px);
      margin: 10px auto 0;
      border-radius: 10px;
      .el-card__body{
         padding: 20px;
      }
   }

   /*.s_c_header {
      width: calc(100% + 20px);
      margin: 0 -10px;
      display: inline-flex;
      span {
         display: inline-block;
         &:nth-of-type(1) {
            margin: 0
         }
         &:nth-of-type(2) {
            margin: 0 0 0 auto;
         }
      }
   }*/

   .s_c_header{
      width: 100%;
      /*height: 20px;*/
      font-size: 18px;
      font-weight: normal;
      font-stretch: normal;
      /*line-height: 24px;*/
      letter-spacing: 0px;
      color: #373f4a;
      margin: 10px auto 20px;
      position: relative;
      span{
         margin-left: 10px;
         vertical-align: top;
      }
      &::before{
         content: "";
         width: 4px;
         height: 19px;
         background-color: #1daa95;
         display: block;
         position: absolute;
         left: 0;
         top: 0;
      }
   }

   .s_c_content{
      p{
         color: #8795a8;
      }
   }

   .s_c_footer{
      width: 100%;
      display: inline-flex;
      border: 2px solid #1DAA95;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      overflow: hidden;
      button{
         width: 50%;
         float: left;
         border: none;
         border-radius: 0;
         font-size: 18px;
         &:nth-of-type(1){
            margin: 0;
         }
         &:nth-of-type(2){
            margin: 0 0 0 auto;
            background-color: #1DAA95;
            color: #fff;
         }
      }
   }
</style>

<style lang="scss">
   @import "../../../assets/styles/message.scss";
</style>