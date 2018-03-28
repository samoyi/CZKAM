<!-- common-footer其中的下半部分
首页的底部只有该组件 -->
<template>
    <div class="footer_down">
        <p>
            陕ICP备15004289号-1  Copyright © {{nYear}} czkam.net Inc. All Rights Reserved. 崔振宽美术馆 版权所有
            <a href="http://www.funca.com.cn" title="凡卡互动" target="_blank">Designed by</a>
            <a href="http://www.funca.com.cn" title="最具价值的互联网品牌设计" target="_blank">凡卡互动</a>
        </p>
        <div class="links" v-html="links"></div>
        <i></i>
    </div>
</template>

<script>

export default {
    data () {
        return {
            aLink: [
                {
                    href: 'service_center.html#会员',
                    title: '会员',
                },
                {
                    href: 'about_us.html#联系我们',
                    title: '联系我们',
                },
                {
                    href: 'service_center.html#下载专区',
                    title: '下载专区',
                },
            ]
        }
    },
    computed: {
        nYear(){
            return (new Date()).getFullYear();
        },
        links(){
            let str = '';
            this.aLink.forEach((link,index)=>{
                // 因为该组件的样式scoped，所以无法作用到新生成html
                str += `<a style="color:#b3b3b3" href="${link.href}" target="_blank">${link.title}</a>`;
                if(index !== this.aLink.length-1){
                    str += '&nbsp;&nbsp;|&nbsp;&nbsp;';
                }
            });
            return str;
        },
    }
}
</script>

<style scoped lang="scss">

// @import '../scss/constants.scss';
@import '../scss/common.scss';

.footer_down{
    width: $FOOTER_WIDTH_1366;
    height: $FOOTER_DOWN_HEIGHT;
    box-sizing: border-box;
    color: $BASIC_GRAY;
    border-top: 1px solid $LINE_GRAY;
    @media (min-width: 1920px){
        width: $FOOTER_WIDTH_1920;
        position: absolute; bottom: 0;
        left: 50%; margin-left: -$FOOTER_WIDTH_1920/2;
    }
    font-size: $FOOTER_FONT_SIZE;

    position: relative;

    >p, .links{
        float: left;
        line-height: $FOOTER_DOWN_HEIGHT;
    }
    .links{
        position: absolute;;
        left: 780px;
        line-height: $FOOTER_DOWN_HEIGHT;
    }
    i{ // logo
        width: 149px; height: 30px;
        float: right;
        $__height:30px;
        width: 149px; height:$__height;
        position: relative;
        top: ($FOOTER_DOWN_HEIGHT - $__height)/2;
        background:{
            image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/sprite.png");
            position: -1590px -51px;
        }
    }
}
</style>
