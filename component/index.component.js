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
            props: ["tab", "curIndex"],
            template: `
                <div id="bulletin-tab">
                    <h3>{{tab[0]}}</h3>
                    <p class="bulletin_content">
                        {{tab[1]}}
                        <br />
                        <span class="bulletin_date">{{tab[2]}}</span>
                    </p>
                    <ul>
                        <li v-if="false" v-bind:class="{active_tab: curIndex===0}"  @click="clickPagination(0)">●</li>
                        <li v-if="false" v-bind:class="{active_tab: curIndex===1}"  @click="clickPagination(1)">●</li>
                        <li v-if="false" v-bind:class="{active_tab: curIndex===2}"  @click="clickPagination(2)">●</li>
                    </ul>
                </div>`,
            methods: {
                clickPagination(clickedIndex){
                    this.$emit("switchpagination", clickedIndex);
                },
            },
        },
        "gallery-base-info": {
            template: `
                <div>
                    <h2>美术馆 ART GALLERY</h2>
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
    methods: {
        switchtab(clickedIndex){
            this.bulletinIndex = clickedIndex;
        },
    },
});


vContent.exhibitionNews = [
    ["", "墨色无间——汪劲松、王承云实验艺术展开幕", "2016.11.20-12.5", "exhibition.html?id=mosewujian#常设展览"],
    ["", "首届陕西省大学生摄影大展开幕啦！", "2016.11.6", "exhibition.html?id=daxueshengsheyingzhan#常设展览"],
    ["", "崔振宽美术馆开馆暨“苍山无言——崔振宽画展”启幕", "2016.9.20-10.20", "exhibition.html?id=kaiguan#常设展览"]
];


vContent.publicEducationNews = [
    ["公教活动", "马蒂斯与布列松论坛预告", "public_education.html?id=madisiyubuliesong#艺术大讲堂"],
    ["公教活动", "苏美玉讲座预告", "public_education.html?id=sumeiyujiangzuo#艺术大讲堂"],
    ["公教活动", "2016首届崔振宽山水画创作研修班汉中采风行", "public_education.html?id=hanzhong#山水高研班"],
    ["公教活动", "工匠精神——谈国展创作", "public_education.html?id=gongjiangjingshen#艺术大讲堂"],
];


vContent.bulletinTabs = [
    ["五一假期开闭馆时间安排", "五一假期，崔振宽美术馆、水墨长安艺术博物馆正常开馆", "2017.4.28"]
];
// 轮播
// setInterval(function(){
//     vContent.bulletinIndex = (vContent.bulletinIndex+1) % 3;
// }, 10000);




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
