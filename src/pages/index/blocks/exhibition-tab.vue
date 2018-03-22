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
@import "../../../public/index.scss";

#exhibitionNews-tab{
    // width: $INDEX_TAB_WIDTH;
    margin-left: $INDEX_TAB_MARGINLEFT;
    // position: relative;
    // h2{
    //     position: absolute; left: 25px; bottom: 25px;
    //     font-size: 18px; font-weight: bold;
    //     color: $STANDARD_COLOR;
    // }
    // >div{
    //     width: 360px; height: 76px;
    //     margin-left: auto; margin-right: auto;
    //     box-sizing: border-box; border-top: 1px solid $LINE_GRAY;
    //     position: relative;
    //     h3{
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //         width: 360px;
    //         position: absolute; top: 24px;
    //         font-size: 14px; font-weight: bold;
    //         span{
    //             color: $STANDARD_COLOR;
    //         }
    //     }
    //     p{
    //         position: absolute; top: 48px;
    //         font-size: 12px; font-weight: bold;
    //         color: $BASIC_GRAY;
    //         white-space: nowrap;
    //         overflow: hidden;
    //         text-overflow: ellipsis;
    //     }
    // }
    // >div:nth-child(3){
    //     border-top: none;
    // }
    // .more{
    //     position: absolute; right: 25px; bottom: 25px;
    //     cursor: pointer;
    // }
}


</style>
