<!--
    首页footer
-->

<template>
    <footer id="footer">
        <p>陕ICP备07030830号-5  Copyright © {{nYear}} czkam.com Inc. All Rights Reserved. 崔振宽美术馆 版权所有  Designed by 凡卡互动</p>
        <div class="links" v-html="links"></div>
        <i></i>
    </footer>
</template>

<script>

export default {
    data () {
        return {
            // sICP: '陕ICP备07030830号-5',
            // nYear: 2015,
            // aLink: [
            //     {
            //         href: 'service_center.html#会员',
            //         title: '会员',
            //     },
            //     {
            //         href: 'about_us.html#联系我们',
            //         title: '联系我们',
            //     },
            //     {
            //         href: 'service_center.html#下载专区',
            //         title: '下载专区',
            //     },
            // ]
        }
    },
    // computed: {
    //     links(){
    //         let str = '';
    //         this.aLink.forEach((link,index)=>{
    //             // 因为该组件的样式scoped，所以无法作用到新生成html
    //             str += `<a style="color:#b3b3b3" href="${link.href}" target="_blank">${link.title}</a>`;
    //             if(index !== this.aLink.length-1){
    //                 str += '&nbsp;&nbsp;|&nbsp;&nbsp;';
    //             }
    //         });
    //         return str;
    //     },
    // }
}
</script>


<style scoped lang="scss">

// @import "../../public/scss/basic.scss";

// #footer{
//     width: $FOOTER_WIDTH_1366;
//     height: $FOOTER_DOWN_HEIGHT;
//     box-sizing: border-box;
//     color: $BASIC_GRAY;
//     border-top: 1px solid $LINE_GRAY;
//     margin: 150px auto auto auto;
//     @media (min-width: 1920px){
//         width: $FOOTER_WIDTH_1920;
//         position: absolute; bottom: 0;
//         left: 50%; margin-left: -$FOOTER_WIDTH_1920/2;
//     }
//     font-size: $FOOTER_FONT_SIZE;
//
//     position: relative;
//
//     >p, .links{
//         float: left;
//         line-height: $FOOTER_DOWN_HEIGHT;
//     }
//     .links{
//         position: absolute;;
//         left: 780px;
//         line-height: $FOOTER_DOWN_HEIGHT;
//         a{
//             color: $BASIC_GRAY;
//         }
//     }
//     i{ // logo
//         width: 149px; height: 30px;
//         float: right;
//         $__height:30px;
//         width: 149px; height:$__height;
//         position: relative;
//         top: ($FOOTER_DOWN_HEIGHT - $__height)/2;
//         background:{
//             image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/sprite.png");
//             position: -1590px -51px;
//         }
//     }
// }


</style>
