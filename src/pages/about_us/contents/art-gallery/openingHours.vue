<template>
    <article-page :html="contentHTML"></article-page>
</template>

<script>

import articlePage from '../../../../public/components/article.vue';
export default {
    components:{
        articlePage,
    },
    data () {
        return {
            contentHTML: `
                <h2>开放时间  <span>OPENING HOURS</span></h2>
                <p>周二至周日9：30--17：00（16：30停止入馆）<br />周一闭馆（节假日除外，特殊情况将在本网站通知）</p>
                <p>Tuesday (Sunday) at 9:30--17:00 (stop at 16:30)<br />Closed on Monday (except holidays, special circumstances will BULLETIN on this website)</p>
            `,
        }
    },
}
</script>

<style lang="scss">
@import "../../../../public/scss/basic.scss";
@import "../../../../public/scss/common.scss";

</style>
