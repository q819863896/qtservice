<template>
   <el-row class="container">
      <!-- <el-col :span="24" class="main">
          <aside class="menus">
             <el-menu :default-active="$route.path" router mode="horizontal" @select="handleSelect">
                <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                   <el-menu-item :index="itemChild.path+''" v-for="(itemChild,indexChild) in item.children" v-if="!itemChild.grandson" :key="indexChild">{{itemChild.name}}</el-menu-item>
                </template>
             </el-menu>
          </aside>
       </el-col>-->

      <!-- <section class="content-container">
          <div class="grid-content bg-purple-light">

          </div>
       </section>-->
      <el-col :span="24">
         <transition-group name="fade" mode="out-in">
            <router-view :key="1"></router-view>
            <router-view name="foot" :key="2"></router-view>
         </transition-group>
      </el-col>
   </el-row>
</template>

<script>
   export default {
      data() {
         return {
            activeIndex: '1',
            dialogStuInfoVisible: false,
            collapsed: true,
            sysUserName: '',
            sysUserAvatar: '',
            form: {
               name: '',
               region: '',
               date1: '',
               date2: '',
               delivery: false,
               type: [],
               resource: '',
               desc: ''
            }
         }
      },
      methods: {
         handleSelect(key, keyPath) {
            console.log(key, keyPath);
         },
         openDialogInfo() {
            this.dialogStuInfoVisible = true;
         },
         closeDialogInfo(params) {
            this.dialogStuInfoVisible = params;
         },
         //退出登录
         logout: function () {
            let _this = this;
            this.$confirm('确认退出吗?', '提示', {
               confirmButtonText: '退出',
               cancelButtonText: '取消',
            }).then(() => {
               sessionStorage.removeItem('user');
               setTimeout(() => {
                  window.location.reload();
                  _this.$router.push('/login');
               }, 0)
            }).catch((err) => {
               console.log(err)
            });
         },
         //折叠导航栏
         collapse: function () {
            this.collapsed = !this.collapsed;
         },
         showMenu(i, status) {
            this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
         }
      },
      created() {
         let user = sessionStorage.getItem('user');
         if (user) {
            user = JSON.parse(user);
            this.sysUserName = user.stuName || '';
            this.sysUserAvatar = user.avatar || '';
         }
         // console.log(this.$router.options.routes)
      },
   }
</script>

<style lang="scss" scoped>
   section {
      height: 100%;
   }

   .container {
      /*overflow-scrolling: touch;*/
      /*-webkit-overflow-scrolling: touch;*/
   }

   /* .container {
       width: calc(100% - 3px);
       position: absolute;
       top: 0;
       bottom: 0;
       @media screen and(max-width: 767px) {
          !*width: calc(100% - 20px);*!
          width: 100%;
       }
       .header {
          !*background: #004870;*!
          height: 50px;
          line-height: 50px;
          background-color: transparent;
          position: relative;
          .userinfo {
             text-align: right;
             position: absolute;
             right: 30px;
             top: 0;
             z-index: 1000;
             .userinfo-inner {
                cursor: pointer;
                color: #e75959;
                img {
                   width: 30px;
                   height: 30px;
                   border-radius: 20px;
                   margin: 10px 0 10px 10px;
                   float: right;
                }
             }
          }
          .topbar-btn {
             color: #fff;
          }
          .topbar-logo {
             width: auto;
             height: 30px;
             background-color: transparent;
             position: absolute;
             z-index: 150;
             left: 10px;
             top: 50%;
             margin-top: -20px;
             a {
                width: auto;
                height: 30px;
                line-height: 30px;
                display: inline-block;
                img {
                   height: 30px;
                   display: inline-block;
                }
             }
             @media screen and(max-width: 767px) {
                !*position: absolute;
                z-index: 100;
                left: -10px;
                top: 50%;
                margin-top: -20px;*!
                position: fixed;
                z-index: 100;
                left: -5px;
                top: 20px;
                a {
                   width: 59px;
                   height: auto;
                   display: inline-block;
                   img {
                      width: 59px;
                      height: auto;
                      display: inline-block;
                   }
                }
             }
          }
          .topbar-logos {
             float: left;
             width: 120px;
             line-height: 26px;
             !*background-color: #004870;*!
          }
          .topbar-logo img, .topbar-logos img {
             height: 40px;
             margin-top: 5px;
             margin-left: 2px;
          }
          .topbar-title {
             float: left;
             text-align: left;
             width: 200px;
             padding-left: 10px;
             border-left: 1px solid #000;
          }
          .logo {
             //width:230px;
             height: 50px;
             font-size: 22px;
             padding-left: 20px;
             padding-right: 20px;
             border-right: 1px solid rgba(238, 241, 146, 0.3);
             img {
                width: 40px;
                float: left;
                margin: 10px 10px 10px 18px;
             }
             .txt {
                color: #fff;
             }
          }
          .logo-width {
             width: 120px;
          }
          .logo-collapse-width {
             width: 60px
          }
          .tools {
             padding: 0 10px;
             height: 50px;
             line-height: 50px;
             font-size: 18px;
             color: #FF9D00;
             text-align: center;
             display: none;
             !*border-left: 1px solid #000;*!
             @media screen and(max-width: 767px) {
                width: 100px;
                height: 50px;
                padding: 0 10px;
                line-height: 50px;
                text-align: center;
                color: #FF9D00;
                font-size: 14px;
                position: absolute;
                left: 45%;
                margin-left: -50px;
             }
          }
          @media screen and(max-width: 767px) {
             .userinfo {
                text-align: right;
                position: fixed;
                right: 10px;
                top: 0;
                .userinfo-inner {
                   cursor: pointer;
                   color: #e75959;
                   img {
                      width: 30px;
                      height: 30px;
                      border-radius: 20px;
                      margin: 10px 0 10px 10px;
                      float: right;
                   }
                }
             }
          }
       }
       .main {
          display: flex;
          position: absolute;
          top: 50px;
          bottom: 0;
          !*overflow: hidden;*!
          aside {
             min-width: 50px;
             background: #11347a;
             display: none;
             &::-webkit-scrollbar {
                display: none;
             }
             &.showSidebar {
                overflow-x: hidden;
                overflow-y: auto;
             }
             .el-menu {
                height: 100%; !*写给不支持calc()的浏览器*!
                height: -moz-calc(100% - 80px);
                height: -webkit-calc(100% - 80px);
                height: calc(100% - 80px);
                border-radius: 0;
                background-color: #11347a;
                border-right: 0;
             }
             .el-submenu .el-menu-item {
                min-width: 60px;
             }
             .el-menu {
                width: 180px;
             }
             .el-menu--collapse {
                width: 60px;
             }
             .el-menu .el-menu-item, .el-submenu .el-submenu__title {
                height: 46px;
                line-height: 46px;
             }
             .el-menu-item:hover, .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
                background-color: #004870;
             }
          }
          .menu-collapsed {
             flex: 0 0 60px;
             width: 60px;
          }
          .menu-expanded {
             flex: 0 0 180px;
             width: 180px;
          }
          .menu-toggle {
             background: #11347a;
             text-align: center;
             color: white;
             height: 26px;
             line-height: 30px;
          }
          .content-container {
             background: #fff;
             flex: 1;
             overflow: auto;
             padding: 10px 10px 1px 10px;
             .content-wrapper {
                background-color: #fff;
                box-sizing: border-box;
             }
          }
       }
    }*/
</style>
