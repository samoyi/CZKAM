

;"use strict";

var vHeader = new Vue({
    components: {
        "header-template": {
            template: "\n                <div>\n                    <div id=\"top_logo\"></div>\n                    <ul class=\"menu\">\n                        <li><a href=\"about_us.html\">\u5173\u4E8E\u6211\u4EEC<p>ABOUT US</p></a></li>\n                        <li><a href=\"CuiZhenkuan.html\">\u5D14\u632F\u5BBD\u827A\u672F<p>CUIZHENKUAN ART</p></a></li>\n                        <li><a href=\"exhibition.html\">\u5C55\u89C8<p>EXHIBITION</p></a></li>\n                        <li><a href=\"public_education.html\">\u516C\u5171\u6559\u80B2<p>PUBLIC EDUCATION</p></a></li>\n                        <li><a href=\"research-collection.html\">\u5B66\u672F\u7814\u7A76\xB7\u9986\u85CF<p>RESEARCH\xB7COLLECTION</p></a></li>\n                        <li><a href=\"gallery-derivatives.html\">\u753B\u5ECA\xB7\u884D\u751F\u54C1<p>GALLERY\xB7DERIVATIVES</p></a></li>\n                        <li><a href=\"service_center.html\">\u670D\u52A1\u4E2D\u5FC3<p>SERVICE CENTER5</p></a></li>\n                    </ul>\n                </div>"
        }
    },
    el: "#common-header"
});

var vContent = new Vue({
    components: {
        "carousel-tab": {
            props: ["tab"],
            template: "\n                <div class=\"swiper-slide\">\n                    <h3><span>{{tab[1]}} | </span>{{tab[2]}}</h3>\n                </div>\n                "
        },
        "exhibition-news": {
            props: ["news"],
            template: "\n                <div>\n                    <h3><span>{{news[0]}}</span><span v-if=\"news[0]\"> | </span><a :href=\"news[3]\" target=\"_blank\">{{news[1]}}</a></h3>\n                    <p>{{news[2]}}</p>\n                </div>"
        },
        "public_education-news": {
            props: ["news"],
            template: "\n                <div>\n                    <h3><span>{{news[0]}} | </span><a :href=\"news[2]\" target=\"_blank\">{{news[1]}}</a></h3>\n                </div>"
        },
        "bulletin-tab": {
            props: ["tab", "curIndex"],
            template: "\n                <div id=\"bulletin-tab\">\n                    <h3>{{tab[0]}}</h3>\n                    <p class=\"bulletin_content\">\n                        {{tab[1]}}\n                        <br />\n                        <span class=\"bulletin_date\">{{tab[2]}}</span>\n                    </p>\n                    <ul>\n                        <li v-if=\"false\" v-bind:class=\"{active_tab: curIndex===0}\"  @click=\"clickPagination(0)\">\u25CF</li>\n                        <li v-if=\"false\" v-bind:class=\"{active_tab: curIndex===1}\"  @click=\"clickPagination(1)\">\u25CF</li>\n                        <li v-if=\"false\" v-bind:class=\"{active_tab: curIndex===2}\"  @click=\"clickPagination(2)\">\u25CF</li>\n                    </ul>\n                </div>",
            methods: {
                clickPagination: function clickPagination(clickedIndex) {
                    this.$emit("switchpagination", clickedIndex);
                }
            }
        },
        "gallery-base-info": {
            template: "\n                <div>\n                    <h2>\u7F8E\u672F\u9986 ART GALLERY</h2>\n                    <div class=\"time\"><h3>\u5F00\u653E\u65F6\u95F4\uFF1A</h3>\u5468\u4E8C\u81F3\u5468\u65E5 9:30--17:00\uFF0816:30\u505C\u6B62\u5165\u9986\uFF09<br />\u5468\u4E00\u95ED\u9986\uFF08\u8282\u5047\u65E5\u9664\u5916\uFF0C\u7279\u6B8A\u60C5\u51B5\u5C06\u5728\u672C\u7F51\u7AD9\u901A\u77E5\uFF09</div>\n                    <div class=\"add\"><h3>\u5730\u5740\uFF1A</h3>\u897F\u5B89\u5E02\u705E\u6865\u533A\u705E\u6865\u751F\u6001\u6E7F\u5730\u516C\u56ED\u67F3\u96EA\u8DEF996\u53F7</div>\n                    <div class=\"tel\"><h3>\u7535\u8BDD\uFF1A</h3>029-83626699</div>\n                </div>\n            "
        }

    },
    el: "#content",
    data: {
        carouselTabs: [],
        carouselIndex: 0,
        exhibitionNews: [[,,]],
        publicEducationNews: [[,]],
        bulletinTabs: [],
        bulletinIndex: 0
    },
    computed: {
        carouselGetTab: function carouselGetTab() {
            if (this.carouselTabs.length) {
                return this.carouselTabs[this.carouselIndex];
            } else {
                return [,,];
            }
        },
        bulletinGetTab: function bulletinGetTab() {
            if (this.bulletinTabs.length) {
                return this.bulletinTabs[this.bulletinIndex];
            } else {
                return [,,];
            }
        }
    },
    methods: {
        switchtab: function switchtab(clickedIndex) {
            this.bulletinIndex = clickedIndex;
        }
    }
});

// 之后将要从后台接收到的数据
// vContent.carouselTabs = [
//     ["image/index/carousel/0.jpg", "预告", "保持记录——2017西安国际摄影邀请展"],
//     ["image/index/carousel/1.jpg", "预告", "工匠精神——谈国展创作"],
//     ["image/index/carousel/2.jpg", "预告", "墨色无间——汪劲松、王承云实验艺术展开幕"]
// ];


vContent.exhibitionNews = [["", "崔振宽美术馆开馆暨“苍山无言——崔振宽画展”启幕", "2016.9.20-10.20", "exhibition.html?id=kaiguan#常设展览"], ["", "首届陕西省大学生摄影大展开幕啦！", "2016.11.6", "exhibition.html?id=daxueshengsheyingzhan#常设展览"], ["", "墨色无间——汪劲松、王承云实验艺术展开幕", "2016.11.20-12.5", "exhibition.html?id=mosewujian#常设展览"]];

vContent.publicEducationNews = [["公教活动", "2016首届崔振宽山水画创作研修班汉中采风行", "public_education.html?id=hanzhong#山水高研班"], ["公教活动", "工匠精神——谈国展创作", "public_education.html?id=gongjiangjingshen#艺术大讲堂"]];

vContent.bulletinTabs = [["五一假期开闭馆时间安排", "五一假期，崔振宽美术馆、水墨长安艺术博物馆正常开馆", "2017.4.28"]];
// 轮播
// setInterval(function(){
//     vContent.bulletinIndex = (vContent.bulletinIndex+1) % 3;
// }, 10000);


var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 5000,

    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'

});

window.onload = function () {

    // 预加载轮播图连接的资源
};
