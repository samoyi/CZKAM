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
            props: ["tab"],
            template: `
                <div id="bulletin-tab">
                    <h3>{{tab[0]}}</h3>
                    <p class="bulletin_content">
                        {{tab[1]}}
                        <br /><br />
                        <span class="bulletin_date">{{tab[2]}}</span>
                    </p>

                </div>`,
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
});

// 之后将要从后台接收到的数据
vContent.carouselTabs = [
    ["http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/carousel/test.png", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（一）"],
    ["http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/carousel/test.png", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（二）"],
    ["http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/carousel/test.png", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（三）"],
    ["http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/carousel/test.png", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（四）"],
    ["http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/index/carousel/test.png", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（四）"],
];
// 轮播
setInterval(function(){
    vContent.carouselIndex = (vContent.carouselIndex+1) % 3;
}, 1000);

vContent.exhibitionNews = [
    ["预告", "2016中国·西安“崔振宽美术馆”国际", "2016.9.20-10.20", "exhibition.html"],
    ["", "首届陕西省大学生摄影大展开幕啦！", "2016.11.6", "exhibition.html"],
    ["", "墨色无间——汪劲松、王承云实验艺术展开幕", "2016.11.20-12.5", "exhibition.html"]
];


vContent.publicEducationNews = [
    ["公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（一）", "public_education.html"],
    ["公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（二）", "public_education.html"],
    ["公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（三）", "public_education.html"],
    ["公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（四）", "public_education.html"]
];
// 轮播
setInterval(function(){
    vContent.publicEducationIndex = (vContent.publicEducationIndex+1) % 3;
}, 1000);

vContent.bulletinTabs = [
    ["提前闭馆通知1", "1通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容", "2017.5.5"],
    ["提前闭馆通知2", "2通知内容通知内容通知内容通知内容通知内容通内容通知内容通知内容通知内容通知内容通内容通知内容通知内容通知内容通知内容通内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容", "2017.5.5"],
    ["提前闭馆通知3", "3通知内容通知内容通知内容内容通知内容通知内容通知内容通知内容通知内容通知内容通通知内容通知内容通知内容通知内容通知内容通知内容", "2017.5.5"],
    ["提前闭馆通知4", "4通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容通知内容", "2017.5.5"]
];
// 轮播
setInterval(function(){
    vContent.bulletinIndex = (vContent.bulletinIndex+1) % 3;
}, 1000);




var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay : 5000,

    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

  })
