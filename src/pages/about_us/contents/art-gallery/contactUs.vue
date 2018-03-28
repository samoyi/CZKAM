<template>
    <article-page :html="contentHTML"></article-page>
</template>

<script>

import articlePage from '../../../../public/components/article.vue';
export default {
    components:{
        articlePage,
    },
    data () {
        return {
            contentHTML: `
                <h2>联系我们  <span>CONTACT US</span></h2>
                <p>
                    地址：陕西省西安市灞桥区柳雪路996号<br>
                    邮编：710024
                </p>
                <p>
                    电话：029-83626699<br>
                    QQ：2682715938<br>
                    邮箱：czkam@qq.com
                </p>
                <p class="codeArea">
                    崔振宽美术馆微信公众服务号
                </p>
                <div class="gongzhongCode"></div>
                <p class="codeArea">
                    崔振宽美术馆微信订阅号
                </p>
                <div class="dingyueCode"></div>
                <p class="codeArea">
                    水墨长安艺术博物馆微信公众服务号
                </p>
                <div class="shuimochanganCode"></div>
            `,
        }
    },
}
</script>

<style lang="scss">
// @import "../../../../public/scss/basic.scss";
@import "../../../../public/scss/common.scss";

 .codeArea{
     font-size: 18px;
     font-weight: bold;
     margin-top: 60px;
 }
 .gongzhongCode, .dingyueCode, .shuimochanganCode{
     background-image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/sprite.png");
     width: 530px; height: 530px;
     -webkit-transform: scale3d(0.5, 0.5, 0.5);
     transform: scale3d(0.5, 0.5, 0.5);
 }
 .gongzhongCode{
     background-position: 0 0;
 }
 .dingyueCode{
     background-position: -530px 0;
 }
 .shuimochanganCode{
     background-position: -1060px 0;
 }

</style>
