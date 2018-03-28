<!-- 该组件为点击news组件列表项后进入的文章详情 -->
<template>
    <section class="detail">
        <article v-html="html"></article>
        <i class="closeDetail" @click="closeDetail">关闭文章</i>
        <i class="backToTop" @click="backToTop">回到顶部</i>
    </section>
</template>

<script>
import {fetchArticle} from '../js/myUtil.js';
export default {
    data () {
        return {
            html: '<p>正在加载……</p>',
        }
    },
    methods: {
        closeDetail(){
            this.$router.go(-1);
        },
        backToTop(){
            window.scrollTo(0, 0);
        },
    },
    mounted(){

        fetchArticle.call(this, this.$route.params.id, 'html');
    },
}
</script>

<style lang="scss">
// @import "../scss/basic.scss";
@import "../scss/common.scss";

.detail{
    position: relative;
    article{
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
    .closeDetail, .backToTop{
        position: absolute;
        cursor: pointer;
        color: #761301;
        font-size: 0.8em;
        right: 0;
    }
    .closeDetail{
        top: 0px;
    }
    .backToTop{
        bottom: -50px;
    }
}
</style>
