;"use strict";


vCatalog.title = ["崔振宽艺术", "CUI ZHENKUAN ART"];
vCatalog.catas = [
        [
            {title_c: "崔振宽简介"},
            {title_e: "CUI ZHENKUAN"},
            {cata_c: []},
            {cata_e: []},
            0
        ],
        [
            {title_c: "艺术年表"},
            {title_e: "ART CHRONOLOGY"},
            {cata_c: []},
            {cata_e: []},
            1
        ],
        [
            {title_c: "作品"},
            {title_e: "WORKS"},
            {cata_c: []},
            {cata_e: []},
            2
        ],
        [
            {title_c: "艺术论著"},
            {title_e: "TREATISE"},
            {cata_c: []},
            {cata_e: []},
            3
        ],
        [
            {title_c: "艺术活动"},
            {title_e: "ACTIVITY"},
            {cata_c: []},
            {cata_e: []},
            4
        ],
        [
            {title_c: "艺术影像"},
            {title_e: "VIDEO"},
            {cata_c: []},
            {cata_e: []},
            5
        ],
    ];

let vChronology = new Vue({
    el: ".art_chronology",
    components: {
        "chronology-pic": {
            props: ["src"],
            template: `<a :href="src" target="_blank"><img :src="src" alt="崔振宽艺术年表"/></a>`,
        },
    },
    data: {
        srcs: [],
    }
});


let vWorks = new Vue({
    el: ".works",
    data: {
        list: [
            ["", "", "", "", ""],
        ],
        lists: {},
        catas: ["jiaomo" , "shuimo", "xiaopin", "xiesheng"],
        catas_c: ["焦墨", "水墨", "小品", "写生"],
        nCataIndex: 0,
        nPerPage: 6, // 每页显示10个
        nPageIndex : 0, // 当前页码
    },
    computed: {
        displayedItem(){
            return this.list.slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage);
        },
        pageNum(){
            return Math.ceil((this.list.length)/this.nPerPage);
        },
        firstWorks(){
            return this.lists.jiao;
        },
    },
    methods: {
        switchpage(index){
            this.nPageIndex = index;
        },
        switchworks(index){
            this.list = this.lists[this.catas[index]];
            // 更新类别编号，将列表名称列表的当前项变成不同颜色
            this.nCataIndex = index;
            // 切换类别后，将页码变成第一个的，否则，例如，如果切换前页码是2，而一个类别只有一页没有第二页，则该类别将不会显示。
            this.nPageIndex = 0;
        },
    },
    components: {
        "works-item": {
            props: ["worksData"],
            template: `
                <li>
                    <a :href="worksData[1]" target="_blank"><div class="thumbnail" :style="getUrl(worksData[0])"></div></a>
                    <div class="info">
                        <p><span>作品名称：</span>{{worksData[2]}}</p>
                        <p><span>尺寸：</span>{{worksData[3]}}</p>
                        <p><span>时间：</span>{{worksData[4]}}</p>
                        <p><span>作者：</span>{{worksData[5]}}</p>
                    </div>
                    <div style="clear:both;"></div>
                </li>`,
            methods: {
                getUrl(url){
                    return {
                        backgroundImage: "url(" + url + ")",
                    };
                },
            },
        },
        "works-cata": {
            props: ["cata_c", "thisIndex", "cataIndex"],
            template: `<li :class="{active_cata: thisIndex===cataIndex}" @click="clickCata(cata_c)">{{cata_c}}</li>`,
            methods: {
                clickCata(cata){
                    this.$emit("switchcata", this.$parent.catas_c.indexOf(cata));
                },
            },
        },
        "list-pagination": {
            props: ["pageIndex"],
            template: `<li @click="clickPagination(pageIndex)">{{pageIndex+1}}</li>`,
            methods: {
                clickPagination(index){
                    this.$emit("switchpagination", index);
                    setTimeout(function(){
                        window.scrollTo( 0, 0 );
                    }, 200);
                },
            },
        },
    },
});



let vTreatise = new Vue({
    el: ".treatise",
    data: {
        list: [
            ["", "", ""]
        ],
        nPerPage: 4, // 每页显示10个
        nPageIndex : 0, // 当前页码
    },
    computed: {
        displayedItem(){
            return this.list.slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage);
        },
        pageNum(){
            return Math.ceil((this.list.length)/this.nPerPage);
        },
    },
    methods: {
        switchpage(index){
            this.nPageIndex = index;
        }
    },
    components: {
        "treatise-item": {
            props: ["treatiseData"],
            template: `
                <li>
                    <div class="cover" :style="getUrl(treatiseData[0])"></div>
                    <div class="info">
                        <p><span>作者：</span>{{treatiseData[1]}}</p>
                        <p><span>时间：</span>{{treatiseData[2]}}</p>
                    </div>
                    <div style="clear:both;"></div>
                </li>`,
            methods: {
                getUrl(url){
                    return {
                        backgroundImage: "url(" + url + ")",
                    };
                },
            },
        },
        "list-pagination": {
            props: ["pageIndex"],
            template: `<li @click="clickPagination(pageIndex)">{{pageIndex+1}}</li>`,
            methods: {
                clickPagination(index){
                    this.$emit("switchpagination", index);
                    setTimeout(function(){
                        window.scrollTo( 0, 0 );
                    }, 200);
                },
            },
        },
    },
});



let vActivity = exhibitionClass(".activity");


let vVideo = new Vue({
    el: ".video",
    components: {
        "video-template": {
            props: ["src", "title", "poster"],
            template: `
                <div>
                    <video :src="src" width="270" height="260" controls="controls" preload="none" :poster="poster">
                        你的浏览器版本过低
                    </video>
                    <h3>{{title}}</h3>
                </div>
                `,
        },
    },
    data: {
        srcs: [],
        titles: [],
        posters: [],
    },
});






// lazy loading
window.onload = function(){

    let oContent = document.querySelector(".content");

    // 艺术年表
    {
        let sURL = "ajax.php?item=cuizhenkuan_chronology",
            fnSuccessCallback = function(res){
                vChronology.srcs = JSON.parse(res);
            },
            fnFailCallback = function(status){
                console.error("加载艺术年表数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }

    // 作品数据
    {
        let sURL = "ajax.php?item=cuizhenkuan_works",
            fnSuccessCallback = function(res){
                vWorks.lists = JSON.parse(res);
                vWorks.list = vWorks.lists[vWorks.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("加载作品数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
    // 论著数据
    {
        let sURL = "ajax.php?item=cuizhenkuan_treatise",
            fnSuccessCallback = function(res){
                vTreatise.list = JSON.parse(res);
            },
            fnFailCallback = function(status){
                console.error("加载论著数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
    // 活动数据
    {
        let sURL = "ajax.php?item=cuizhenkuan_activity",
            fnSuccessCallback = function(res){
                vActivity.lists = JSON.parse(res);
                vActivity.catas = Object.keys(vActivity.lists).reverse();
                vActivity.list = vActivity.lists[vActivity.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("加载活动数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
    // 艺术影像数据
    {
        let sURL = "ajax.php?item=cuizhenkuan_video",
            fnSuccessCallback = function(res){
                let oParsed = JSON.parse(res);
                console.log(oParsed);
                vVideo.srcs = oParsed.srcs;
                vVideo.titles = oParsed.titles;
                vVideo.posters = oParsed.posters;
            },
            fnFailCallback = function(status){
                console.error("加载艺术影像数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
};
