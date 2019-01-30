<template>
   <div class="changePwd_box" :style="{height:$store.state.winH+'px'}">
      <h3 class="changePwd_title">修改密码</h3>
      <el-form :model="loginInfo" :rules="rules2" ref="loginInfo" label-position="left" label-width="0px" class="demo-ruleForm changePwd_container">
         <el-form-item class="verify" prop="iptVerifyCode">
            <el-input type="text" name="iptVerifyCode" v-model="loginInfo.iptVerifyCode" ref="iptVerifyCode" auto-complete="off" placeholder="验证码"></el-input>
            <img :src="verifyCode.gif" class="verify_code" ref="verifyCode" @click="createCode">
         </el-form-item>
         <el-form-item class="verify" prop="phone">
            <el-input type="text" v-model="loginInfo.phone" auto-complete="off" placeholder="手机号"></el-input>
            <el-button @click.native.prevent="getPhoneVarify" class="phone_btn" :disabled="reGetPhoneVerify">
               {{!reGetPhoneVerify?"获取验证码":""+remainSecond+"s后重新获取"}}
            </el-button>
         </el-form-item>
         <el-form-item prop="phVerify">
            <el-input type="text" v-model="loginInfo.phVerify" auto-complete="off" placeholder="手机验证码"></el-input>
         </el-form-item>
         <el-form-item prop="password">
            <el-input type="password" v-model="loginInfo.password" auto-complete="off" placeholder="新密码" @blur="checkPasword(loginInfo.password)"></el-input>
         </el-form-item>
         <el-form-item prop="confirmPsw">
            <el-input type="password" v-model="loginInfo.confirmPsw" auto-complete="off" placeholder="确认密码" @blur="checkPasword(loginInfo.password)"></el-input>
         </el-form-item>
         <!-- <el-form-item class="">
             <div class="drag">
                <div class="bg"></div>
                <div class="text" onselectstart="return false;">滑屏验证</div>
                <div class="btn">&gt;&gt;</div>
             </div>
          </el-form-item>-->

         <el-form-item class="back_login">
            <!--<el-checkbox v-model="isRememberPsw" checke
            d class="remember">记住密码</el-checkbox>-->
            <router-link :to="resource?'/videologin':'/login'"><span>返回登录</span></router-link>
         </el-form-item>
         <el-form-item style="width:100%;" class="btn_confirm">
            <el-button style="width:100%;" @click.native.prevent="changePassword" :loading="logining">确认</el-button>
            <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
         </el-form-item>
      </el-form>
   </div>
</template>

<script>
   import {requestUser, makeSignature, loginVerify, phoneVerify, updataPassword} from "../../api";
   import md5 from 'js-md5';
   import {verifySpace, phoneSpace, systemTimeout, phoneVarifySuccess, passwordInequality, passwordModifySuccess} from "../../assets/js/variousHint.js";
   import {checkPasword} from "../../assets/js/regexp";

   let code;
   //import NProgress from "nprogress"
   export default {

      /*****************************************************************************************************
       * 本页面注册数据
       ******************************************************************************************************/
      data() {
         return {
            checkPasword: checkPasword,  //校验密码
            verifyCode: {},
            rejectSubmit: false,
            logining: false,
            loginInfo: {
               iptVerifyCode: "",
               phone: "",
               phVerify: "",
               password: "",
               confirmPsw: "",
            },
            rules2: {
               phone: [
                  {required: true, message: "请输入手机号码", trigger: "blur"},
               ],
               phVerify: [
                  {required: true, message: "请输入手机验证码", trigger: "blur"},
               ],
               password: [
                  {required: true, message: "请输入新密码", trigger: "blur"},
               ],
               confirmPsw: [
                  {required: true, message: "请输入确认密码", trigger: "blur"},
               ],
            },
            reGetVerify: false, //重复获取验证码
            reGetPhoneVerify: false,  //重复获取手机验证码
            remainSecond: 60,  //剩余s
            resource: "",  // 判断登录页
         }
      },

      /*****************************************************************************************************
       * 本页面注册方法
       ******************************************************************************************************/
      methods: {
         handleReset2() {
            this.$refs.loginInfo.resetFields();
         },
         changePassword(ev) {
            this.$refs.loginInfo.validate((valid) => {
               if (valid) {
                  // if (this.rejectSubmit === true && this.checkPasword === true) return false;
                  if (this.checkPasword(this.loginInfo.password) === false || this.checkPasword(this.loginInfo.confirmPsw) === false) return false;
                  this.logining = true;
                  setTimeout(() => {
                     this.logining = false;
                  }, 5000);

                  let params = {};
                  params.mobile = this.loginInfo.phone;
                  params.mobileVolidate = this.loginInfo.phVerify;
                  params.newpwd = md5(this.loginInfo.password);
                  // params.confirmpwd = "";
                  if (this.loginInfo.password !== this.loginInfo.confirmPsw) {
                     passwordInequality();
                     return false;
                  }
                  updataPassword(params).then(res => {
                     let {status, message, datas} = res;

                     if (status !== 0) {
                        systemTimeout(status, message);
                        closeLoading(this) //关闭loading
                     } else {
                        // let token = res.value;
                        // this.logining = false;
                        // this.createCode()
                        passwordModifySuccess();
                        setTimeout(() => {
                           this.$router.push({path: "/login"})
                        }, 2000)
                     }
                  });
               } else {
                  console.error("error submit!!");
                  return false;
               }
            });
         },

         getPhoneVarify() {
            let params = {};
            params.mobile = this.loginInfo.phone;
            params.validate = this.loginInfo.iptVerifyCode;
            params.token = this.verifyCode.token;

            if (this.loginInfo.iptVerifyCode === "") {
               verifySpace();
               return false;
            } else if (this.loginInfo.phone === "") {
               phoneSpace();
               return false;
            }
            phoneVerify(params).then(res => {
               let {message, status} = res;

               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
                  this.reGetVerify = true;
                  this.reGetPhoneVerify = true;
               } else {
                  phoneVarifySuccess();
               }
            });
            this.interval();
            if (this.reGetVerify) this.createCode()
         },
         // 图片验证码
         createCode() {
            // loginVerify().then(res => {
            //    let blob = new Blob([res], {type: "image/jpeg"});
            //    // let blob = new Blob([res], {type: "image/gif"});
            //    this.verifyCode = window.URL.createObjectURL(blob);

            loginVerify().then(res => {
               let {status, message, datas} = res;
               if (status !== 0) {
                  systemTimeout(status, message);
                  closeLoading(this) //关闭loading
               } else {
                  this.verifyCode = datas;
               }
            })
         },

         //定时器
         interval() {
            let i = 60;
            this.timer = setInterval(() => {
               i--;
               this.remainSecond = i;
               if (i < 1) {
                  clearInterval(this.timer);
                  this.reGetPhoneVerify = false;
               }
            }, 1000);
         }
      },

      /*****************************************************************************************************
       * 生命周期函数 created
       ******************************************************************************************************/
      created() {
         this.createCode();
         this.resource = this.$route.query.source;
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

   .changePwd_box {
      width: 100%;
      height: 100%;
      @extend .flexCC, .flexV;
      background-color: #23b29e;
      .changePwd_title {
         /*margin: 100px auto 20px auto;*/
         margin: -40px auto 40px auto;
         text-align: center;
         font-size: 28px;
         font-weight: normal;
         font-stretch: normal;
         /*line-height: 26px;*/
         letter-spacing: 0px;
         color: #ffffff;
      }
      .changePwd_container {
         /*width: 280px;*/
         min-width: 240px;
         max-width: 580px;
         border-radius: 5px;
         -moz-border-radius: 5px;
         background-clip: padding-box;
         /*margin: 130px auto 0;*/
         margin: -20px 30px 0;
         padding: 20px 20px 10px;
         background: #fff;
         -webkit-border-radius: 5px;
         border: 1px solid #eaeaea;
         -webkit-box-shadow: 0 0 40px 6px #cac6c6;
         box-shadow: 0 0 40px 6px #cac6c6;

         .back_login {
            span {
               color: #37cbb9;
               font-size: 16px;
            }
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

            .phone_btn {
               width: 40%;
               margin-left: 10%;
               height: 30px;
               display: inline-block;
               vertical-align: middle;
               font-size: 12px;
               text-align: center;
               cursor: pointer;
               border: none;
               background-color: #23B29E;
               color: #FFFFFF;
               padding: 0;
               span {
                  text-align: center;
                  display: inline-block;
                  line-height: 0;
                  vertical-align: middle;
               }
            }
         }
      }
   }
</style>

<style lang="scss">
   @import "../../assets/styles/message.scss";

   /*确认*/
   .btn_confirm {
      width: 100%;
      .el-button {
         color: #FFFFFF;
         background-color: #1daa95;
         font-size: 20px;
      }
   }

   /*输入框*/
   .changePwd_container {
      .el-form-item {
         margin-bottom: 10px;
         .el-form-item__content {
            .el-input {
               .el-input__inner {
                  line-height: 20px;
                  background-color: transparent;
                  border: none;
                  border-bottom: 1px solid #8ddbd0;
                  border-radius: 0;
                  color: #333333;
                  padding: 0;
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
