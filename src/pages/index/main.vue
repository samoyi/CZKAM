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

import {fetchJSON} from '../../public/myUtil.js';
import commonHeader from '../../public/common-header.vue';
import blockWrapper from './block-wrapper.vue';
import blockSelector from './block-selector.vue';
import footerDown from '../../public/footer-down.vue';

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

<!-- basic.scss设置的body样式因为要作用到组件外部的body，所以不能scoped -->
<style lang="scss">
@import "../../public/basic.scss";

.index-footer-down{
    margin: 150px auto auto auto;
}
</style>
