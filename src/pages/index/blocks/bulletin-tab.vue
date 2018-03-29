<!--
    首页公告tab
-->

<template>
    <div id="bulletin-tab">
        <h2>公告 BULLETIN</h2>
        <img src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/bulletin/head.jpg" />
        <div v-for="bulletin in bulletins">
            <h3>
                <a :href="bulletin.link" target="_blank" :title="bulletin.title">{{bulletin.title}}</a>
            </h3>
        </div>
        <a href="service_center.html#公告" target="_blank" class="more">MORE</a>
    </div>
</template>

<script>


export default {
    props: {
        bulletins: {
            type: Array,
            default: function(){
                return [];
            },
        },
    },
    data () {
        return {}
    },
}
</script>


<style scoped lang="scss">


@import "../../../public/scss/common.scss";
@import "../index.scss";

#bulletin-tab{
    margin-left: $INDEX_TAB_MARGINLEFT;

}
</style>
