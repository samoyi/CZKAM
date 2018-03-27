<template>
    <div id="wrapper">
        <common-header></common-header>
        <section id="service_center-middle" class="common-middle">
            <common-cata :titles="cataData.title"
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
            cataData: { // 目录的标题和列表
                title: [],
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
        fetchJSON.call(this, 'cata_service_center', 'cataData');
    }
}
</script>

<style scoped lang="scss">
@import "../../public/scss/basic.scss";
@import "../../public/scss/common.scss";
</style>
