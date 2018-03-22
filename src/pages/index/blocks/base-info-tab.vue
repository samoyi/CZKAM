<!--
    首页美术馆信息tab
-->

<template>
    <div id="base-info-tab">
        <div>
            <h2>美术馆 ART MUSEUM</h2>
            <div class="time"><h3>开放时间：</h3>周二至周日 9:30--17:00（16:30停止入馆）<br />周一闭馆（节假日除外，特殊情况将在本网站通知）</div>
            <div class="add"><h3>地址：</h3>西安市灞桥区灞桥生态湿地公园柳雪路996号</div>
            <div class="tel"><h3>电话：</h3>029-83626699</div>
        </div>
        <i class="code"></i>
    </div>
</template>

<script>


export default {
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


#base-info-tab{
    margin-left: $INDEX_TAB_MARGINLEFT;
    >div{
        font-size: 12px;
        width: 360px;
        margin-left: auto; margin-right: auto;
        h2{
            font-weight: normal;
            top: 40px; left: ($INDEX_TAB_WIDTH - 360)/2;
        }
        >div{
            color: $BASIC_GRAY;
            position: absolute;
            line-height: 22px;
            h3{
                color: $BASIC_BLACK;
                font-weight: normal;
                position: static;
            }
        }
        .time{
            top: 90px;
        }
        .add{
            top: 175px;
        }
        .tel{
            top: 240px;
        }
    }
    .code{
        width: 109px; height: 109px;
        position: absolute; right: 20px; bottom: 20px;
        background:{
            image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/sprite.png");
            position: -1629px -81px;
        }
    }
}
</style>
