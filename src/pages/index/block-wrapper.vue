<!--
    包含轮播图、展览tab、公共教育tab、公告tab和美术馆信息tab
-->

<template>
    <div id="blockWrapper">
        <carousel-box :carousel-data="indexData.carousel"></carousel-box>
        <exhibition-tab :exhibition-news="indexData.news.slice(0,3)"></exhibition-tab>
        <public-tab :public-news="indexData.public.slice(0,3)"></public-tab>
        <bulletin-tab :bulletins="indexData.bulletin.slice(0,3)"></bulletin-tab>
        <base-info-tab></base-info-tab>
        <p style="clear:both;"></p>
    </div>
</template>

<script>

import carouselBox from '../../public/carousel-box.vue';
import exhibitionTab from './blocks/exhibition-tab.vue';
import publicTab from './blocks/public-tab.vue';
import bulletinTab from './blocks/bulletin-tab.vue';
import baseInfoTab from './blocks/base-info-tab.vue';

export default {
    props: ['indexData'],
    data () {
        return {

        }
    },
    components: {
        carouselBox,
        exhibitionTab,
        publicTab,
        bulletinTab,
        baseInfoTab,
    },
}
</script>


<style scoped lang="scss">

@import "../../public/basic.scss";
@import "../../public/common.scss";
@import "./index.scss";

$carousel_width: 813px;
$tab_width: 400px;
$tab_marginLeft: 13px;

#blockWrapper{
    @media (min-width: 1920px){
        width: $carousel_width + $tab_width*4 + $tab_marginLeft*4;
    }
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
}

</style>
