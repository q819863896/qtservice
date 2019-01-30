// import login from "./pages/Login.vue"
// import notFound from "./pages/404.vue"
// import home from "./pages/Home.vue"

/*************************************************************************************************************************************************
 * 账户
 *************************************************************************************************************************************************/
const login = r => require.ensure([], () => r(require("./pages/account/Login.vue")), "login");
const videoLogin = r => require.ensure([], () => r(require("./pages/account/VideoLogin.vue")), "videoLogin");
const password = r => require.ensure([], () => r(require("./pages/account/Password.vue")), "password");


/*************************************************************************************************************************************************
 * 主页
 *************************************************************************************************************************************************/
const home = r => require.ensure([], () => r(require("./pages/Home.vue")), "home");


/*************************************************************************************************************************************************
 * 404
 *************************************************************************************************************************************************/
const notFound = r => require.ensure([], () => r(require("./pages/404.vue")), "notFound");

/*************************************************************************************************************************************************
 * error
 *************************************************************************************************************************************************/
const error = r => require.ensure([], () => r(require("./pages/Error.vue")), "error");

/*************************************************************************************************************************************************
 * foot
 *************************************************************************************************************************************************/
const foot = r => require.ensure([], () => r(require("./pages/Foot.vue")), "foot");


/*************************************************************************************************************************************************
 * 首页
 *************************************************************************************************************************************************/
const indexMain = r => require.ensure([], () => r(require("./pages/index/IndexMain.vue")), "indexMain");
const index = r => require.ensure([], () => r(require("./pages/index/Index.vue")), "index");

const serviceMain = r => require.ensure([], () => r(require("./pages/index/service/ServiceMain.vue")), "serviceMain");
const service = r => require.ensure([], () => r(require("./pages/index/service/Service.vue")), "service");
const serviceDetail = r => require.ensure([], () => r(require("./pages/index/service/ServiceDetail.vue")), "serviceDetail");

const schoolMain = r => require.ensure([], () => r(require("./pages/index/school/SchoolMain.vue")), "schoolMain");
const school = r => require.ensure([], () => r(require("./pages/index/school/School.vue")), "school");
const schoolIntro = r => require.ensure([], () => r(require("./pages/index/school/SchoolIntro.vue")), "schoolIntro");

const paymentMain = r => require.ensure([], () => r(require("./pages/index/payment/PaymentMain.vue")), "paymentMain");
const payment = r => require.ensure([], () => r(require("./pages/index/payment/Payment.vue")), "payment");
const paymentDetail = r => require.ensure([], () => r(require("./pages/index/payment/PaymentDetail.vue")), "paymentDetail");
// const paymentLink = r => require.ensure([], () => r(require("./pages/index/payment/PaymentLink.vue")), "chunkName132");
const paymentOrder = r => require.ensure([], () => r(require("./pages/index/payment/PaymentOrder.vue")), "paymentOrder");
const paymentBack = r => require.ensure([], () => r(require("./pages/index/payment/PaymentBack.vue")), "paymentBack");


const signatureMain = r => require.ensure([], () => r(require("./pages/index/signature/SignatureMain.vue")), "signatureMain");
const signature = r => require.ensure([], () => r(require("./pages/index/signature/Signature.vue")), "signature");
const signatureLink = r => require.ensure([], () => r(require("./pages/index/signature/SignatureLink.vue")), "signatureLink");


/*************************************************************************************************************************************************
 * 进程
 *************************************************************************************************************************************************/
const processMain = r => require.ensure([], () => r(require("./pages/process/ProcessMain.vue")), "processMain");
const process = r => require.ensure([], () => r(require("./pages/process/Process.vue")), "process");
// const attachDown = r => require.ensure([], () => r(require("./pages/process/AttachDown.vue")), "attachDown");

const compactMain = r => require.ensure([], () => r(require("./pages/process/compact/CompactMain.vue")), "compactMain");
const compact = r => require.ensure([], () => r(require("./pages/process/compact/Compact.vue")), "compact");
const compactDetail = r => require.ensure([], () => r(require("./pages/process/compact/CompactDetail.vue")), "compactDetail");
const compactPDF = r => require.ensure([], () => r(require("./pages/process/compact/CompactPDF.vue")), "compactPDF");


/*************************************************************************************************************************************************
 * 消息
 *************************************************************************************************************************************************/
const message = r => require.ensure([], () => r(require("./pages/message/Message.vue")), "message");


/*************************************************************************************************************************************************
 * 我的
 *************************************************************************************************************************************************/
const mine = r => require.ensure([], () => r(require("./pages/mine/Mine.vue")), "mine");
const personalInfo = r => require.ensure([], () => r(require("./pages/mine/PersonalInfo.vue")), "personalInfo");


/*************************************************************************************************************************************************
 * 云办公
 *************************************************************************************************************************************************/
const discounts = r => require.ensure([], () => r(require("./pages/protocol/Discounts.vue")), "discounts");
const backCost = r => require.ensure([], () => r(require("./pages/protocol/BackCost.vue")), "backCost");
const selectSchool = r => require.ensure([], () => r(require("./pages/protocol/SelectSchool.vue")), "selectSchool");
const supplement = r => require.ensure([], () => r(require("./pages/protocol/Supplement.vue")), "supplement");
const approve = r => require.ensure([], () => r(require("./pages/protocol/Approve.vue")), "approve");
const indexCloud = r => require.ensure([], () => r(require("./pages/protocol/IndexCloud.vue")), "indexCloud");


/*************************************************************************************************************************************************
 * 问卷调查
 *************************************************************************************************************************************************/
const questionnaire = r => require.ensure([], () => r(require("./pages/questionnaire/Questionnaire.vue")), "questionnaire");
const answerSuccess = r => require.ensure([], () => r(require("./pages/questionnaire/AnswerSuccess.vue")), "answerSuccess");

const score = r => require.ensure([], () => r(require("./pages/score/Score.vue")), "score");
const scoreSuccess = r => require.ensure([], () => r(require("./pages/score/ScoreSuccess.vue")), "scoreSuccess");


/*************************************************************************************************************************************************
 * 视频
 *************************************************************************************************************************************************/
const video = r => require.ensure([], () => r(require("./pages/video/Video.vue")), "video");
const pdfViewer = r => require.ensure([], () => r(require("./pages/video/PdfViewer.vue")), "pdfViewer");
const linkViewer = r => require.ensure([], () => r(require("./pages/video/LinkViewer.vue")), "linkViewer");


let routes = [
   {
      path: "/login", component: login, name: "登录", hidden: true
   },
   {
      path: "/videologin", component: videoLogin, name: "视频登录", hidden: true
   },
   {
      path: "/password", component: password, name: "修改密码", hidden: true
   },
   {
      path: "/404", component: notFound, name: "404", hidden: true
   },
   {
      path: "/error", component: error, name: "error", hidden: true
   },
   {
      path: "*", hidden: true, redirect: {path: "/404"}
   },
   {
      path: "/indexcloud", component: indexCloud, name: "云办公index", hidden: true
   },
   {
      path: "/discounts", component: discounts, name: "优惠协议", hidden: true
   },
   {
      path: "/backcost", component: backCost, name: "退费协议", hidden: true
   },
   {
      path: "/selectschool", component: selectSchool, name: "选校信息", hidden: true
   },
   {
      path: "/supplement", component: supplement, name: "补充协议", hidden: true
   },
   {
      path: "/approve", component: approve, name: "费用审批", hidden: true
   },
   {
      path: "/questionnaire", component: questionnaire, name: "问卷调查", hidden: true
   },
   {
      path: "/answersuccess", component: answerSuccess, name: "问卷调查", hidden: true
   },
   {
      path: "/score", component: score, name: "问卷调查", hidden: true
   },
   {
      path: "/scoresuccess", component: scoreSuccess, name: "问卷调查", hidden: true
   },
   {
      path: "/video", component: video, name: "视频", hidden: true
   },
   {
      path: "/pdfviewer", component: pdfViewer, name: "PDF浏览", hidden: true
   },
   {
      path: "/linkviewer", component: linkViewer, name: "文章浏览", hidden: true
   },
   {
      path: "/personalinfo", component: personalInfo, name: "个人信息", hidden: true
   },
   {
      path: "/", component: home, name: "主页",
      children: [
         {
            path: "/index", components: {default: indexMain, foot: foot}, icon: 'iconfont icon-index', name: "首页",
            children: [
               {
                  path: "/", component: index, grandson: false, url: "../../assets/images/index/icon1.png",
               },
               {
                  path: "/index/process", component: process, name: "申请进度", grandson: true, url: "/qtservice/images/process.png",
               },
               {
                  path: "/index/service", component: serviceMain, name: "后续服务", grandson: true, url: "/qtservice/images/serve.png",
                  children: [
                     {
                        path: "/", component: service, grandson: false,
                     },
                     {
                        path: "/index/service/detail", component: serviceDetail, grandson: false,
                     },
                  ]
               },
               {
                  path: "/index/school", component: schoolMain, name: "选校信息", grandson: true, url: "/qtservice/images/school.png",
                  children: [
                     {
                        path: "/", component: school,
                     },
                     {
                        path: "/index/school/intro", component: schoolIntro, name: "院校简介",
                     }
                  ]
               },
               {
                  path: "/index/payment", component: paymentMain, name: "我要付款", grandson: true, url: "/qtservice/images/payment.png",
                  children: [
                     {
                        path: "/", component: payment, grandson: true,
                     },
                     {
                        path: "/index/payment/detail", component: paymentDetail, name: "支付详情", grandson: true,
                     },
                     // {
                     //    path: "/index/payment/link", component: paymentLink, name: "", grandson: true
                     // },
                     {
                        path: "/index/payment/order", component: paymentOrder, name: "支付订单", grandson: true,
                     },
                     {
                        path: "/index/payment/back", component: paymentBack, name: "支付回调", grandson: true,
                     },
                  ]
               },
               {
                  path: "/index/signature", component: signatureMain, name: "电子签字", grandson: true, url: "/qtservice/images/signature.png",
                  children: [
                     {
                        path: "/", component: signature, grandson: true,
                     },
                     {
                        path: "/index/signature/link", component: signatureLink, grandson: true,
                     }
                  ]
               },
            ]
         },
         {
            path: "/process", components: {default: processMain, foot: foot}, icon: 'iconfont icon-shijian', name: "进程",
            children: [
               {
                  path: "/", component: process, name: "process", grandson: false,
               },
               // {
               //    path: "/attach/down", component: attachDown, name: "attachDown", grandson: false,
               // },
               {
                  path: "/", component: compactMain, name: "合同列表", grandson: true,
                  children: [
                     {
                        path: "/process/compact/index", component: compact, name: "compact", grandson: true,
                     },
                     {
                        path: "/process/compact/detail", component: compactDetail, name: "合同详情"
                     },
                     {
                        path: "/process/compact/pdf", component: compactPDF, name: "compactPDF",
                     },
                  ]
               },
            ]
         },
         {
            path: "/message", components: {default: message, foot: foot}, icon: 'iconfont icon-my-message', name: "消息",
         },
         {
            path: "/mine", components: {default: mine, foot: foot}, icon: 'iconfont icon-wodedangxuan', name: "我的",
         },
      ]
   },
];

export default routes;
