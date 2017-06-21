
;"use strict";

vCatalog.title = ["崔振宽艺术", "CUI ZHENKUAN ART"];
vCatalog.catas = [[{ title_c: "崔振宽简介" }, { title_e: "CUI ZHENKUAN" }, { cata_c: [] }, { cata_e: [] }, 0], [{ title_c: "艺术年表" }, { title_e: "ART CHRONOLOGY" }, { cata_c: [] }, { cata_e: [] }, 1], [{ title_c: "作品" }, { title_e: "WORKS" }, { cata_c: [] }, { cata_e: [] }, 2], [{ title_c: "艺术论著" }, { title_e: "TREATISE" }, { cata_c: [] }, { cata_e: [] }, 3, "none"], [{ title_c: "艺术活动" }, { title_e: "ACTIVITY" }, { cata_c: [] }, { cata_e: [] }, 4, "none"], [{ title_c: "艺术影像" }, { title_e: "VIDEO" }, { cata_c: [] }, { cata_e: [] }, 5]];

var vChronology = new Vue({
    el: ".art_chronology",
    components: {
        "chronology-pic": {
            props: ["src"],
            template: "<a :href=\"src\" target=\"_blank\"><img :src=\"src\" alt=\"\u5D14\u632F\u5BBD\u827A\u672F\u5E74\u8868\"/></a>"
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
        nPerPage: 6, // 每页显示10个
        nPageIndex: 0 // 当前页码
    },
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
            template: "\n                <li>\n                    <a :href=\"worksData[1]\" target=\"_blank\"><div class=\"thumbnail\" :style=\"getUrl(worksData[0])\"></div></a>\n                    <div class=\"info\">\n                        <p><span>\u4F5C\u54C1\u540D\u79F0\uFF1A</span>{{worksData[2]}}</p>\n                        <p><span>\u5C3A\u5BF8\uFF1A</span>{{worksData[3]}}</p>\n                        <p><span>\u65F6\u95F4\uFF1A</span>{{worksData[4]}}</p>\n                        <p><span>\u4F5C\u8005\uFF1A</span>{{worksData[5]}}</p>\n                    </div>\n                    <div style=\"clear:both;\"></div>\n                </li>",
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
        },
        "list-pagination": {
            props: ["pageIndex"],
            template: "<li @click=\"clickPagination(pageIndex)\">{{pageIndex+1}}</li>",
            methods: {
                clickPagination: function clickPagination(index) {
                    this.$emit("switchpagination", index);
                    setTimeout(function () {
                        window.scrollTo(0, 0);
                    }, 200);
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
        nPageIndex: 0 // 当前页码
    },
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
            template: "\n                <li>\n                    <div class=\"cover\" :style=\"getUrl(treatiseData[0])\"></div>\n                    <div class=\"info\">\n                        <p><span>\u4F5C\u8005\uFF1A</span>{{treatiseData[1]}}</p>\n                        <p><span>\u65F6\u95F4\uFF1A</span>{{treatiseData[2]}}</p>\n                    </div>\n                    <div style=\"clear:both;\"></div>\n                </li>",
            methods: {
                getUrl: function getUrl(url) {
                    return {
                        backgroundImage: "url(" + url + ")"
                    };
                }
            }
        },
        "list-pagination": {
            props: ["pageIndex"],
            template: "<li @click=\"clickPagination(pageIndex)\">{{pageIndex+1}}</li>",
            methods: {
                clickPagination: function clickPagination(index) {
                    this.$emit("switchpagination", index);
                    setTimeout(function () {
                        window.scrollTo(0, 0);
                    }, 200);
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
            template: "\n                <div>\n                    <video :src=\"src\" width=\"270\" height=\"260\" controls=\"controls\" preload=\"none\" :poster=\"poster\">\n                        \u4F60\u7684\u6D4F\u89C8\u5668\u7248\u672C\u8FC7\u4F4E\n                    </video>\n                    <h3>{{title}}</h3>\n                </div>\n                "
        }
    },
    data: {
        srcs: [],
        titles: [],
        posters: []
    }
});

// lazy loading
window.onload = function () {

    var oContent = document.querySelector(".content");

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
        var _sURL = "ajax.php?item=cuizhenkuan_works",
            _fnSuccessCallback = function _fnSuccessCallback(res) {
            vWorks.lists = JSON.parse(res);
            vWorks.list = vWorks.lists[vWorks.catas[0]];
        },
            _fnFailCallback = function _fnFailCallback(status) {
            console.error("加载作品数据失败");
        };
        AJAX_GET(_sURL, _fnSuccessCallback, _fnFailCallback);
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
        var _sURL2 = "ajax.php?item=cuizhenkuan_video",
            _fnSuccessCallback2 = function _fnSuccessCallback2(res) {
            var oParsed = JSON.parse(res);
            console.log(oParsed);
            vVideo.srcs = oParsed.srcs;
            vVideo.titles = oParsed.titles;
            vVideo.posters = oParsed.posters;
        },
            _fnFailCallback2 = function _fnFailCallback2(status) {
            console.error("加载艺术影像数据失败");
        };
        AJAX_GET(_sURL2, _fnSuccessCallback2, _fnFailCallback2);
    }
};
