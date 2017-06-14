;"use strict";

let vHeader = new Vue({
    components: {
        "header-template": {
            template: `
                <div>
                    <img id="top_logo" alt="崔振宽美术馆" />
                    <ul class="menu">
                        <a href="about_us.html"><li>关于我们<br /><span>ABOUT US</span></li></a>
                        <a href="CuiZhenkuan.html"><li>崔振宽艺术<br /><span>CUIZHENKUAN ART</span></li></a>
                        <a href="exhibition.html"><li>展览<br /><span>EXHIBITION</span></li></a>
                        <a href="public_education.html"><li>公共教育<br /><span>PUBLIC EDUCATION</span></li></a>
                        <a href="reserch-collection.html"><li>学术研究·馆藏<br /><span>RESERCH·COLLECTION</span></li></a>
                        <a href="gallery-derivatives.html"><li>画廊·衍生品<br /><span>GALLERY·DERIVATIVES</span></li></a>
                        <a href="service_center.html"><li>服务中心<br /><span>SERVICE CENTER5</span></li></a>
                    </ul>
                </div>`,
        }
    },
    el: "#common-header",
});

let vContent = new Vue({
    components: {
        "carousel-tab": {
            props: ["tab"],
            template: `
                <div>
                    <h3><span>{{tab[1]}} | </span>{{tab[2]}}</h3>
                </div>`,
        },
        "exhibition-news": {
            props: ["news"],
            template: `
                <div>
                    <h3><span>{{news[0]}} | </span>{{news[1]}}</h3>
                    <p>{{news[2]}}</p>
                </div>`,
        },
        "public_education-news": {
            props: ["news"],
            template: `
                <div>
                    <h3><span>{{news[0]}} | </span>{{news[1]}}</h3>
                </div>`,
        },
        "bulletin-tab": {
            props: ["tab"],
            template: `
                <div id="bulletin-tab">
                    <h3>{{tab[1]}}</h3>
                    <p>{{tab[2]}}</p>
                    <p>{{tab[3]}}</p>
                    <span class="more">MORE</span>
                </div>`,
        },
        "gallery-base-info": {
            template: `
                <div>
                    <h2>美术馆 ART GALLERY</h2>
                    <p><span>开放时间：</span>周二至周日 9:30--17:00（16:30停止入馆）<br />周一闭馆（节假日除外，特殊情况将在本网站通知）</p>
                    <p><span>地址：</span>西安市灞桥区灞桥生态湿地公园柳雪路996号</p>
                    <p><span>电话：</span>029-83626699</p>
                    <img alt="二维码" />
                </div>
            `,
        },

    },
    el: "#content",
    data: {
        carouselTabs: [],
        carouselIndex: 0,
        exhibitionNews: [[,,],],
        publicEducationNews: [[,],],
        bulletinTabs: [],
        bulletinIndex: 0,
    },
    computed: {
        carouselGetTab(){
            if( this.carouselTabs.length ){
                return this.carouselTabs[this.carouselIndex];
            }
            else{
                return [,,];
            }
        },
        bulletinGetTab(){
            if( this.bulletinTabs.length ){
                return this.bulletinTabs[this.bulletinIndex];
            }
            else{
                return [,,];
            }
        },
    },
});

// 之后将要从后台接收到的数据
vContent.carouselTabs = [
    ["http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/carousel/test.png", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（一）"],
    ["http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/carousel/test.png", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（二）"],
    ["http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/carousel/test.png", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（三）"],
    ["http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/carousel/test.png", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（四）"]
];
// 轮播
setInterval(function(){
    vContent.carouselIndex = (vContent.carouselIndex+1) % 3;
}, 1000);

vContent.exhibitionNews = [
    ["预告", "2016中国·西安“崔振宽美术馆”国际", "2016.9.20-10.20"],
    ["", "首届陕西省大学生摄影大展开幕啦！", "2016.11.6"],
    ["", "墨色无间——汪劲松、王承云实验艺术展开幕", "2016.11.20-12.5"]
];


vContent.publicEducationNews = [
    ["公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（一）"],
    ["公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（二）"],
    ["公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（三）"],
    ["公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（四）"]
];
// 轮播
setInterval(function(){
    vContent.publicEducationIndex = (vContent.publicEducationIndex+1) % 3;
}, 1000);

vContent.bulletinTabs = [
    ["", "提前闭馆通知1", "通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容", "2017.5.5"],
    ["", "提前闭馆通知2", "通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容", "2017.5.5"],
    ["", "提前闭馆通知3", "通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容", "2017.5.5"],
    ["", "提前闭馆通知4", "通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容", "2017.5.5"]
];
// 轮播
setInterval(function(){
    vContent.bulletinIndex = (vContent.bulletinIndex+1) % 3;
}, 1000);






//
// let vCommonFooter = new Vue({
//     el: "#common-footer",
//     components: {
//         "common-footer": {
//             template: `
//             <section>
//                 <div class="footer_up">
//                     <div id="bulletin-tab">
//                         <h2>公告 BULLETIN</h2>
//                         <bulletin-tab ref="bulletin" :tab="getTab"></bulletin-tab>
//                         <span class="more">MORE</span>
//                     </div>
//                     <div id="gallery_base_info">
//                         <gallery-base-info></gallery-base-info>
//                         <span class="more">MORE</span>
//                     </div>
//                     <img alt="二维码" />
//                     <div style="clear:both;"></div>
//                 </div>
//                 <div class="footer_down">
//                     <p>陕ICP备07030830号-5  Copyright © 2015 czkam.net Inc. All Rights Reserved. 崔振宽美术馆 版权所有  Designed by 凡卡互动</p>
//                     <div>
//                         <a href="">会员</a>
//                         <a href="">联系我们</a>
//                         <a href="">下载专区</a>
//                     </div>
//                     <img alt="右下角logo" />
//                 </div>
//             </section>
//             `,
//             components: {
//                 "bulletin-tab": {
//                     props: ["tab"],
//                     template: `
//                     <div>
//                         <h3>{{tab[0]}}</h3>
//                         <p class="bulletin_content" v-html="tab[1]"></p>
//                         <p>{{tab[2]}}</p>
//                         <slot></slot>
//                     </div>`,
//
//                 },
//                 "gallery-base-info": {
//                     // FIXME 这里不得已而加了一个没有用处的根元素，在HTML多出了一个没用div节点
//                     template: `
//                     <div>
//                         <h2>美术馆 ART GALLERY</h2>
//                         <p><span>开放时间：</span>周二至周日 9:30--17:00（16:30停止入馆）<br />周一闭馆（节假日除外，特殊情况将在本网站通知）</p>
//                         <p><span>地址：</span>西安市灞桥区灞桥生态湿地公园柳雪路996号</p>
//                         <p><span>电话：</span>029-83626699</p>
//                     </div>
//                     `,
//                 }
//             },
//             data: function(){
//                 return {
//                     tabs: [],
//                     index: 0,
//                 };
//             },
//             computed: {
//                 getTab(){
//                     if( this.tabs.length ){
//                         return this.tabs[this.index];
//                     }
//                     else{
//                         return [,,];
//                         /*
//                         * FIXME1
//                         * 这里计算的时候，tabs还是是空的，所以只能通过判断然后先返回一个
//                         * 空的三项数组，否则模板里取数组项的时候就会出错。有没有更好的办法？
//                         */
//                     }
//                 },
//             },
//         },
//     },
// });


//
// // 首页轮播图
// let vCarouselTab = new Vue({
//     components: {
//         "carousel-tab": {
//             props: ["tab"],
//             template: `
//                 <div>
//                     <h3><span>{{tab[1]}} | </span>{{tab[2]}}</h3>
//                     <img :src="tab[0]" :alt="tab[2]" />
//                 </div>`,
//         },
//     },
//     el: "#carousel-tab",
//     data: {
//         tabs: [],
//         index: 0,
//     },
//     computed: {
//         getTab(){
//             if( this.tabs.length ){
//                 return this.tabs[this.index];
//             }
//             else{
//                 return [,,];
//             }
//         },
//     }
// });
// // 之后将要从后台接收到的数据
// vCarouselTab.tabs = [
//     ["", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（一）"],
//     ["", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（二）"],
//     ["", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（三）"],
//     ["", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（四）"]
// ];
// // 轮播
// setInterval(function(){
//     vCarouselTab.index = (vCarouselTab.index+1) % 3;
// }, 1000);
//
//
//
// // 首页展览版块
// let vExhibitionTab = new Vue({
//     components: {
//         "exhibition-tab": {
//             props: ["tab"],
//             template: `
//                 <div>
//                     <h3><span>{{tab[1]}} | </span>{{tab[2]}}</h3>
//                     <img :src="tab[0]" :alt="tab[2]" />
//                     <p>{{tab[3]}}</p>
//                 </div>`,
//         },
//     },
//     el: "#exhibition-tab",
//     data: {
//         tabs: [],
//         index: 0,
//     },
//     computed: {
//         getTab(){
//             if( this.tabs.length ){
//                 return this.tabs[this.index];
//             }
//             else{
//                 return [,,,];
//             }
//         },
//     }
// });
// // 之后将要从后台接收到的数据
// vExhibitionTab.tabs = [
//     ["", "预告", "2016中国·西安“崔振宽美术馆”国际", "2016.9.20-10.20"],
//     ["", "", "首届陕西省大学生摄影大展开幕啦！", "2016.11.6"],
//     ["", "", "墨色无间——汪劲松、王承云实验艺术展开幕", "2016.11.20-12.5"]
// ];
// // 轮播
// setInterval(function(){
//     vExhibitionTab.index = (vExhibitionTab.index+1) % 3;
// }, 1000);
//
//
//
// // 首页公教版块
// let vPublicEducationTab = new Vue({
//     components: {
//         "public_education-tab": {
//             props: ["tab"],
//             template: `
//                 <div>
//                     <h3><span>{{tab[1]}} | </span>{{tab[2]}}</h3>
//                     <img :src="tab[0]" :alt="tab[2]" />
//                 </div>`,
//         },
//     },
//     el: "#public_education-tab",
//     data: {
//         tabs: [],
//         index: 0,
//     },
//     computed: {
//         getTab(){
//             if( this.tabs.length ){
//                 return this.tabs[this.index];
//             }
//             else{
//                 return [,,];
//             }
//         },
//     }
// });
// // 之后将要从后台接收到的数据
// vPublicEducationTab.tabs = [
//     ["", "公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（一）"],
//     ["", "公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（二）"],
//     ["", "公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（三）"],
//     ["", "公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（四）"]
// ];
// // 轮播
// setInterval(function(){
//     vPublicEducationTab.index = (vPublicEducationTab.index+1) % 3;
// }, 1000);
