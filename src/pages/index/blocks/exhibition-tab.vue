<!--
    首页展览tab
-->

<template>
    <div id="exhibitionNews-tab">
        <h2>展览 EXHIBITION</h2>
        <img src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/exhibition/head.jpg" />
        <div v-for="news in exhibitionNews">
            <h3>
                <span>{{news.tag}}</span>
                <span v-if="news.tag"> | </span>
                <a :href="news.link" target="_blank">{{news.name}}</a>
            </h3>
            <p>{{news.des}}</p>
        </div>
        <a href="exhibition.html" target="_blank" class="more">MORE</a>
    </div>
</template>

<script>


export default {
    props: ['exhibitionNews'],
    data () {
        return {

        }
    },
}
</script>


<style scoped lang="scss">

@import "../../../public/basic.scss";
@import "../../../public/common.scss";
@import "../index.scss";

#exhibitionNews-tab{
    margin-left: $INDEX_TAB_MARGINLEFT;
}


</style>
