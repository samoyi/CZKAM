<!-- 图文文章组件 例如【关于我们——美术馆——简介】 -->
<template>
    <section class="article" v-html="html"></section>
</template>

<script>
export default {
    props: {
        html: { // 文章内容HTML
            type: String,
            default: '<h2>加载中……</h2>'
        },
    },
    data () {
        return {
        }
    },
}
</script>

<!-- 因为要插入html，所以不能scoped -->
<style lang="scss">

@import "../scss/common.scss";

.article{
    h2{
        font-size: 16px;
        color: $BASIC_BLACK;
        span{
            display: none;
            font-size: 14px;
            color: $BASIC_GRAY;
            font-weight: bold;
        }
    }
    font-size: 12px;
    color: $BASIC_BLACK;
    p{
        margin-top: 24px;
    }
    .articalImgP{
        text-align: center;
        .articalImg{
            width:530px;
        }
    }
}
</style>
