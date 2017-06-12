;"use strict";

// 首页轮播图
let vCarouselTab = new Vue({
    components: {
        "carousel-tab": {
            props: ["tab"],
            template: `
                <div>
                    <h3><span>{{tab[1]}} | </span>{{tab[2]}}</h3>
                    <img :src="tab[0]" :alt="tab[2]" />
                </div>`,
        },
    },
    el: "#carousel-tab",
    data: {
        tabs: [],
        index: 0,
    },
    computed: {
        getTab(){
            if( this.tabs.length ){
                return this.tabs[this.index];
            }
            else{
                return [,,];
            }
        },
    }
});
// 之后将要从后台接收到的数据
vCarouselTab.tabs = [
    ["", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（一）"],
    ["", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（二）"],
    ["", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（三）"],
    ["", "预告", "2016中国西安“崔振宽美术馆”国际雕塑创作营（四）"]
];
// 轮播
setInterval(function(){
    vCarouselTab.index = (vCarouselTab.index+1) % 3;
}, 1000);



// 首页展览版块
let vExhibitionTab = new Vue({
    components: {
        "exhibition-tab": {
            props: ["tab"],
            template: `
                <div>
                    <h3><span>{{tab[1]}} | </span>{{tab[2]}}</h3>
                    <img :src="tab[0]" :alt="tab[2]" />
                    <p>{{tab[3]}}</p>
                </div>`,
        },
    },
    el: "#exhibition-tab",
    data: {
        tabs: [],
        index: 0,
    },
    computed: {
        getTab(){
            if( this.tabs.length ){
                return this.tabs[this.index];
            }
            else{
                return [,,,];
            }
        },
    }
});
// 之后将要从后台接收到的数据
vExhibitionTab.tabs = [
    ["", "预告", "2016中国·西安“崔振宽美术馆”国际", "2016.9.20-10.20"],
    ["", "", "首届陕西省大学生摄影大展开幕啦！", "2016.11.6"],
    ["", "", "墨色无间——汪劲松、王承云实验艺术展开幕", "2016.11.20-12.5"]
];
// 轮播
setInterval(function(){
    vExhibitionTab.index = (vExhibitionTab.index+1) % 3;
}, 1000);



// 首页公教版块
let vPublicEducationTab = new Vue({
    components: {
        "public_education-tab": {
            props: ["tab"],
            template: `
                <div>
                    <h3><span>{{tab[1]}} | </span>{{tab[2]}}</h3>
                    <img :src="tab[0]" :alt="tab[2]" />
                </div>`,
        },
    },
    el: "#public_education-tab",
    data: {
        tabs: [],
        index: 0,
    },
    computed: {
        getTab(){
            if( this.tabs.length ){
                return this.tabs[this.index];
            }
            else{
                return [,,];
            }
        },
    }
});
// 之后将要从后台接收到的数据
vPublicEducationTab.tabs = [
    ["", "公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（一）"],
    ["", "公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（二）"],
    ["", "公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（三）"],
    ["", "公教活动", "2016首届崔振宽山水画创作研修班汉中采风行（四）"]
];
// 轮播
setInterval(function(){
    vPublicEducationTab.index = (vPublicEducationTab.index+1) % 3;
}, 1000);
