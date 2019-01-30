import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex);

// 应用初始状态
const state = {
   // count: 10,
   winH: "",         // 设备宽度
   noticeNum: "",    // 消息数量
   autoLogin: false, // 自动登录
   openId: "",       // openid
   targetPage: "",   // 用户消息跳转页面
   id: "",           // 用户消息对应合同id 或者 消息id
};

// 定义所需的 mutations
const mutations = {
   // INCREMENT(state) {
   //    state.count++
   // },
   // DECREMENT(state) {
   //    state.count--
   // }

   GETWINDOWHEIGHT(state, winH) {
      state.winH = winH;
   },
   GETNOTICENUM(state, noticeNum) {
      state.noticeNum = noticeNum
   },
   GETAUTOLOGIN(state, autoLogin) {
      state.autoLogin = autoLogin;
   },
   GETOPENID(state, openId) {
      state.openId = openId;
   },
   GETTARGETPAGE(state, targetPage) {
      state.targetPage = targetPage;
   },
   GETID(state, id) {
      state.id = id;
   }
};

// 创建 store 实例
export default new Vuex.Store({
   actions,
   getters,
   state,
   mutations
})