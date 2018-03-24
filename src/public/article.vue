<template>
    <section class="article" v-html="html"></section>
</template>

<script>

export default {
    props: ['html'],
    data () {
        return {
        }
    },
}
</script>

<style lang="scss">
@import "./basic.scss";
@import "./common.scss";

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
