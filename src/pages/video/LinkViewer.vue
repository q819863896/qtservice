<template>
    <section class="page">
        <!--<iframe src="/pdf/web/viewer.html" frameborder="0" :height="winH" width="100%"></iframe>-->
        <!--<iframe sandbox="" src="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590999&idx=1&sn=02f116fabbde8d242acf2ad998ca5924&chksm=8b07bf98bc70368ea4561b155f8cb3cf79a8becbe34404a1b3f5876058d483fa967ff982d736&token=210950455&lang=zh_CN#rd" frameborder="0" :height="$store.state.winH" width="100%"></iframe>-->
        <!--<link rel="import" href="http://example.com/elements.html">-->
        <!--https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590999&idx=1&sn=02f116fabbde8d242acf2ad998ca5924&chksm=8b07bf98bc70368ea4561b155f8cb3cf79a8becbe34404a1b3f5876058d483fa967ff982d736&token=210950455&lang=zh_CN#rd-->
        <!--<object data="https://mp.weixin.qq.com/s?__biz=MzA5Mzg0Mzc0NA==&mid=2661590999&idx=1&sn=02f116fabbde8d242acf2ad998ca5924&chksm=8b07bf98bc70368ea4561b155f8cb3cf79a8becbe34404a1b3f5876058d483fa967ff982d736&token=210950455&lang=zh_CN#rd" width="400" height="300" type="text/html">-->
        <!--Alternative Content-->
        <!--</object>-->

    </section>
</template>

<script>
    import {linkArtical} from "../../api.js";
    import {systemTimeout} from "../../assets/js/variousHint.js";
    import {loading, closeLoading} from "../../assets/js/loading.js";
    import {urlParse} from "../../assets/js/urlToJson";
    import axios from 'axios'

    export default {
        name: "CompactPDF",
        /*****************************************************************************************************
         * 本页面注册数据
         ******************************************************************************************************/
        data() {
            return {}
        },
        /*****************************************************************************************************
         * 本页面注册组件
         ******************************************************************************************************/
        components: {},
        /*****************************************************************************************************
         * 本页面注册方法
         ******************************************************************************************************/
        methods: {
            getlinkArtical() {
                linkArtical().then(res => {

                })
            }
        },

        /*****************************************************************************************************
         * 生命周期函数 created
         ******************************************************************************************************/
        created() {
            // this.getlinkArtical()
        },

        destroyed() {
        }
    }
</script>

<style lang="scss">
    .page {
        height: 100%;
        overflow: hidden;
        line-height: 0;
    }
</style>