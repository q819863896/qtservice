<template>
   <section>
      <el-dialog title="长按二维码下载" center :visible.sync="emitQRVisible" :before-close="emitQRDirective" class="QRDialog">
         <span>{{emitQRName}}</span>
         <img :src="emitQRSrc" alt="QR">
      </el-dialog>
   </section>
</template>

<script lang="ts">
    export default {
        name: "AttachScanner",
        props: ["emitQRVisible", "emitQRSrc", "emitQRName"],
        methods: {
            emitQRDirective() {
                this.$emit("acceptQRDirective", false)
            }
        }
    }
</script>

<style lang="scss">
   @import "../../assets/styles/message.scss";

   .QRDialog {
      .el-dialog {
         width: 90%;
         /*margin: 0 auto;*/
         text-align: center;
         .el-dialog__body {
            padding: 10px 25px 30px;
            span {
               width: 100%;
               height: 30px;
               line-height: 30px;
               display: block;
               text-align: center;
            }
            img {
               width: 150px;
               height: 150px;
               display: block;
               margin: auto;
               vertical-align: middle;
            }
         }
      }
   }
</style>