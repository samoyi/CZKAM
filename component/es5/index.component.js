;"use strict";

var vHeader = new Vue({
    components: {
        "header-template": {
            template: "\n                <div>\n                    <div id=\"top_logo\"></div>\n                    <ul class=\"menu\">\n                        <li><a href=\"about_us.html\">关于我们<p>ABOUT US</p></a></li>\n                        <li><a href=\"CuiZhenkuan.html\">崔振宽艺术<p>CUIZHENKUAN ART</p></a></li>\n                        <li><a href=\"exhibition.html\">展览<p>EXHIBITION</p></a></li>\n                        <li><a href=\"public_education.html\">公共教育<p>PUBLIC EDUCATION</p></a></li>\n                        <li><a href=\"research-collection.html\">学术研究·馆藏<p>RESEARCH·COLLECTION</p></a></li>\n                        <li><a href=\"gallery-derivatives.html\">画廊·衍生品<p>GALLERY·DERIVATIVES</p></a></li>\n                        <li><a href=\"service_center.html\">服务中心<p>SERVICE CENTER5</p></a></li>\n                    </ul>\n                </div>"
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
            template: "\n                <div id=\"bulletin-tab\">\n                    <h3>{{tab[0]}}</h3>\n                    <p class=\"bulletin_content\">\n                        {{tab[1]}}\n                        <br />\n                        <span class=\"bulletin_date\">{{tab[2]}}</span>\n                    </p>\n                    <ul>\n                        <li v-if=\"false\" v-bind:class=\"{active_tab: curIndex===0}\"  @click=\"clickPagination(0)\">●</li>\n                        <li v-if=\"false\" v-bind:class=\"{active_tab: curIndex===1}\"  @click=\"clickPagination(1)\">●</li>\n                    </ul>\n                </div>",
            methods: {
                clickPagination: function clickPagination(clickedIndex) {
                    this.$emit("switchpagination", clickedIndex);
                }
            }
        },
        "gallery-base-info": {
            template: "\n                <div>\n                    <h2>美术馆 ART MUSEUM</h2>\n                    <div class=\"time\"><h3>开放时间：</h3>周二至周日 9:30--17:00（16:30停止入馆）<br />周一闭馆（节假日除外，特殊情况将在本网站通知）</div>\n                    <div class=\"add\"><h3>地址：</h3>西安市灞桥区灞桥生态湿地公园柳雪路996号</div>\n                    <div class=\"tel\"><h3>电话：</h3>029-83626699</div>\n                </div>\n            "
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

vContent.exhibitionNews = [["", "墨色无间——汪劲松、王承云实验艺术展开幕", "2016.11.20-12.5", "exhibition.html?id=mosewujian#常设展览"], ["", "首届陕西省大学生摄影大展开幕啦！", "2016.11.6", "exhibition.html?id=daxueshengsheyingzhan#常设展览"], ["", "崔振宽美术馆开馆暨“苍山无言——崔振宽画展”启幕", "2016.9.20-10.20", "exhibition.html?id=kaiguan#常设展览"]];

vContent.publicEducationNews = [["公教活动", "马蒂斯与布列松论坛预告", "public_education.html?id=madisiyubuliesong#艺术大讲堂"], ["公教活动", "苏美玉讲座预告", "public_education.html?id=sumeiyujiangzuo#艺术大讲堂"], ["公教活动", "2016首届崔振宽山水画创作研修班汉中采风行", "public_education.html?id=hanzhong#山水高研班"], ["公教活动", "工匠精神——谈国展创作", "public_education.html?id=gongjiangjingshen#艺术大讲堂"]];

vContent.bulletinTabs = [["6月26日（周一）开闭馆时间安排", "因“保持记录-2017西安国际摄影邀请展”观展人数众多，观展需求量大，2017年6月26日（周一），西安崔振宽美术馆、水墨长安艺术博物馆将不闭馆，欢迎各界社会人士前来参观。同时，6月26日19:30时，国际论坛《美术馆、博物馆的策展与管理》也将在崔振宽美术馆学术报告厅举办。", "2017年6月25日", "bulletin20170625"]];
// 轮播
// setInterval(function(){
//     vContent.bulletinIndex = (vContent.bulletinIndex+1) % 3;
// }, 5000);

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

// 1920版块滑动
{
    (function () {
        var oContent = document.querySelector("#content"),
            oBlockWrapper = oContent.querySelector("#blockWrapper"),
            oBlockSelector = oContent.querySelector("#blockSelector"),
            aSelectorList = oBlockSelector.querySelectorAll("li"),
            nBlockNum = aSelectorList.length,
            oLeftArrow = oBlockSelector.querySelector(".left_arrow"),
            oRightArrow = oBlockSelector.querySelector(".right_arrow"),
            aBlockIcon = oBlockSelector.querySelectorAll("i"),
            index = 0;

        aBlockIcon[0].style.backgroundColor = "white";

        var _loop = function (i) {
            aSelectorList[i].addEventListener("click", function () {
                index = i;
                // 413px 是一块的宽度加一个margin
                oBlockWrapper.style.transform = "translate3d(-" + i * 413 + "px, 0, 0)";
                oBlockWrapper.style.webkitTransform = "translate3d(-" + i * 413 + "px, 0, 0)";
                aBlockIcon[0].style.backgroundColor = "#b3b3b3";
                aBlockIcon[1].style.backgroundColor = "#b3b3b3";
                aBlockIcon[2].style.backgroundColor = "#b3b3b3";
                aBlockIcon[3].style.backgroundColor = "#b3b3b3";
                aBlockIcon[i].style.backgroundColor = "white";
            });
        };

        for (var i = 0; i < nBlockNum; i++) {
            _loop(i);
        }
        oRightArrow.addEventListener("click", function () {
            console.log(index);
            if (index !== 3) {
                index++;
                oBlockWrapper.style.transform = "translate3d(-" + index * 413 + "px, 0, 0)";
                oBlockWrapper.style.webkitTransform = "translate3d(-" + index * 413 + "px, 0, 0)";
                aBlockIcon[index - 1].style.backgroundColor = "#b3b3b3";
                aBlockIcon[index].style.backgroundColor = "white";
            }
        });
        oLeftArrow.addEventListener("click", function () {
            console.log(index);
            if (index) {
                index--;
                oBlockWrapper.style.transform = "translate3d(-" + index * 413 + "px, 0, 0)";
                oBlockWrapper.style.webkitTransform = "translate3d(-" + index * 413 + "px, 0, 0)";
                aBlockIcon[index + 1].style.backgroundColor = "#b3b3b3";
                aBlockIcon[index].style.backgroundColor = "white";
            }
        });
    })();
}

window.onload = function () {

    // 预加载轮播图连接的资源
    var cssPreloader = new Image();
    cssPreloader.src = "css/compressed/common_page.css";
};
