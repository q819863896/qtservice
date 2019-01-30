<template>
   <!--<section>-->
   <!--<el-row class="container">
      <el-col :span="24" class="main">
         <aside class="menus">
            <el-menu :default-active="$route.path" router mode="horizontal" @select="handleSelect">
               <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
                  <el-menu-item :index="itemChild.path+''" v-for="(itemChild,indexChild) in item.children" v-if="!itemChild.grandson" :key="indexChild">{{itemChild.name}}</el-menu-item>
               </template>
            </el-menu>
         </aside>
      </el-col>
   </el-row>-->
   <aside class="menus">
      <el-menu :default-active="$route.path" router mode="horizontal" @select="handleSelect" active-text-color="#1daa95" background-color="#fff" style="border-top: 1px solid #e8eef6">
         <template v-for="item in $router.options.routes" v-if="!item.hidden">
            <el-menu-item :index="itemChild.path+''" v-for="(itemChild,indexChild) in item.children" v-if="!itemChild.grandson" :key="indexChild" style="background-color: transparent;border:none">
               <i :class="itemChild.icon">
                  <el-badge v-if="indexChild===2" :is-dot="$store.state.noticeNum>0" :hidden="$store.state.noticeNum<=0" :value="$store.state.noticeNum" :max="99"></el-badge>
               </i>
               <span slot="title">{{itemChild.name}}</span>
            </el-menu-item>
         </template>
      </el-menu>
   </aside>
   <!--</section>-->
</template>

<script>
   export default {
      name: "foot",
      methods: {
         handleSelect(key, keyPath) {
            // console.log(key, keyPath);
         },
      }
   }
</script>

<style lang="scss" scoped>
   @import "../assets/styles/common.scss";

   .menus{
      width: 100%;
      /*max-width: 640px;*/
      /*min-width: 320px;*/
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 100;
      .el-menu{
         @extend .flexSBC;
         .el-menu-item{
            i{
               display: block;
               height: 50%;
               line-height: 250%;
               text-align: center;
               margin-right: 0;
               position: relative;
               .el-badge{
                  position: absolute;
                  top: -5px;
                  right: 0;
               }
            }
            span{
               display: block;
               height: 50%;
               line-height: 150%;
            }
         }
      }
   }
</style>