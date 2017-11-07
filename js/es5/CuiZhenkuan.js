"use strict";

vCatalog.title = ["崔振宽艺术", "CUI ZHENKUAN ART"];
vCatalog.catas = [[{ title_c: "崔振宽简介" }, { title_e: "CUI ZHENKUAN" }, { cata_c: [] }, { cata_e: [] }, 0], [{ title_c: "艺术年表" }, { title_e: "ART CHRONOLOGY" }, { cata_c: [] }, { cata_e: [] }, 1], [{ title_c: "作品" }, { title_e: "WORKS" }, { cata_c: [] }, { cata_e: [] }, 2], [{ title_c: "艺术论著" }, { title_e: "TREATISE" }, { cata_c: [] }, { cata_e: [] }, 3, "none"], [{ title_c: "艺术活动" }, { title_e: "ACTIVITY" }, { cata_c: [] }, { cata_e: [] }, 4, "none"], [{ title_c: "艺术影像" }, { title_e: "VIDEO" }, { cata_c: [] }, { cata_e: [] }, 5]];

var vChronology = new Vue({
    el: ".art_chronology",
    components: {
        "chronology-pic": {
            props: ["src"],
            template: "<a :href=\"src\" target=\"_blank\"><img :src=\"src\" alt=\"崔振宽艺术年表\"/></a>"
        }
    },
    data: {
        srcs: []
    }
});

var vWorks = new Vue({
    el: ".works",
    data: {
        list: [["", "", "", "", ""]],
        lists: {},
        catas: ["jiaomo", "shuimo", "xiaopin", "xiesheng"],
        catas_c: ["焦墨", "水墨", "小品", "写生"],
        nCataIndex: 0,
        nPerPage: 6, // 每页显示6个
        nPageIndex: 0 },
    // 当前页码
    computed: {
        displayedItem: function displayedItem() {
            return this.list.slice(this.nPageIndex * this.nPerPage, (this.nPageIndex + 1) * this.nPerPage);
        },
        pageNum: function pageNum() {
            return Math.ceil(this.list.length / this.nPerPage);
        },
        firstWorks: function firstWorks() {
            return this.lists.jiao;
        }
    },
    methods: {
        switchpage: function switchpage(index) {
            this.nPageIndex = index;
        },
        switchworks: function switchworks(index) {
            this.list = this.lists[this.catas[index]];
            // 更新类别编号，将列表名称列表的当前项变成不同颜色
            this.nCataIndex = index;
            // 切换类别后，将页码变成第一个的，否则，例如，如果切换前页码是2，而一个类别只有一页没有第二页，则该类别将不会显示。
            this.nPageIndex = 0;
        }
    },
    components: {
        "works-item": {
            props: ["worksData"],
            template: "\n                <li>\n                    <a :href=\"worksData[1]\" target=\"_blank\">\n                        <div class=\"thumbnail\" :style=\"getUrl(worksData[0])\"></div>\n                    </a>\n                    <div class=\"info\">\n                        <p><span>作品名称：</span>{{worksData[2]}}</p>\n                        <p><span>尺寸：</span>{{worksData[3]}}</p>\n                        <p><span>时间：</span>{{worksData[4]}}</p>\n                        <p><span>作者：</span>{{worksData[5]}}</p>\n                    </div>\n                    <div style=\"clear:both;\"></div>\n                </li>",
            methods: {
                getUrl: function getUrl(url) {
                    return {
                        backgroundImage: "url(" + url + ")"
                    };
                }
            }
        },
        "works-cata": {
            props: ["cata_c", "thisIndex", "cataIndex"],
            template: "<li :class=\"{active_cata: thisIndex===cataIndex}\" @click=\"clickCata(cata_c)\">{{cata_c}}</li>",
            methods: {
                clickCata: function clickCata(cata) {
                    this.$emit("switchcata", this.$parent.catas_c.indexOf(cata));
                }
            }
        }
    }
});

var vTreatise = new Vue({
    el: ".treatise",
    data: {
        list: [["", "", ""]],
        nPerPage: 4, // 每页显示10个
        nPageIndex: 0 },
    // 当前页码
    computed: {
        displayedItem: function displayedItem() {
            return this.list.slice(this.nPageIndex * this.nPerPage, (this.nPageIndex + 1) * this.nPerPage);
        },
        pageNum: function pageNum() {
            return Math.ceil(this.list.length / this.nPerPage);
        }
    },
    methods: {
        switchpage: function switchpage(index) {
            this.nPageIndex = index;
        }
    },
    components: {
        "treatise-item": {
            props: ["treatiseData"],
            template: "\n                <li>\n                    <div class=\"cover\" :style=\"getUrl(treatiseData[0])\"></div>\n                    <div class=\"info\">\n                        <p><span>作者：</span>{{treatiseData[1]}}</p>\n                        <p><span>时间：</span>{{treatiseData[2]}}</p>\n                    </div>\n                    <div style=\"clear:both;\"></div>\n                </li>",
            methods: {
                getUrl: function getUrl(url) {
                    return {
                        backgroundImage: "url(" + url + ")"
                    };
                }
            }
        }
    }
});

var vActivity = exhibitionClass(".activity");

var vVideo = new Vue({
    el: ".video",
    components: {
        "video-template": {
            props: ["src", "title", "poster"],
            template: "\n                <div>\n                    <video :src=\"src\" width=\"270\" height=\"260\" controls=\"controls\" preload=\"none\" :poster=\"poster\">\n                        你的浏览器版本过低\n                    </video>\n                    <h3>{{title}}</h3>\n                </div>\n                "
        }
    },
    data: {
        srcs: [],
        titles: [],
        posters: []
    }
});

// get data
{
    // 艺术年表
    {
        var sURL = "ajax.php?item=cuizhenkuan_chronology",
            fnSuccessCallback = function fnSuccessCallback(res) {
            vChronology.srcs = JSON.parse(res);
        },
            fnFailCallback = function fnFailCallback(status) {
            console.error("加载艺术年表数据失败");
        };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }

    // 作品数据
    {
        var sURL = "ajax/art.php",

        // let sURL = "ajax.php?item=cuizhenkuan_works",
        fnSuccessCallback = function fnSuccessCallback(res) {
            vWorks.lists = JSON.parse(res);

            // 数据格式转换;
            for (var list in vWorks.lists) {
                vWorks.lists[list] = vWorks.lists[list].map(function (value) {
                    return [value.pic, value.pic, value.name, value.size, value.date, value.author];
                });
            }

            vWorks.list = vWorks.lists[vWorks.catas[0]];

            var aPreload = [];
            for (var i = 0, len = vWorks.catas.length; i < len; i++) {
                aPreload[i] = vWorks.lists[vWorks.catas[i]].map(function (item) {
                    return item[1];
                });
            }
            stepBatchLoadImage(aPreload);
        },
            fnFailCallback = function fnFailCallback(status) {
            console.error("加载作品数据失败");
        };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
    // 论著数据
    // {
    //     let sURL = "ajax.php?item=cuizhenkuan_treatise",
    //         fnSuccessCallback = function(res){
    //             vTreatise.list = JSON.parse(res);
    //         },
    //         fnFailCallback = function(status){
    //             console.error("加载论著数据失败");
    //         };
    //     AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    // }
    // 活动数据
    // {
    //     let sURL = "ajax.php?item=cuizhenkuan_activity",
    //         fnSuccessCallback = function(res){
    //             vActivity.lists = JSON.parse(res);
    //             vActivity.catas = Object.keys(vActivity.lists).reverse();
    //             vActivity.list = vActivity.lists[vActivity.catas[0]];
    //         },
    //         fnFailCallback = function(status){
    //             console.error("加载活动数据失败");
    //         };
    //     AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    // }
    // 艺术影像数据
    {
        var sURL = "ajax.php?item=cuizhenkuan_video",
            fnSuccessCallback = function fnSuccessCallback(res) {
            var oParsed = JSON.parse(res);
            vVideo.srcs = oParsed.srcs;
            vVideo.titles = oParsed.titles;
            vVideo.posters = oParsed.posters;
        },
            fnFailCallback = function fnFailCallback(status) {
            console.error("加载艺术影像数据失败");
        };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
}
