<template>
   <section class="container">
      <div class="title">报完成审批流程</div>
      <!---------------------------------------------------------------------------------------------------------------->
      <div class="sub_title">
         <div class="sub_title_content">基本信息</div>
      </div>

      <div class="sub_content">
         <div class="sub_content_title">单据编号</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.number}}</div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">公司</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt">{{bizDataInfo.company?bizDataInfo.company.name.l2:""}}</div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">申请部门</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.applyDept?bizDataInfo.applyDept.name.l2:""}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">职位</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.position?bizDataInfo.position.name.l2:""}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">申请人</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.applyPerson?bizDataInfo.applyPerson.name.l2:""}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">支付类型</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.payTyper?bizDataInfo.payTyper.alias:""}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">付款对象</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.paymentObject?bizDataInfo.paymentObject.alias:""}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">供应商</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.supplierCompany?bizDataInfo.supplierCompany.name.l2:""}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">付款银行账号</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.payAccountNum}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">付款银行</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.payBank}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">金额</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.amountTotal}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">单据状态</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.billStatus?bizDataInfo.billStatus.alias:""}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">源单类型</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.sourceBillType?bizDataInfo.sourceBillType.alias:""}}
            </div>
         </div>
      </div>
      <div class="sub_content">
         <div class="sub_content_title">税率</div>
         <div class="sub_content_info">
            <div class="sub_content_info_txt"> {{bizDataInfo.rated}}
            </div>
         </div>
      </div>

      <el-table class="school_info" :data="bizDataInfo.entrys" border style="width: 100%" size="mini" :header-cell-style="{background:'#51C4D4',textAlign:'center',padding:0}">
         <el-table-column label="合同流水号" prop="contract.number" min-width="50px"></el-table-column>
         <el-table-column label="客户名称" prop="customer" min-width="50px"></el-table-column>
         <el-table-column label="承担方" prop="undertaking.name.l2" min-width="50px"></el-table-column>
         <el-table-column label="费用类型" prop="feeType.name.l2" min-width="50px"></el-table-column>
         <el-table-column label="金额" prop="amount" min-width="50px"></el-table-column>
      </el-table>
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
      name: "Approve",
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
               // console.log(jsonData)
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

         for(let i=0;i<content.length;i++){
            if( content[i].innerHTML!==''){
               if(content[i].innerHTML.length>20){
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

   /*  .title {
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

     .file_info {
        border-top: 1px solid #51C4D4;
        background-color: #FFFFFF;
        !* height: 60px; *!
        border-bottom: 1px solid #DDDDDD;
     }

     .require_info {
        background-color: #FFFFFF;
        !*padding-top: 20px;*!
        padding-bottom: 20px;
        border-bottom: 1px solid #DDDDDD;
        width: 85%;
        height: auto;
        overflow: hidden;
        display: block;
        margin: 20px auto;
        span {

        }
        .require_info_area {
           margin-top: 10px;
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
           width: 70%;
           overflow: hidden;
           text-overflow: ellipsis;
           white-space: nowrap;
        }
     }

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

     .discount_area {
        width: 85%;
        display: block;
        margin: 20px auto;
        border: 1px solid #DDDDDD;
        background-color: #ffffff;
     }

     .button_groups {
        width: 100%;
        background: #EEEEEE;
        border-top: 1px solid #DDDDDD;
        text-align: center;
        button {
           width: 80px;
        }
     }*/


</style>

<style lang="scss">
   @import "../../assets/styles/protocol.scss";
   @import "../../assets/styles/message.scss";
   /*!*审批意见*!*/
   /*.discount_collapse {*/
   /*!*height: 27px;*!*/
   /*.el-collapse-item {*/
   /*.el-collapse-item__header {*/
   /*height: 15px;*/
   /*line-height: 15px;*/
   /*padding: 13px 25px 13px 25px;*/
   /*border-bottom: 1px solid #DDDDDD;*/
   /*}*/
   /*.el-collapse-item__arrow {*/
   /*line-height: 15px;*/
   /*}*/
   /*}*/
   /*}*/

   /*.school_info th div {*/
   /*padding: 0;*/
   /*}*/
</style>
