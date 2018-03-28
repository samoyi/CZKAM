<template>
    <works-page :works="works" :title="'国画'" :name-map="nameMap"></works-page>
</template>

<script>
import {fetchJSON} from '../../../../public/js/myUtil.js';
import worksPage from '../../../../public/components/works/works.vue';

export default {
    data () {
        return {
            works: null,
            nameMap: {
                "en": ["cuizhenkuan" , "xinshuimo", "changanhuapai"],
                "ch": ["崔振宽作品", "新水墨作品", "长安画派作品"]
            },
        }
    },
    components: {
        worksPage,
    },
    mounted(){
        fetchJSON.call(this, 'works_research-collection', 'works');
    },
}
</script>

<style scoped lang="scss">

@import "../../../../public/scss/common.scss";
</style>
