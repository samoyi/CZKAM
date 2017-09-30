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
        "carousel-box": {
            props: ["carouselData"],
            template: "\n                <div id=\"carousel\" class=\"swiper-container\">\n                    <div class=\"swiper-wrapper\">\n                        <div class=\"swiper-slide\" v-for=\"tab in carouselData\" :key=\"tab.title\">\n                            <a :href=\"tab.link\" target=\"_blank\"><img width=\"815\" height=\"455\" :src=\"tab.img\" /></a>\n                            <a :href=\"tab.link\" target=\"_blank\"><h3><span v-if=\"tab.tag\">{{tab.tag}} | </span>{{tab.title}}</h3></a>\n                        </div>\n                    </div>\n                    <div class=\"swiper-pagination\"></div>\n                    <div class=\"swiper-button-prev\"></div>\n                    <div class=\"swiper-button-next\"></div>\n                </div>\n                "
        },
        "exhibition-news": {
            props: ["news"],
            template: "\n                <div>\n                    <h3><span>{{news[0]}}</span><span v-if=\"news[0]\"> | </span><a :href=\"news[3]\" target=\"_blank\">{{news[1]}}</a></h3>\n                    <p>{{news[2]}}</p>\n                </div>"
        },
        "public_education-news": {
            props: ["news"],
            template: "\n                <div>\n                    <h3><span>{{news[0]}} {{news[1]}} | </span><a :href=\"news[3]\" target=\"_blank\">{{news[2]}}</a></h3>\n                </div>"
        },
        "bulletin-tab": {
            props: ["tab", "tabs", "curIndex"],
            template: "\n                <div id=\"bulletin-tab\" v-if=\"tabs.length>0\">\n                    <h3>{{tabs[curIndex][0]}}</h3>\n                    <p class=\"bulletin_content\">\n                        {{tabs[curIndex][1]}}\n                        <br />\n                        <span class=\"bulletin_date\">{{tabs[curIndex][2]}}</span>\n                    </p>\n                    <ul v-if=\"tabs.length>1\">\n                        <li v-for=\"(tab,index) in tabs\" v-bind:class=\"{active_tab: curIndex===index}\"  @click=\"clickPagination(index)\">●</li>\n                    </ul>\n                </div>",
            methods: {
                clickPagination: function clickPagination(clickedIndex) {
                    this.$parent.bulletinIndex = clickedIndex;
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
        carouselData: [],
        exhibitionNews: [[,,]],
        publicEducationNews: [[,]],
        bulletinTabs: [],
        bulletinIndex: 0
    }
});

function AJAX_GET(sURL, fnSuccessCallback, fnFailCallback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                // 必要的时候，使用 getResponseHeader() 检查首部信息
                fnSuccessCallback && fnSuccessCallback(xhr.responseText);
            } else {
                fnFailCallback && fnFailCallback(xhr.status);
            }
        }
    }, false);
    xhr.open("get", sURL, true);
    xhr.send(null);
}

// 首页数据
{
    (function () {

        // 删除字符串中的HTML标签

        var stripHTMLTag = function stripHTMLTag(str) {
            var tmpDiv = document.createElement("DIV");
            tmpDiv.innerHTML = str;
            return tmpDiv.innerText;
        };

        var sURL = "http://www.czkam.com/ajax/index.php",
            fnSuccessCallback = function fnSuccessCallback(res) {
            var oParsed = JSON.parse(res);
            // 轮播图数据
            vContent.carouselData = oParsed.carousel;
            // init swiper
            setTimeout(function () {
                var mySwiper = new Swiper('.swiper-container', {
                    direction: 'horizontal',
                    loop: true,
                    autoplay: 5000,
                    autoplayDisableOnInteraction: false,

                    // 如果需要分页器
                    pagination: '.swiper-pagination',

                    // 如果需要前进后退按钮
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev'

                });
            });

            // 展览新闻数据
            vContent.exhibitionNews = oParsed.show.map(function (item) {
                return [item.tag, item.name, item.fdate, "exhibition.html#" + item.type + "_" + item.id];
            });
            // 公共教育新闻数据
            vContent.publicEducationNews = oParsed["public"].map(function (item) {
                return [item.tag, item.type, item.name, "public_education.html#" + item.type + "_" + item.id];
            });
            // 公告新闻数据
            vContent.bulletinTabs = oParsed.notice.map(function (item) {
                return [item.title, stripHTMLTag(item.detail), item.time];
            });
            sessionStorage.setItem("bulletin", JSON.stringify(vContent.bulletinTabs));
            // 公告新闻轮播
            var nLen = vContent.bulletinTabs.length;
            if (nLen > 1) {
                setInterval(function () {
                    vContent.bulletinIndex = (vContent.bulletinIndex + 1) % nLen;
                    console.log(vContent.bulletinIndex);
                }, 5000);
            }
        },
            fnFailCallback = function fnFailCallback(status) {
            console.error("加载首页数据失败");
        };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    })();
}

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
    cssPreloader.src = "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/css/common_page20170808.css";
};
