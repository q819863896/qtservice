<template>
   <section class="container">
      <div class="title">退费协议审批流程</div>
      <!---------------------------------------------------------------------------------------------------------------->
      <div class="sub_title">
         <div class="sub_title_content">客户信息</div>
      </div>

      <div class="sub_content">
         <div class="sub_content_title">委托人</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt">{{bizDataInfo.principal}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">代理人</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.agent}}
            </div>
         </div>
      </div>
      <!---------------------------------------------------------------------------------------------------------------->
      <div class="sub_title">
         <div class="sub_title_content">协议内容</div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">协议编号</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.number}}11111111111111111111111111111111111111
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">业务日期</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.bizDate?bizDataInfo.bizDate.substring(0,10):""}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">终止合同</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.endContract?'已终止合同':'未终止合同'}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">转签合同</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.transfer?'已转签合同':'未转签合同'}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">存在客诉</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.hasKS?'存在客诉情况':'未存在客诉情况'}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">标准扣除合同金额</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.deductAmtBZ}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">退还总金额</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.refundAmt}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">退还服务费金额</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.refundSerAmt}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">退多收服务费</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.refundOverAmt}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">退还代收代付</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.refundPayCol}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">代收款余额</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.collectAmt}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">已收服务费总额</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.serviceCharge}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">扣除合同金额</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.deductAmt}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">预付成本金额</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.yfcbAmount}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">报完成成本金额</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.ybwccbAmount}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">报完成收入金额</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.ybwcsrAmount}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">退费申请</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.agreement}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">签约金额</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.signAmt}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">合同签约顾问</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.signPerson?bizDataInfo.signPerson.name.l2:""}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">协议说明</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt">{{bizDataInfo.agreeDesc}}
            </div>
         </div>
      </div>
      <!---------------------------------------------------------------------------------------------------------------->
      <div class="sub_title">
         <div class="sub_title_content">退费内容</div>
      </div>

      <div class="sub_content">
         <div class="sub_content_title">收款人</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt">{{bizDataInfo.receivePerson}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">收款银行</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.receiveBank}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">收款人电话</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.receiveTel}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">收款账号</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.receiveAccount}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">合同</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.contract?bizDataInfo.contract.number:""}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">合同名称</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.contractName}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">产品类型</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.productType?bizDataInfo.productType.name.l2:""}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">业务条线</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.bizLine?bizDataInfo.bizLine.name.l2:""}}
            </div>
         </div>
      </div>
      <!---------------------------------------------------------------------------------------------------------------->
      <div v-if="bizDataInfo.transfer">
         <div class="sub_title">
            <div class="sub_title_content">转签合同</div>
         </div>
         <div class="sub_content">
            <div class="sub_content_title">转代收费</div>
            <div class="sub_content_info">
               <div class="sub_content_info_txt"> {{bizDataInfo.tranDaiFee}}
               </div>
            </div>
         </div>
         <div class="sub_content">
            <div class="sub_content_title">已发生成本</div>
            <div class="sub_content_info">
               <div class="sub_content_info_txt"> {{bizDataInfo.costAmount}}
               </div>
            </div>
         </div>
         <div class="sub_content">
            <div class="sub_content_title">转服务费</div>
            <div class="sub_content_info">
               <div class="sub_content_info_txt"> {{bizDataInfo.tranSerFee}}
               </div>
            </div>
         </div>
         <div class="sub_content">
            <div class="sub_content_title">转签合同信息</div>
            <div class="sub_content_info">
               <div class="sub_content_info_txt"> {{bizDataInfo.newConMess}}
               </div>
            </div>
         </div>
         <div class="sub_content">
            <div class="sub_content_title">新合同号</div>
            <div class="sub_content_info">
               <div class="sub_content_info_txt"> {{bizDataInfo.newContract?bizDataInfo.newContract.number:""}}
               </div>
            </div>
         </div>
      </div>
      <!---------------------------------------------------------------------------------------------------------------->
      <div class="sub_title" v-if="attchFileList.length">
         <div class="sub_title_content">附件</div>
      </div>

      <div class="file_info" v-if="attchFileList.length">
         <div class="file_info_title">下载附件：</div>
         <div class="file_list" v-for="(item,index) in attchFileList" :key="index">
            <div style="font-style: italic" @click.prevent="downAttachFile(item.attaId,item.fileName)">{{item.fileName}}&nbsp;&nbsp;{{item.fileSize}}</div>
         </div>
      </div>
      <!---------------------------------------------------------------------------------------------------------------->
      <div class="sub_title">
         <div class="sub_title_content">审批纪录</div>
      </div>
      <el-collapse v-model="activeName" class="discount_collapse">
         <el-collapse-item name="1" title="查看审批意见">
            <div class="suggest_infos" v-for="(item ,index) in multiAppList" :key="index" v-if="multiAppList.length">
               <div class="suggest_infos_list">审批人:<span>{{item.auditPerson}}</span></div>
               <div class="suggest_infos_list">任务名称:<span>{{item.missionName}}</span></div>
               <div class="suggest_infos_list">审批结果:<span>{{item.auditResult}}</span></div>
               <div class="suggest_infos_list">审批时间:<span>{{item.auditDate.substring(0,10)}}</span></div>
               <div class="suggest_infos_message">审批意见: <p>{{item.auditAdvice}}</p></div>
            </div>
            <div class="warm_hint" v-if="!multiAppList.length">暂无记录信息!</div>
         </el-collapse-item>
      </el-collapse>

      <div class="discount" v-if="bizDataInfo.isdb!=='1'">
         <div class="discount_title">审批意见</div>
         <el-input class="discount_area" type="textarea" :rows="3" maxlength="200" v-model="checkSuggest"></el-input>
         <div class="button_groups">
            <el-button type="primary" @click.prevent="toApproval(true)" :loading="loading">同意</el-button>
            <el-button type="danger" @click.prevent="toApproval(false)" :loading="loading">不同意</el-button>
         </div>
      </div>
   </section>
</template>

<script lang="ts">
   import {requestToken, getparam, approval} from "../../api";
   import {systemTimeout, approveSuccess} from "../../assets/js/variousHint";
   import {urlParse} from "../../assets/js/urlToJson";
   import axios from "axios";

   export default {
      name: "Discounts",
      data() {
         return {
            activeName: "1",
            checkSuggest: "",
            bizDataInfo: {},
            attchFileList: [],
            multiAppList: [],
            assignId: "",
            auditor: "",
            loading: false
         }
      },

      methods: {
         getParamData(assignId, bizMark) {
            let params = {
               // assignId: "4b95fb1f-bdcd-45b9-aa9f-55936cf5477dWFWKITEM",
               // assignId: "5923a106-72ed-440c-b9a3-dba8d9769c0dWFWKITEM",
               // assignId: "215c7013-5b3d-49a7-9080-48c3bbf0f3f7WFWKITEM",
               //assignId : "a68da4ec-3433-4942-90a6-d52f97b48d58WFWKITEM",
               // bizMark: "billObject",
               // bizMark: "getBillMess",
               assignId,
               bizMark,
            };
            getparam(this.tokenSingle, params).then(res => {
               let {datas, message, status} = res;
               let jsonData = JSON.parse(datas);
               console.log(jsonData);
               if (status !== 0) {
                  systemTimeout(status, message);
               } else {
                  if (jsonData.data.status !== "1") {
                     systemTimeout(status, message);
                  } else {
                     if (bizMark === "billObject") {
                        this.bizDataInfo = jsonData.data.bizDataInfo;
                     } else if (bizMark === "getBillMess") {
                        this.attchFileList = jsonData.data.attchFileList;
                        this.multiAppList = jsonData.data.multiAppList;
                     }
                  }
               }
            })
         },

         toApproval(isAgree) {
            let params = {
               // assignId: "4b95fb1f-bdcd-45b9-aa9f-55936cf5477dWFWKITEM",
               // auditor: "v_ligaoyang",
               assignId: this.assignId,
               auditor: this.auditor,
               approveDesc: this.checkSuggest,
               isAgree,
            };
            let that = this;
            this.loading = true;
            approval(this.tokenSingle, params).then(res => {
               let {datas, message, status} = res;
               let jsonData = JSON.parse(datas);
               if (status !== 0) {
                  systemTimeout(status, message);
               } else {
                  let {error, status} = jsonData;
                  if (status !== "1") {
                     systemTimeout(status, error);
                  } else {
                     approveSuccess();
                     that.getParamData(that.assignId, "billObject");  //附件以下数据
                  }
               }
               this.loading = false;
            })
         },

         downAttachFile(id, name) {
            console.log(id, name);
            // let disUrl = window.location.host;
            this.downUrl = `${axios.defaults.baseURL}/mo/ybg/attachDown?bizMark=getAttcFilePath&assignId=${id}`;
            window.location = this.downUrl;
            // this.downUrlInput = "urlInput" + id;
            //
            // //分享链接
            // console.log(" this.downUrlInput", this.downUrlInput);
            //
            //
            // let urlInput = 'urlInput' + id;
            // // urlInput = eval('urlInput' + id);
            // // var urlInput = new Function('urlInput' + id)()
            // // console.log("urlInput", urlInput);
            //
            //
            // this.$refs[urlInput][0].select();
            // document.execCommand("Copy");
            //
            // this.$message({
            //     showClose: true,
            //     message: '您已成功复制链接！请去浏览器下载！',
            //     type: 'success'
            // });
            // //type = txt xlsx xls docx doc pdf
            //
            // let typeSting = type.toString(), doc = typeSting.includes("doc"), txt = typeSting.includes("txt"), xls = typeSting.includes("xls"), pdf = typeSting.includes("pdf"), img = typeSting.includes("pg");
            //
            // let Mime;
            // // Mime = "application/pdf";
            // if (doc) {
            //     Mime = "application/msword"
            // } else if (txt) {
            //     Mime = "text/plain"
            // } else if (xls) {
            //     Mime = "application/vnd.ms-excel"
            // } else if (pdf) {
            //     Mime = "application/pdf"
            // } else if (img) {
            //     Mime = "image/png";
            // }
            //
            // let param = new URLSearchParams();
            // // param.append("attaId", "P24AAAASuIj0r08D");
            // // param.append("attaId", "P24AAAAWVs30r08D");
            // param.append("attaId", id);
            // downFile(param).then(res => {
            //     let url = window.URL.createObjectURL(new Blob([res], {type: Mime}));
            //     let link = document.createElement('a');
            //     link.href = url;
            //     // window.location = url;
            //     // link.setAttribute('download', name);
            //     link.setAttribute('download', name + '.' + type);
            //     document.body.appendChild(link);
            //     link.click()
            // })
         }

      },

      created() {
         this.tokenSingle = sessionStorage.getItem('tokenSingle');
      },

      mounted() {
         let urlParams = urlParse(window.location.href);
         this.assignId = urlParams.assignId;
         this.auditor = urlParams.auditor;

         this.getParamData(urlParams.assignId, "billObject"); //附件以上数据
         this.getParamData(urlParams.assignId, "getBillMess");  //附件以下数据

         /*
            this.getParamData("215c7013-5b3d-49a7-9080-48c3bbf0f3f7WFWKITEM", "billObject"); //附件以上数据
            this.getParamData("215c7013-5b3d-49a7-9080-48c3bbf0f3f7WFWKITEM", "getBillMess");  //附件以下数据
         */

         let content = document.querySelectorAll('.container .sub_content .sub_content_info .sub_content_info_txt');

         for (let i = 0; i < content.length; i++) {
            if (content[i].innerHTML !== '') {
               if (content[i].innerHTML.length > 20) {
                  content[i].classList.add('active');
               }
            }
         }
      },

      destroyed() {
         this.getParamData = null;
         this.toApproval = null;
      }
   }
</script>

<style lang="scss" scoped>
   @import "../../assets/styles/common.scss";

   /*.title {
      background-color: #ffffff;
      border-bottom: 1px solid #ebebeb;
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
      color: #51C4D4;
      font-size: 18px;
   }

   .sub_title {
      height: 26px;
      border-bottom: 1px solid #51C4D4;
      background-color: #F8F7F6;
      font-weight: 700;
      .sub_title_content {
         background-color: #51C4D4;
         height: 21px;
         width: 32%;
         line-height: 21px;
         overflow: hidden;
         !*float: left;*!
         !* transform: skew(30deg, 0deg); *!
         !* margin-left: -15px; *!
         color: #ffffff;
         padding-left: 20px;
         padding-top: 5px;
         position: relative;
         &:after {
            content: "";
            width: 30px;
            height: 30px;
            display: block;
            background: #F8F7F6;
            transform: skew(30deg, 0);
            -webkit-transform: skew(30deg, 0);
            position: absolute;
            top: 0;
            right: -20px;
         }
      }
   }

   .sub_content {
      height: 15px;
      padding: 13px 25px 13px 25px;
      background-color: #FFFFFF;
      border-bottom: 1px solid #DDDDDD;
      overflow: hidden;
      .sub_content_title {
         float: left;
         color: #B6B6B6;
      }
      .sub_content_info {
         float: right;
         text-align: right;
         width: 68%;
         overflow: hidden;
         text-overflow: ellipsis;
         white-space: nowrap;
      }
   }

   !*附件下载*!
   .file_info {
      border-top: 1px solid #51C4D4;
      background-color: #FFFFFF;
      !* height: 60px; *!
      border-bottom: 1px solid #DDDDDD;
      .file_info_title {
         width: 85%;
         color: #B6B6B6;
         margin: 0 auto;
      }
   }

   !*审批记录*!
   .suggest_infos {
      width: 85%;
      height: auto;
      overflow: hidden;
      display: block;
      margin: 20px auto;
      .suggest_infos_list {
         width: 50%;
         height: 25px;
         display: block;
         float: left;
      }
      .suggest_infos_message {
         !*height: 25px;*!
         p {
            margin: 5px 0 0 0;
            line-height: 20px;
         }
      }
   }

   .discount {
      .discount_title {
         width: 85%;
         display: block;
         margin: 20px auto 5px;
      }

      .discount_area {
         width: 85%;
         display: block;
         margin: 0 auto 30px;
         border: 1px solid #DDDDDD;
         background-color: #ffffff;
      }

      .button_groups {
         width: 100%;
         !*height: 50px;*!
         background: #EEEEEE;
         border-top: 1px solid #DDDDDD;
         text-align: center;
         margin: 0;
         button {
            width: 80px;
            margin: 10px 20px;
         }
      }
   }*/
</style>

<style lang="scss">
   @import "../../assets/styles/protocol.scss";
   @import "../../assets/styles/message.scss";

   /* !*审批意见*!
    .discount_collapse {
       !*height: 27px;*!
       .el-collapse-item {
          .el-collapse-item__header {
             height: 15px;
             line-height: 15px;
             padding: 13px 25px 13px 25px;
             border-bottom: 1px solid #DDDDDD;
             color: #B6B6B6;
          }

          .el-collapse-item__content {
             padding-bottom: 0;
          }

          .el-collapse-item__arrow {
             line-height: 15px;
          }
       }
    }*/
</style>
