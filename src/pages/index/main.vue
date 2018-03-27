<template>
    <div id="wrapper">
        <common-header></common-header>
        <section id="content">
            <block-wrapper :index-data="indexData"></block-wrapper>
            <block-selector></block-selector>
        </section>
        <footer-down class="index-footer-down"></footer-down>
    </div>
</template>

<script>

import {fetchJSON} from '../../public/js/myUtil.js';
import commonHeader from '../../public/components/common-header.vue';
import blockWrapper from './block-wrapper.vue';
import blockSelector from './block-selector.vue';
import footerDown from '../../public/components/footer-down.vue';

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
        footerDown,
    },
    mounted(){
        // 获取首页数据
        fetchJSON.call(this, 'indexData', 'indexData');
    }
}
</script>

<!-- 这里的body背景图因为要作用到外部，所以不能scoped -->
<style lang="scss">
@import "../../public/scss/basic.scss";

body{
    background-image: url(http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/bg.jpg);
}
.index-footer-down{
    margin: 150px auto auto auto;
}
</style>
