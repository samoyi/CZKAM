<template>
    <news-page :news="news" :title="'学术活动'" :name-map="nameMap"></news-page>
</template>

<script>
import {fetchJSON} from '../../../../public/js/myUtil.js';
import newsPage from '../../../../public/components/news/news.vue';

export default {
    data () {
        return {
            news: null,
            nameMap: {
                "en": ["all" , "2018", "2017", "2016"],
                "ch": ["全部", "2018", "2017", "2016"]
            },
        }
    },
    components: {
        newsPage,
    },
    mounted(){
        fetchJSON.call(this, 'events_research-collection', 'news');
    },
}
</script>

<style scoped lang="scss">
// @import "../../../../public/scss/basic.scss";
@import "../../../../public/scss/common.scss";
</style>
