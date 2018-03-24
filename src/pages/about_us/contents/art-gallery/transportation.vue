<template>
    <article-page :html="contentHTML"></article-page>
</template>

<script>

import articlePage from '../../../../public/article.vue';
export default {
    components:{
        articlePage,
    },
    data () {
        return {
            contentHTML: `
                <h2>地理交通  <span>TRANSPORTATION</span></h2>
                <p>西安纺织城交通枢纽站（地铁1号线）对面乘坐269路公交车，至“湿地公园·圣堤雅娜站”下车，沿紧邻的十字路向东南方约500米至崔振宽美术馆（自驾请直接搜索“西安崔振宽美术馆”）。</p>
                <p>The textile city of Xi'an transportation hub station (Metro Line 1) opposite the 269 bus ride to San Di Yana Wetland Park Station, adjacent to the southeast along the cross direction about 500 meters to Cui Zhenkuan Gallery (self driving please search "Xi'an Cui Zhenkuan Museum").</p>
                <div id="bd_map"></div>
            `,
        }
    },
    mounted(){
        // 加载百度地图
        // 需要在 src\pageConfig.json 中引入百度地图脚本
        var map = new BMap.Map("bd_map");
        var point = new BMap.Point(109.095807, 34.294372);
        map.centerAndZoom(point, 15);
        //创建标注
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);               // 将标注添加到地图中
        marker.setAnimation();
        // 启用滚轮放大缩小
        map.enableScrollWheelZoom();
    },
}
</script>

<style lang="scss">
@import "../../../../public/basic.scss";
@import "../../../../public/common.scss";

#bd_map{
    width: 530px;
    height: 300px;
}
</style>
