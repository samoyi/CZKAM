;"use strict";


let vCommonHeight = new Vue({
    components: {
        "common-header": {
            props: ["title"],
            template: "<li>{{title[0]}}<br />{{title[1]}}</li>",
        },
    },
    el: "#common-header",
    data: {
        list: [],
    },
});
// 之后将要从后台接收到的数据
vCommonHeight.list =  [
    ["关于我们", "ABOUT US"],
    ["崔振宽艺术", "CUIZHENKUAN ART"],
    ["展览", "EXHIBITION"],
    ["公共教育", "PUBLIC EDUCATION"],
    ["学术研究·馆藏", "RESERCH·COLLECTION"],
    ["画廊·衍生品", "GALLERY·DERIVATIVES"],
    ["服务中心", "SERVICE CENTER5"]
];



let vNoticeTab = new Vue({
    components: {
        "footer-tab": {
            props: ["tab"],
            template: "<div><h3>{{tab[0]}}</h3><p>{{tab[1]}}</p><p>{{tab[2]}}</p></div>",
        },
    },
    el: "#footer-tab",
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
                /*
                 * FIXME1
                 * 这里计算的时候，tabs还是是空的，所以只能通过判断然后先返回一个
                 * 空的三项数组，否则模板里取数组项的时候就会出错。有没有更好的办法？
                 */
            }
        },
    }
});
// 之后将要从后台接收到的数据
vNoticeTab.tabs = [
    ["公告标题1", "公告内容1", "2015"],
    ["公告标题2", "公告内容2", "2016"],
    ["公告标题3", "公告内容3", "2017"]
];
// 轮播
setInterval(function(){
    vNoticeTab.index = (vNoticeTab.index+1) % 3;
}, 1000);
