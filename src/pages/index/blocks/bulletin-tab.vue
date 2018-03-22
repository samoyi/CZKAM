<!--
    首页公告tab
-->

<template>
    <div id="bulletin-tab">
        <h2>公告 BULLETIN</h2>
        <img src="http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/bulletin/head.jpg" />
        <!-- <bulletin-tab :tabs="bulletinTabs" :cur-index="bulletinIndex"></bulletin-tab> -->
        <div v-for="bulletin in bulletins">
            <h3>
                <a :href="bulletin.link" target="_blank">{{bulletin.title}}</a>
            </h3>
        </div>
        <a href="service_center.html#公告" target="_blank" class="more">MORE</a>
    </div>
</template>

<script>


export default {
    props: ["bulletins"],
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

#bulletin-tab{
    // width: $INDEX_TAB_WIDTH;
    margin-left: $INDEX_TAB_MARGINLEFT;
    // img{
    //     width: 100%; height:170px;
    //     display: block;
    // }
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
