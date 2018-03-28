<template>
    <div id="wrapper">
        <common-header></common-header>
        <section id="CuiZhenkuan-middle" class="common-middle">
            <common-cata :titles="cataData.titles"
                    :catas="cataData.catas"></common-cata>
            <section class="content">
                <section>
                    <router-view></router-view>
                </section>
            </section>
            <div style="clear:both;"></div>
        </section>

        <common-footer></common-footer>
    </div>
</template>

<script>

import {fetchJSON} from '../../public/js/myUtil.js';
import commonHeader from '../../public/components/common-header.vue';
import commonCata from '../../public/components/catalog.vue';
import commonFooter from '../../public/components/common-footer.vue';

export default {
    data () {
        return {
            indexData: { // 首页的所有数据
                news: [],
                public: [],
                bulletin: [],
            },
            cataData: { // 目录的标题和列表
                titles: {
                    ch:'',
                    en: '',
                },
                catas: [],
            },
        }
    },
    components: {
        commonHeader,
        commonCata,
        commonFooter,
    },
    methods: {
        
    },
    mounted(){
        // 获取左侧目录数据
        fetchJSON.call(this, 'cata_cuizhenkuan', 'cataData');
    }
}
</script>

<!-- basic.scss设置的body样式因为要作用到组件外部的body，所以不能scoped -->
<style scoped lang="scss">
// @import "../../public/scss/basic.scss";
@import "../../public/scss/common.scss";

// .common-middle{
//     width: $MIDDLE_WIDTH;
//     margin-left: auto; margin-right: auto;
//     padding-top: 105px;
//     box-sizing: border-box;
// }
</style>
