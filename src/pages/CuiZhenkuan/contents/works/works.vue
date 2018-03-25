<template>
    <works-page :works="works" :title="'作品'" :name-map="nameMap"></works-page>
</template>

<script>
import {fetchJSON} from '../../../../public/myUtil.js';
import worksPage from '../../../../public/works/works.vue';

export default {
    data () {
        return {
            works: null,
            nameMap: {
                "en": ["jiaomo" , "shuimo", "xiaopin", "xiesheng"],
                "ch": ["焦墨", "水墨", "小品", "写生"]
            },
        }
    },
    components: {
        worksPage,
    },
    mounted(){
        fetchJSON.call(this, 'CZKworks', 'works');
    },
}
</script>

<style scoped lang="scss">
@import "../../../../public/basic.scss";
@import "../../../../public/common.scss";
</style>
