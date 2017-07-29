;"use strict";

let vHeader = new Vue({
    components: {
        "header-template": {
            template: `
                <div>
                    <div id="top_logo"></div>
                    <ul class="menu">
                        <li><a href="about_us.html">关于我们<p>ABOUT US</p></a></li>
                        <li><a href="CuiZhenkuan.html">崔振宽艺术<p>CUIZHENKUAN ART</p></a></li>
                        <li><a href="exhibition.html">展览<p>EXHIBITION</p></a></li>
                        <li><a href="public_education.html">公共教育<p>PUBLIC EDUCATION</p></a></li>
                        <li><a href="research-collection.html">学术研究·馆藏<p>RESEARCH·COLLECTION</p></a></li>
                        <li><a href="gallery-derivatives.html">画廊·衍生品<p>GALLERY·DERIVATIVES</p></a></li>
                        <li><a href="service_center.html">服务中心<p>SERVICE CENTER5</p></a></li>
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
                <div class="swiper-slide">
                    <h3><span>{{tab[1]}} | </span>{{tab[2]}}</h3>
                </div>
                `,
        },
        "exhibition-news": {
            props: ["news"],
            template: `
                <div>
                    <h3><span>{{news[0]}}</span><span v-if="news[0]"> | </span><a :href="news[3]" target="_blank">{{news[1]}}</a></h3>
                    <p>{{news[2]}}</p>
                </div>`,
        },
        "public_education-news": {
            props: ["news"],
            template: `
                <div>
                    <h3><span>{{news[0]}} | </span><a :href="news[2]" target="_blank">{{news[1]}}</a></h3>
                </div>`,
        },
        "bulletin-tab": {
            props: ["tab", "tabs", "curIndex"],
            template: `
                <div id="bulletin-tab" v-if="tabs.length>0">
                    <h3>{{tabs[curIndex][0]}}</h3>
                    <p class="bulletin_content">
                        {{tabs[curIndex][1]}}
                        <br />
                        <span class="bulletin_date">{{tabs[curIndex][2]}}</span>
                    </p>
                    <ul v-if="tabs.length>1">
                        <li v-for="(tab,index) in tabs" v-bind:class="{active_tab: curIndex===index}"  @click="clickPagination(index)">●</li>
                    </ul>
                </div>`,
            methods: {
                clickPagination(clickedIndex){
                    this.$parent.bulletinIndex = clickedIndex;
                },
            },
        },
        "gallery-base-info": {
            template: `
                <div>
                    <h2>美术馆 ART MUSEUM</h2>
                    <div class="time"><h3>开放时间：</h3>周二至周日 9:30--17:00（16:30停止入馆）<br />周一闭馆（节假日除外，特殊情况将在本网站通知）</div>
                    <div class="add"><h3>地址：</h3>西安市灞桥区灞桥生态湿地公园柳雪路996号</div>
                    <div class="tel"><h3>电话：</h3>029-83626699</div>
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
});


// 加载首页公告数据
{
    let sURL = "ajax.php?item=service_bulletin",
        fnSuccessCallback = function(res){
            vContent.bulletinTabs = JSON.parse(res);
            let nLen = vContent.bulletinTabs.length;
            if(nLen>1){
                // 轮播
                setInterval(function(){
                    vContent.bulletinIndex = (vContent.bulletinIndex+1) % nLen;
                }, 5000);
            }
        },
        fnFailCallback = function(status){
            console.error("加载公告数据失败");
        };
    AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
}

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



vContent.exhibitionNews = [
    ["", "丰碑大碣——历代金石拓本全国巡回展", "2017.8.26-9.24", "exhibition.html?id=fengbeidajie#常设展览"],
    ["", "《保持记录-2017西安国际摄影邀请展》隆重开幕！", "2017.6.24-7.23", "exhibition.html?id=baochijilu1#常设展览"],
    ["", "《保持记录-2017西安国际摄影邀请展》论坛、讲座回播", "2017.6.24", "exhibition.html?id=baochijiluReplay#常设展览"]
];


vContent.publicEducationNews = [
    ["公教活动", "马蒂斯与布列松论坛预告", "public_education.html?id=madisiyubuliesong#艺术大讲堂"],
    ["公教活动", "苏美玉讲座预告", "public_education.html?id=sumeiyujiangzuo#艺术大讲堂"],
    ["公教活动", "2016首届崔振宽山水画创作研修班汉中采风行", "public_education.html?id=hanzhong#山水高研班"],
    ["公教活动", "工匠精神——谈国展创作", "public_education.html?id=gongjiangjingshen#艺术大讲堂"],
];







var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay : 5000,

    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

});


// 1920版块滑动
{
    let oContent = document.querySelector("#content"),
        oBlockWrapper = oContent.querySelector("#blockWrapper"),
        oBlockSelector = oContent.querySelector("#blockSelector"),
        aSelectorList = oBlockSelector.querySelectorAll("li"),
        nBlockNum = aSelectorList.length,
        oLeftArrow = oBlockSelector.querySelector(".left_arrow"),
        oRightArrow = oBlockSelector.querySelector(".right_arrow"),
        aBlockIcon = oBlockSelector.querySelectorAll("i"),
        index = 0;

    aBlockIcon[0].style.backgroundColor = "white";

    for(let i=0; i<nBlockNum; i++){
        aSelectorList[i].addEventListener("click", function(){
            index = i;
            // 413px 是一块的宽度加一个margin
            oBlockWrapper.style.transform = "translate3d(-" + i*413 + "px, 0, 0)";
            oBlockWrapper.style.webkitTransform = "translate3d(-" + i*413 + "px, 0, 0)";
            aBlockIcon[0].style.backgroundColor = "#b3b3b3";
            aBlockIcon[1].style.backgroundColor = "#b3b3b3";
            aBlockIcon[2].style.backgroundColor = "#b3b3b3";
            aBlockIcon[3].style.backgroundColor = "#b3b3b3";
            aBlockIcon[i].style.backgroundColor = "white";
        });
    }
    oRightArrow.addEventListener("click", function(){
        console.log(index);
        if( index !== 3 ){
            index++;
            oBlockWrapper.style.transform = "translate3d(-" + index*413 + "px, 0, 0)";
            oBlockWrapper.style.webkitTransform = "translate3d(-" + index*413 + "px, 0, 0)";
            aBlockIcon[index-1].style.backgroundColor = "#b3b3b3";
            aBlockIcon[index].style.backgroundColor = "white";
        }
    });
    oLeftArrow.addEventListener("click", function(){
        console.log(index);
        if( index ){
            index--;
            oBlockWrapper.style.transform = "translate3d(-" + index*413 + "px, 0, 0)";
            oBlockWrapper.style.webkitTransform = "translate3d(-" + index*413 + "px, 0, 0)";
            aBlockIcon[index+1].style.backgroundColor = "#b3b3b3";
            aBlockIcon[index].style.backgroundColor = "white";
        }
    });
}


  window.onload = function(){

      // 预加载轮播图连接的资源
      let cssPreloader = new Image();
      cssPreloader.src = "css/compressed/common_page.css";
  };
