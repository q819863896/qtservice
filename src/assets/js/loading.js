import {Loading} from "element-ui"

export const loading = function (that) {
   let options = {
      body: true,
      fullscreen: true,
      lock: true,
      text: "正在加载...",
      spinner: 'el-icon-loading',
      background: 'rgba(255, 255, 255, 1)'
   };
   that.loading = Loading.service(options);

   /* setTimeout(function () {
       that.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
          that.loading.close();
       });
    }, 2000)*/
};

export const closeLoading = function (that) {
   that.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
      that.loading.close();
   });
};