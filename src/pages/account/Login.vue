<template>
   <div class="login_box" :style="{height:$store.state.winH+'px'}">
      <el-form :model="loginInfo" :rules="rules2" ref="loginInfo" label-position="left" label-width="0px" class="login-container">
         <img src="../../assets/images/logo1.png" alt="logo" class="long_logo">
         <h3 class="login_title">系统登录</h3>
         <el-form-item prop="account">
            <el-input type="text" v-model.trim="loginInfo.account" auto-complete="off" placeholder="账号"></el-input>
         </el-form-item>

         <el-form-item prop="password">
            <el-input type="password" v-model.trim="loginInfo.password" auto-complete="off" placeholder="密码"></el-input>
         </el-form-item>

         <el-form-item class="verify" prop="iptVerifyCode">
            <el-input type="text" name="iptVerifyCode" v-model.trim="loginInfo.iptVerifyCode" ref="iptVerifyCode" auto-complete="off" placeholder="验证码"></el-input>
            <img :src="verifyCode.gif" class="verify_code" ref="verifyCode" @click="createCode">
         </el-form-item>

         <el-form-item class="password">
            <el-checkbox v-model="isRememberPsw" checked class="remember">记住密码</el-checkbox>
            <router-link to="/password"><span class="change">修改密码</span></router-link>
         </el-form-item>

         <el-form-item style="width:100%;" class="btn_groups">
            <el-button style="width:100%;" @click.native.prevent="toLogin" @keydown.enter="toLogin" @keydown.13="toLogin" :loading="logining">登录</el-button>
            <!--<el-button @click.native.prevent="accountReset">重置</el-button>-->
         </el-form-item>
      </el-form>
   </div>
</template>

<script lang="ts">
   import {requestToken, loginVerify, loginSystem} from "../../api";
   import md5 from "js-md5";
   import {inputAccountError, systemTimeout} from "../../assets/js/variousHint";
   import {loading, closeLoading} from "../../assets/js/loading";
   import {urlParse} from "../../assets/js/urlToJson";


   //import NProgress from "nprogress"
   export default {

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            verifyCode: {},
            rejectSubmit: true,
            logining: false,
            loginInfo: {
               account: "",
               password: "",
               iptVerifyCode: "",
            },
            rules2: {
               account: [
                  {required: true, message: "请输入账号", trigger: "blur"},
               ],
               password: [
                  {required: true, message: "请输入密码", trigger: "blur"},
                  // {min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur'}
               ],
               iptVerifyCode: [
                  {required: true, message: "请输入验证码", trigger: "blur"},
               ]
            },
            isRememberPsw: localStorage.getItem("isRememberPsw") === "true" ? true : false,
            backUrlData: false,
         };
      },

      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         accountReset() {
            this.$refs.loginInfo.resetFields();
         },
         // 失去焦点验证验证码
         // checkVer() {
         //    let params = {
         //       validate: this.loginInfo.iptVerifyCode,
         //       catoken: this.verifyCode.token
         //    };
         //    bulrVerify(params).then(res => {
         //       let {message, status} = res;
         //
         //       if (status !== 0) {
         //
         //          systemTimeout(status, message);
         //          this.createCode();
         //          this.rejectSubmit = true;
         //       } else {
         //          this.rejectSubmit = false;
         //       }
         //    })
         // },


         //登录账户
         toLogin() {
            this.$refs.loginInfo.validate((valid) => {
               if (valid) {
                  // if (this.rejectSubmit === true) {
                  //   verifyError();
                  //    return false
                  // }
                  //_this.$router.replace("/table");
                  this.logining = true;
                  setTimeout(() => {
                     this.logining = false;
                  }, 5000);
                  let params = {
                     "username": this.loginInfo.account + ";" + this.loginInfo.iptVerifyCode.toLowerCase() + ";" + this.verifyCode.token + ";" + this.backUrlData.autoLogin,
                     "password": md5(this.loginInfo.password),
                     "grant_type": "password",
                     "scope": "read",
                     "client_id": "rajithapp",
                     "client_secret": "secret",
                  };
                  requestToken(params).then(res => {
                     let token = res.value;
                     if (token) {
                        sessionStorage.setItem("token", token);

                        let params = {
                           name: this.loginInfo.account,
                           password: md5(this.loginInfo.password),
                           validate: this.loginInfo.iptVerifyCode,
                           catoken: this.verifyCode.token,
                           autoLogin: this.$store.state.autoLogin,
                           openId: this.$store.state.openId
                        };

                        loginSystem(params).then(res => {
                           let {message, status, datas} = res;

                           if (status !== 0) {
                              systemTimeout(status, message);
                              closeLoading(this) //关闭loading
                           } else {
                              sessionStorage.setItem("user", JSON.stringify(datas.user));

                              params.password = this.loginInfo.password;
                              localStorage.setItem("loginInfo", JSON.stringify(params));

                              if (this.loading) this.loading.close();
                              // closeLoading(this) //关闭loading
                              if (this.$store.state.targetPage === "process") {
                                 this.$router.push({path: "/process", query: {id: this.$store.state.id}});
                              } else if (this.$store.state.targetPage === "message") {
                                 this.$router.push({path: "/message", query: {id: this.$store.state.id}});
                              } else {
                                 this.$router.push({path: "/index"});
                              }
                           }
                        });
                     } else {
                        sessionStorage.removeItem("token");
                        sessionStorage.removeItem("user");
                        inputAccountError();
                     }
                     this.createCode() //执行【图片验证码】
                  });
                  this.rememberPsw()  //执行【是否记住密码】
               } else {
                  console.error("error submit!");
                  return false;
               }
            });

         },
         //是否记住密码
         rememberPsw() {
            // localStorage.setItem("isRememberPsw", this.isRememberPsw);
            // if (this.isRememberPsw === true) {
            //    localStorage.setItem("loginInfo", JSON.stringify(this.loginInfo))
            // } else {
            //    let loginInfo = {account: "", password: ""};
            //    localStorage.setItem("loginInfo", JSON.stringify(loginInfo))
            // }
         },
         // 图片验证码
         createCode() {
            loginVerify().then(res => {
               // let blob = new Blob([res], {type: "image/jpeg"});
               // this.verifyCode = window.URL.createObjectURL(blob);

               let {status, message, datas} = res;

               if (status !== 0) {
                  systemTimeout(status, message);

               } else {
                  this.verifyCode = datas;
               }
            })
         },


      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         this.createCode(); //执行【图片验证码】

         /*window.addEventListener("keydown", (e) => {
             if (e.keyCode === 13 || e.keyCode === "enter") {
                 this.toLogin() //执行【登录账户】
             }
         });*/
      },
      mounted() {
         /*let url = window.location.href;
         console.log('url', url);
         let target = url.indexOf("?");
         let payUrl = url.substring(0, target);
         let payParams = url.substring(target + 1, url.length);

         // let urlParam = window.location.search;

         function urlToJson(str) {
             let arr = [], json = {};
             arr = str.split('&');

             for (var i = 0; i < arr.length; i++) {
                 json[arr[i].split('=')[0]] = arr[i].split('=')[1];
             }
             return json;
         }*/

         // let backUrlData = urlToJson(payParams);
         // this.backUrlData = backUrlData;

         /* autoLogin: this.backUrlData.autoLogin,
            openId: this.backUrlData.openId*/

         this.backUrlData = urlParse(window.location.href);
         this.$store.dispatch("getAutoLogin", this.backUrlData.autoLogin);
         this.$store.dispatch("getOpenId", this.backUrlData.openId);
         this.$store.dispatch("getTargetPage", this.backUrlData.targetPage);
         this.$store.dispatch("getId", this.backUrlData.id);

         if (localStorage.getItem("loginInfo")) {
            let loginInfo = localStorage.getItem("loginInfo");
            let loginJSON = JSON.parse(loginInfo);
            // let {account, password} = loginJSON;
            this.$set(this.loginInfo, "account", loginJSON.name);
            this.$set(this.loginInfo, "password", loginJSON.password);
            this.$set(this.loginInfo, "iptVerifyCode", loginJSON.validate);
         }

         if (this.$store.state.autoLogin === "true") {
            /*加载动画*/
            this.loading = this.$loading({
               lock: true,
               text: '正在跳转...',
               spinner: 'el-icon-loading',
               background: 'rgba(255,255,255, 1)'
            });
            loading(this)//加载loading
            setTimeout(() => {
               this.loading.close();
               // closeLoading(this) //关闭loading
            }, 5000);
            this.toLogin() //执行【登录账户】
         }
      },

      destroyed() {
         this.createCode = null;
      }
   }
</script>

<style lang="scss" scoped>
   @import "../../assets/styles/common.scss";

   .text {
      position: absolute;
      width: 100%;
      height: 100%;
      text-align: center;
      user-select: none;
   }

   .login_box {
      /* width: 100%;
       height: 100%;*/
      min-width: 320px;
      max-width: 640px;
      @extend .flexCC, .flexV;
      /*overflow: hidden;*/
      background-color: #23b29e;
      .login-container {
         /*width: 300px;*/
         min-width: 240px;
         max-width: 580px;
         border-radius: 5px;
         -moz-border-radius: 5px;
         /*background-clip: padding-box;*/
         /*margin: 130px auto 0;*/
         margin: -30px 30px 0;
         padding: 20px 20px 10px;
         /*background: #fff;*/
         /*-webkit-border-radius: 5px;*/
         /*border: 1px solid #eaeaea;*/
         /*-webkit-box-shadow: 0 0 40px 6px #cac6c6;*/
         /*box-shadow: 0 0 40px 6px #cac6c6;*/

         .login_title {
            margin: 0 auto 20px auto;
            text-align: center;
            font-size: 28px;
            font-weight: normal;
            font-stretch: normal;
            /*line-height: 26px;*/
            letter-spacing: 0px;
            color: #ffffff;
         }

         .verify {
            line-height: 1;
            user-select: none;
            -ms-user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            .el-input {
               width: 50%;
               user-select: auto;
               -ms-user-select: auto;
               -moz-user-select: auto;
               -webkit-user-select: auto;
            }
            .verify_code {
               width: 40%;
               margin-left: 10%;
               height: 30px;
               line-height: 30px;
               display: inline-block;
               vertical-align: middle;
               color: #333333;
               font-size: 18px;
               text-align: center;
               cursor: pointer;
            }
         }
      }
   }

   .long_logo {
      /*  width: 99px;
        height: 30px;*/
      width: 90px;
      display: block;
      margin: 0 auto 10px;
   }

   /*登录*/
   .btn_groups {
      .el-button {
         color: #1dab95;
         font-size: 20px;
      }
   }
</style>

<style lang="scss">
   @import "../../assets/styles/message.scss";

   /*记住密码*/
   .password {
      .remember {
         margin: 0 0 20px 0;
         float: left;
         .el-checkbox__label {
            color: #ffffff;
         }
         .el-checkbox__inner {
            background-color: #ffffff;
            border-color: #ffffff;
            &::after {
               border: 1px solid #31c1ad;
               border-left: 0;
               border-top: 0;
            }
         }
      }
      .change {
         float: right;
         color: #ffffff;
      }
   }

   /*输入框*/
   .login-container {
      .el-form-item {
         margin-bottom: 18px;
         .el-form-item__content {
            .el-input {
               .el-input__inner {
                  line-height: 20px;
                  background-color: transparent;
                  border: none;
                  border-bottom: 1px solid #8ddbd0;
                  border-radius: 0;
                  color: #ffffff;
               }
            }
            input::placeholder {
               color: #8ddcd1;
            }
            input::-moz-placeholder {
               color: #8ddcd1;
            }
         }
      }
   }
</style>
