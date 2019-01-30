import Vue from "vue";
import App from "./App";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/zh-CN";

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

import "@/assets/fonts/iconfont.css";
import VueRouter from "vue-router";
import store from "./vuex/store";
import Vuex from "vuex";
//import NProgress from "nprogress"
//import "nprogress/nprogress.css"
import routes from "./routes"
// import weixin from "weixin-js-sdk"
// import weixin from "jweixin"
import jquery from "jquery";

// 兼容
import "url-search-params-polyfill";
import promise from 'es6-promise';
import "babel-polyfill";


//去掉引用的mock
// import Mock from "./mock"
// Mock.bootstrap();
promise.polyfill();

Vue.use(ElementUI, {locale});
Vue.use(MintUI);
Vue.use(VueRouter);
Vue.use(Vuex);

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
   routes
});

router.beforeEach((to, from, next) => {
   //NProgress.start();
   const nextRoute = ["/404", "/videologin", "/password", "/discounts", "/backcost", "/selectschool", "/supplement", "/approve", "/indexcloud", "/index/payment/back", "/questionnaire", "/answersuccess", "/score", "/scoresuccess", "/error"];
   if (to.path === "/login") {
      sessionStorage.removeItem("user");
   }

   let user = JSON.parse(sessionStorage.getItem("user"));

   if (nextRoute.indexOf(to.path) !== -1) {
      next()
   } else if (!user && to.path !== "/login") {
      next({path: "/login"})
   } else {
      next()
   }
});

// router.afterEach(transition => {
//    NProgress.done();
// });

new Vue({
   router,
   store,
   render: h => h(App),
}).$mount("#app");

// new Vue({
//    el: "#app",
//    template: "<App/>",
//    router,
//    store,
//    component: {App}
// });


window.route = router;
window.$ = jquery;
// Vue.prototype.axios = axios;

