import {stringify} from 'qs';
import axios from 'axios';

axios.defaults.validateStatus = status => {
   return status < 500;
};

// 设置请求token
axios.interceptors.request.use(config => {
   let token = sessionStorage.getItem('token');
   // let tokenSingle = sessionStorage.getItem('tokenSingle');

   if (token) config.headers['Authorization'] = 'Bearer ' + token;
   // if (tokenSingle) config.headers['Authorization'] = 'Bearer ' + tokenSingle;
   return config;
});

// 接口错误拦截
axios.interceptors.response.use(res => {
   if (res.status === 401) {
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('token');
      // console.log({'router': router});
      route.push({path: '/login'});
      return res;
   } else {
      return res;
   }
}, err => {
   return Promise.reject(err)
});

// let tokenSingle = sessionStorage.getItem('tokenSingle');
//
// console.log('tokenSingle', tokenSingle);


// axios.defaults.baseURL = 'http://qtservice.xdf.cn';     // 前台
// axios.defaults.baseURL = 'http://qtsm.xdf.cn';          // 后台
// axios.defaults.baseURL = 'http://zxyy.manage.xdf.cn';
// axios.defaults.baseURL = 'http://10.202.203.57:8080';
axios.defaults.baseURL = 'http://10.202.203.55:8081';
// axios.defaults.baseURL = 'http://chang12343.oicp.net';
// axios.defaults.baseURL = 'http://qtsm.staff.xdf.cn';
// axios.defaults.baseURL = 'http://10.149.0.170:8080';    // 刘景欣
// axios.defaults.baseURL = 'http://10.150.117.194:8081';   // 刘佳
// axios.defaults.baseURL = 'http://10.149.0.215:8080';    // 刘佳
// axios.defaults.baseURL = 'http://10.149.0.239:7081';    // 武勇文
// axios.defaults.baseURL = 'http://10.149.0.120:8081';    // 徐俊凯
// axios.defaults.baseURL = 'http://10.150.119.191:8081';  // 徐俊凯
// axios.defaults.baseURL = 'http://10.149.0.202:8081';    // 朱绮峰
// axios.defaults.baseURL = 'http://10.150.118.243:8081';  // 朱绮峰
axios.defaults.timeout = 1000 * 30;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
axios.defaults.headers.get['Content-Type'] = 'application/json';


/////////////////////////////////////////////////////////////// 账户相关API ////////////////////////////////////////////////////////////////////////////////////////////

//token
export const requestToken = params => {
   return axios.post('/oauth/token', stringify(params)).then(res => res.data);
};

//获取验证码
export const loginVerify = () => {
   // return axios.post("/mo/chat/showCode", {responseType: 'arraybuffer'}).then(res => res.data);
   return axios.post("/mo/chat/showCode").then(res => res.data);
};

/* 失去验证码焦点 */
// export const bulrVerify = (params) => {
//    return axios.post('mo/chat/checkVCode', stringify(params)).then(res => res.data);
// };

//获取手机验证码
export const phoneVerify = (params) => {
   return axios.post("/mo/chat/sendauthcode", stringify(params)).then(res => res.data);
};

//修改密码
export const updataPassword = (params) => {
   return axios.post("/mo/chat/updatapwd", stringify(params)).then(res => res.data);
};

//登录账户
export const loginSystem = (params) => {
   return axios.post("/mo/chat/registered", stringify(params)).then(res => res.data);
};
/////////////////////////////////////////////////////////////// 账户相关API ////////////////////////////////////////////////////////////////////////////////////////////

//申请进度列表
export const processList = () => {
   return axios.post("/mo/base/index").then(res => res.data);
};

//获取合同列表
export const contractList = (param) => {
   return axios.post("/mo/contract/list/ui", param).then(res => res.data);
};

//获取合同详情
export const contractDetail = (param) => {
   return axios.post("/mo/contract/message/ui", param).then(res => res.data)
};

//获取pdf文件
export const contractPDF = (param) => {
   return axios.post("/mo/contract/pdffile", param, {responseType: 'arraybuffer'}).then(res => res.data);
};

//获取顾问列表
export const counselorList = () => {
   return axios.post("/mo/user/listMyConsultants").then(res => res.data);
};

//付款信息
export const paymentInfo = () => {
   return axios.post("mo/payment/payOrder/payList").then(res => res.data);
};

//生成订单 //全部合同
export const paymentOrder = (param) => {
   return axios.post("/mo/payment/create/order/edit", param).then(res => res.data);
};

//调用支付接口
export const submitPay = (params) => {
   return axios.post("/mo/payment/submitPay/wx", stringify(params)).then(res => res.data);
};

//返回支付结果信息
export const backPaymentInfo = (params) => {
   return axios.post("/mo/payment/submitPay/resource/wx", stringify(params)).then(res => res.data);
};

//获取订单详情 //待付款 fid
export const paymentDetail = (param) => {
   return axios.post("/mo/payment/find/order/info", param).then(res => res.data);
};

//进程列表
export const processInfos = (param) => {
   return axios.post("/mo/jincheng/ui", param).then(res => res.data);
};

//附件下载QR
//mo/jincheng/downFile
export const creatQRCode = (param) => {
   return axios.post("mo/jincheng/creatQRCode", param, {responseType: 'arraybuffer'}).then(res => res.data);
};

//获取选校信息
export const schoolInfo = () => {
   return axios.post("/mo/school/newSlectSchool").then(res => res.data);
};

//获取学校介绍
export const schoolIntro = (param) => {
   return axios.post("/mo/school/schoolMsg", param).then(res => res.data);
};

/////////////////////////////////////////////////////////////// 签字相关API ////////////////////////////////////////////////////////////////////////////////////////////
//获取签字列表
export const signature = () => {
   return axios.post("/mo/contract/not/sign/contractAndXy").then(res => res.data);
};

//获取签字接口
export const signatureApi = (params) => {
   return axios.post("/mo/signature/new/submit", stringify(params)).then(res => res.data);
};

// 获取合同手机号
export const selectMobile = (param) => {
   return axios.post("/mo/contract/selectMobile", param).then(res => res.data);
};

/////////////////////////////////////////////////////////////// 服务相关API ////////////////////////////////////////////////////////////////////////////////////////////

//后续服务
export const afterService = () => {
   return axios.post("/mo/base/afterService").then(res => res.data);
};

//服务详情
export const serviceDetail = (param) => {
   return axios.post("/mo/base/oneService", param).then(res => res.data);
};

//选择服务
export const choiceService = (params) => {
   return axios.post("/mo/base/choiceService", stringify(params)).then(res => res.data);
};

/////////////////////////////////////////////////////////////// 消息相关API ////////////////////////////////////////////////////////////////////////////////////////////
//查询消息
export const messageList = () => {
   return axios.post("/mo/osm/list").then(res => res.data);
};

//更新消息状态
export const updateMessageState = (param) => {
   return axios.post("/mo/osm/updateState", param).then(res => res.data);
};

/////////////////////////////////////////////////////////////// 协议相关API ////////////////////////////////////////////////////////////////////////////////////////////
/*获取数据*/
export const getparam = (tokenSingle, params) => {
   return axios.create({headers: {'Authorization': 'Bearer ' + tokenSingle}}).post('/mo/ybg/getparam', stringify(params)).then(res => res.data);
};

/*审批*/
export const approval = (tokenSingle, params) => {
   return axios.create({headers: {'Authorization': 'Bearer ' + tokenSingle}}).post('/mo/ybg/approval', stringify(params)).then(res => res.data);
};

/*问卷调查*/
export const allContentAnswer = (params) => {
   return axios.post('/questionnaire/allContentAnswer', params).then(res => res.data);
};
export const linkArtical = () => {
   return axios.post('/mo/aaa/twx').then(res => res.data);
};

// export const allContentAnswer = (params) => {
//    return axios.post('/questionnaire/allContentAnswer', stringify(params, {arrayFormat: 'brackets'})).then(res => res.data);
// };

/////////////////////////////////////////////////////////////// 个人信息API ////////////////////////////////////////////////////////////////////////////////////////////
/*查询信息*/
export const userInfoQuery = () => {
   return axios.post("/userInfo/query").then(res => res.data);
};

/*更新信息*/
export const updateBase = (params) => {
   return axios.post("/userInfo/updateBase", stringify(params)).then(res => res.data);
};

