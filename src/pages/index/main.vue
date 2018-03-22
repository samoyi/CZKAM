<template>
    <div id="wrapper">
        <common-header></common-header>
        <section id="content">
            <!-- <section id="blockWrapper">
                <carousel-box :carousel-data="indexData.carousel"></carousel-box>
                <exhibition-tab :exhibition-news="indexData.news.slice(0,3)"></exhibition-tab>
                <public-tab :public-news="indexData.public.slice(0,3)"></public-tab>
                <bulletin-tab :bulletins="indexData.bulletin.slice(0,3)"></bulletin-tab>
                <base-info-tab></base-info-tab>
                <p style="clear:both;"></p>
            </section> -->
            <block-wrapper :index-data="indexData"></block-wrapper>
            <block-selector></block-selector>
        </section>
        <index-footer></index-footer>
    </div>
</template>

<script>

import {fetchJSON} from '../../public/myUtil.js';

import commonHeader from '../../public/common-header.vue';
// import carouselBox from '../../public/carousel-box.vue';
// import exhibitionTab from './exhibition-tab.vue';
// import publicTab from './public-tab.vue';
// import bulletinTab from './bulletin-tab.vue';
// import baseInfoTab from './base-info-tab.vue';
import blockWrapper from './block-wrapper.vue';
import blockSelector from './block-selector.vue';
import indexFooter from './index-footer.vue';

export default {
    data () {
        return {
            indexData: { // 首页的所有数据
                news: [],
                public: [],
                bulletin: [],
            },

        }
    },
    components: {
        commonHeader,
        blockWrapper,
        // carouselBox,
        // exhibitionTab,
        // publicTab,
        // bulletinTab,
        // baseInfoTab,
        blockSelector,
        indexFooter,
    },
    mounted(){
        // 获取首页数据
        fetchJSON.call(this, 'indexData', 'indexData');

        window.onload = function(){
            // 预加载轮播图连接的资源
            let cssPreloader = new Image();
            cssPreloader.src = "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/css/common_page20170808.css";
        };
    }
}
</script>

<style lang="scss">
@import "../../public/basic.scss";
body{
    font-family: "Microsoft YaHei";
    overflow-x: hidden;
    background-image: url(http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/bg.jpg);
    #content{
        position: relative; top: 30px;
        width: $MIDDLE_WIDTH;
        @media (min-width: 1920px){
            width: $HEADER_CONTENT_WIDTH_1920;
        }
        margin-left: auto; margin-right: auto;
    }
}
</style>
