<!--
    首页公共教育tab
-->

<template>
    <div id="public-tab">
        <h2>公共教育 PUBLIC EDUCATION</h2>
        <img src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/public/head.jpg" />
        <div v-for="news in publicNews">
            <h3>
                <span>{{news.tag}}</span>
                <span v-if="news.tag"> | </span>
                <a :href="news.link" target="_blank">{{news.name}}</a>
            </h3>
            <p>{{news.des}}</p>
        </div>
        <a href="public_education.html" target="_blank" class="more">MORE</a>
    </div>
</template>

<script>


export default {
    props: ['publicNews'],
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

#public-tab{
    margin-left: 0;
    @media (min-width: 1920px){
        margin-left: $INDEX_TAB_MARGINLEFT;
    }
}
</style>
