<template>
   <section class="page">
      <div class="compact_infos">
         <!--<div class="compact_time">{{item.time}}</div>-->
         <!--<router-link :to="'/process/compact/detail?id='+encodeURIComponent(item.ID)" v-for="(item,index) in compact" :key="index">-->
         <div class="compact_list" v-for="(item,index) in compact" :key="index" @click.prevent="navigatorTo(item.ID)">
            <p>
               <span>{{item.CONTRACTNAME}}</span>
               <span>{{item.BILLNUMBER}}</span>
            </p>
            <i class="iconfont icon-icon1"></i>
         </div>
         <!--</router-link>-->
      </div>
   </section>
</template>

<script>
   import {contractList, noSignContractList} from "../../../api.js"
   import {systemTimeout, confirmHint, cancelHint} from "../../../assets/js/variousHint.js";
   import {loading, closeLoading} from "../../../assets/js/loading.js";

   export default {
      name: "Compact",

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            /*compact: [{
               time: "2018",
               infos: [{
                  value: "第三批分公司测试模板二--美本条线",
                  mark: "MB201801049",
               }]
            }, {
               time: "2017",
               infos: [{
                  value: "2018 加拿大本科全程合同-顶级名校CA-0A5117004",
                  mark: "BJJND201712017",
               }, {
                  value: "2016北京美本青年导师合同-基础模块",
                  mark: "BJMB201708145",
               }]
            }]*/
            compact: [],
            whatPage: "",             // 来源page
            serviceId: "",            // 存储服务详情id
            contractClass: undefined, // 区分合同类型
         }
      },

      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         //获取合同列表
         getContractList() {
            let param = new URLSearchParams();
            if (this.contractClass !== undefined) param.append("contractClass", "0");

            contractList(param).then((res) => {
               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  this.compact = datas.contractList;
                  closeLoading(this) //关闭loading
               }
            })
         },

         //跳转页面
         navigatorTo(contractId) {
            if (this.whatPage === "1") {
               this.$confirm("确定选择本条合同?", "选择提示", {
                  confirmButtonText: "确定",
                  cancelButtonText: "取消",
                  type: "warning"
               }).then(() => {
                  confirmHint();
                  setTimeout(() => {
                     // id = serveId 服务id    id1 = contractId 合同id  is = isExecuteMethod 调用选择方法
                     this.$router.push({path: "/index/service/detail", query: {id: this.serviceId, id1: encodeURIComponent(contractId), is: encodeURIComponent(1)}})
                  }, 1000)
               }).catch(() => {
                  cancelHint()
               })
            } else {
               this.$router.push({path: "/process/compact/detail", query: {id: encodeURIComponent(contractId)}})
            }
         },
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         loading(this) //加载loading


         //获取是那个进入页面 调用不同方法 id1 = pageId serviceDetail
         // id2 = serviceId 服务id
         // contractClass = 0  获取不同的合同类型
         this.whatPage = this.$route.query.id1;
         this.serviceId = this.$route.query.id2;
         this.contractClass = this.$route.query.id;
         console.log(" this.contractClass", this.contractClass)

         this.getContractList(); //执行【获取合同列表】
      },

      destroyed() {
         this.getContractList = null;
      }
   }
</script>

<style lang="scss" scoped>
   @import "../../../assets/styles/common.scss";

   .compact_infos{
      width: 100%;
      background: #fff;
      .compact_time{
         width: 100%;
         height: 30px;
         line-height: 30px;
      }

      .compact_list{
         width: 100%;
         display: inline-flex;
         /* margin: 10px 0;
            height: 50px;*/
         margin: 0 0 10px;
         padding: 10px 0;
         position: relative;
         background-color: #fff;
         box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.12);

         &::before{
            content: "";
            width: 4px;
            height: 100%;
            background-image: linear-gradient(180deg, #4ce0cc 0%, #35c5b1 58%, #1daa95 100%), linear-gradient(#959595, #959595);
            background-blend-mode: normal, normal;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
         }
         p{
            margin: 0 0 0 10px;
            vertical-align: middle;
            @extend .flexCN, .flexV;
            span{
               display: block;
            }
         }
         i{
            height: auto;
            margin: 0 20px 0 auto;
            transform: translateY(35%);
            -webkit-transform: translateY(35%);
            -moz-transform: translateY(35%);
         }
      }
   }
</style>

<style lang="scss">
   @import "../../../assets/styles/message.scss";
</style>