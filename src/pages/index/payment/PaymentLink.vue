<!--<template>-->
<!--<section class="page">-->
<!--&lt;!&ndash;<iframe src="/pdf/web/viewer.html" frameborder="0" :height="winH" width="100%"></iframe>&ndash;&gt;-->
<!--<iframe :src="'/pdf/web/viewer.html?file='+pdfSrc" frameborder="0" :height="$store.state.winH" width="100%"></iframe>-->
<!--</section>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--name: "PaymentLink"-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->


<template>
    <section class="page">
        <!--<iframe src="/pdf/web/viewer.html" frameborder="0" :height="winH" width="100%"></iframe>-->
        <iframe src="http://a.counect.com/pdemo/c.html?data=01_KYVLh1Thw0fTZ1R2djI5E8E41F782163E27050000000000000089000002C051f60fb281c1ff5f0f009d68f59350b5f93cbf04" frameborder="0" :height="$store.state.winH" width="100%"></iframe>
    </section>
</template>

<script>
    import {contractPDF} from "../../../api.js";
    import {systemTimeout} from "../../../assets/js/variousHint.js";

    export default {
        name: "PaymentLink",
        /*****************************************************************************************************
         * 本页面注册数据
         ******************************************************************************************************/
        data() {
            return {
                payurl: "",
            }
        },
        /*****************************************************************************************************
         * 本页面注册组件
         ******************************************************************************************************/
        components: {},
        /*****************************************************************************************************
         * 本页面注册方法
         ******************************************************************************************************/
        methods: {},

        /*****************************************************************************************************
         * 生命周期函数 created
         ******************************************************************************************************/
        created() {
            this.payurl = this.$route.query.id; //获取路由参数
        },

        destroyed() {
        }
    }
</script>

<style lang="scss">
    @import "../../../assets/styles/message.scss";
</style>