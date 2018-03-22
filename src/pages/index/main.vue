<template>
    <div id="wrapper">
        <common-header></common-header>
        <section id="content">
            <block-wrapper :index-data="indexData"></block-wrapper>
            <block-selector></block-selector>
        </section>
        <index-footer></index-footer>
    </div>
</template>

<script>

import {fetchJSON} from '../../public/myUtil.js';
import commonHeader from '../../public/common-header.vue';
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
        blockSelector,
        indexFooter,
    },
    mounted(){
        // 获取首页数据
        fetchJSON.call(this, 'indexData', 'indexData');
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
