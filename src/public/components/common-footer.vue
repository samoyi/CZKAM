<template>
    <footer class="common-footer">
        <section>
            <div class="footer_up">
                <div class="bulletin-tab" v-if="bulletins.length">
                    <h2>公告 BULLETIN</h2>
                    <div>
                        <a :href="bulletins[curBulletinIndex].link">
                        <h3>{{bulletins[curBulletinIndex].title}}</h3>
                        <p class="bulletin_content">{{bulletins[curBulletinIndex].detail}}</p>
                        </a>
                    </div>
                    <ul>
                        <!-- 点击圆点切换公告 -->
                        <li v-for="(item, index) in bulletins.slice(0, 3)"
                                v-bind:class="{active_tab: index===curBulletinIndex}"
                                @click="switchtab(index)">
                            ●
                        </li>
                    </ul>
                    <a href="service_center.html#公告" target="_black" class="more">MORE</a>
                </div>
                <div class="gallery_base_info">
                    <h2>美术馆 ART GALLERY</h2>
                    <p><span>开放时间：</span><span v-html="sOpeningTime"></span></p>
                    <p><span>地址：</span><span v-html="sAddr"></span></p>
                    <p><span>电话：</span><span v-html="sTel"></span></p>
                </div>
                <i></i>
                <div style="clear:both;"></div>
            </div>
            <footer-down class="footer_down"></footer-down>
        </section>
    </footer>
</template>

<script>

import {fetchJSON} from '../js/myUtil.js';
import footerDown from './footer-down.vue';

export default {
    data () {
        return {
            bulletins: [], // 要显示的所有的公告数据
            curBulletinIndex: 0, // 当前显示的公告index，用于切换。
            sOpeningTime: '周二至周日 9:30--17:00（16:30停止入馆）<br />周一闭馆（节假日除外，特殊情况将在本网站通知）',
            sAddr: '西安市灞桥区灞桥生态湿地公园柳雪路996号',
            sTel: '029-83626699',
        }
    },
    components: {
        footerDown,
    },
    methods: {
        switchtab(index){
            this.curBulletinIndex = index;
        },
    },
    mounted(){
        fetchJSON.call(this, 'bulletins', 'bulletins');
    },
}
</script>

<style scoped lang="scss">

@import '../scss/basic.scss';

.common-footer{
    width: $FOOTER_WIDTH_1366;
    margin: 200px auto auto auto;
    @media (min-width: 1920px){
        width: $FOOTER_WIDTH_1920;
    }
    font-size: $FOOTER_FONT_SIZE;
    >section{
        .footer_up{
            height: 230px; padding: 38px 0 38px 0;
            box-sizing: border-box;
            border-top: 1px solid $LINE_GRAY;
            border-bottom: 1px solid $LINE_GRAY;
            .bulletin-tab, .gallery_base_info{
                float: left;
                position: relative;
                h2{
                    font-size: 14px;
                    font-weight: bold;
                    color: $STANDARD_COLOR;
                }
                >div{
                    font-size: 12px;
                    p{
                        color: $BASIC_GRAY;
                    }
                }
            }
            .bulletin-tab{
                width: 335px; height:158px;
                @media (min-width: 1920px){
                    margin-left: 277px;
                }
                >div{
                    font-size: 12px;
                    position: relative;
                    top: 20px;
                    h3{
                        color: $BASIC_BLACK;
                        margin-bottom: 12px;
                    }
                    .bulletin_content{
                        line-height: 22px;
                        margin-bottom: 24px;
                    }
                }
                ul{
                    position: absolute;
                    bottom: 0px; right: 0;
                    .active_tab{
                        color: $STANDARD_COLOR;
                    }
                    li{
                        float: left;
                        margin-left: 6px;
                        cursor: pointer;
                    }
                }
                .more{
                    position: absolute;
                    top: 0;
                    right: 0;
                }
            }
            .gallery_base_info{
                width: 365px; height:158px;
                margin-left: 100px;
                font-size: 12px;
                p{
                    color: $BASIC_GRAY;
                    line-height: 22px;
                    margin-top: 16px;
                    span:first-child{
                        color: $BASIC_BLACK;
                    }
                }
            }
            >i{
                width: 109px; height:109px;
                background:{
                    image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/sprite.png");
                    position: -1629px -81px;
                }
                float: right; margin-right: 20px;
                @media (min-width: 1920px){
                    margin-right: 270px;
                }
            }
        }
        .footer_down{
            position: relative;
            // height: $FOOTER_DOWN_HEIGHT;
            // color: $BASIC_GRAY;
            // >p, >div{
            //     float: left;
            //     line-height: $FOOTER_DOWN_HEIGHT;
            // }
            // >div{
            //     position: absolute;;
            //     left: 780px;
            //     line-height: $FOOTER_DOWN_HEIGHT;
            // }
            // >i{
            //     width: 149px; height: 30px;
            //     float: right;
            //     $__height:30px;
            //     width: 149px; height:$__height;
            //     position: relative;
            //     top: ($FOOTER_DOWN_HEIGHT - $__height)/2;
            //     background:{
            //         image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/sprite.png");
            //         position: -1590px -51px;
            //     }
            // }
        }
    }
}

// #footer_up{
//     height: 230px; padding: 38px 0 38px 0;
//     box-sizing: border-box;
//     border-top: 1px solid $LINE_GRAY;
//     border-bottom: 1px solid $LINE_GRAY;
//     #bulletin-tab, #gallery_base_info{
//         float: left;
//         position: relative;
//         h2{
//             font-size: 14px;
//             font-weight: bold;
//             color: $STANDARD_COLOR;
//         }
//         >div{
//             font-size: 12px;
//             p{
//                 color: $BASIC_GRAY;
//             }
//         }
//     }
//     #bulletin-tab{
//         width: 335px; height:158px;
//         @media (min-width: 1920px){
//             margin-left: 277px;
//         }
//         >div{
//             font-size: 12px;
//             position: relative;
//             top: 20px;
//             h3{
//                 color: $BASIC_BLACK;
//                 margin-bottom: 12px;
//             }
//             .bulletin_content{
//                 line-height: 22px;
//                 margin-bottom: 24px;
//             }
//         }
//         ul{
//             position: absolute;
//             bottom: 0px; right: 0;
//             .active_tab{
//                 color: $STANDARD_COLOR;
//             }
//             li{
//                 float: left;
//                 margin-left: 6px;
//                 cursor: pointer;
//             }
//         }
//         .more{
//             position: absolute;
//             top: 0;
//             right: 0;
//         }
//     }
//     #gallery_base_info{
//         width: 365px; height:158px;
//         margin-left: 100px;
//         font-size: 12px;
//         p{
//             color: $BASIC_GRAY;
//             line-height: 22px;
//             margin-top: 16px;
//             span:first-child{
//                 color: $BASIC_BLACK;
//             }
//         }
//     }
//     >i{
//         width: 109px; height:109px;
//         background:{
//             image: url("http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/sprite.png");
//             position: -1629px -81px;
//         }
//         float: right; margin-right: 20px;
//         @media (min-width: 1920px){
//             margin-right: 270px;
//         }
//     }
// }

</style>
