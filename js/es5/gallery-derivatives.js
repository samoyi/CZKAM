;"use strict";

vCatalog.title = ["画廊·衍生品", "GALLERY·DERIVATIVES"];
vCatalog.catas = [[{ title_c: "画廊" }, { title_e: "GALLERY" }, { cata_c: [] }, { cata_e: [] }, 0], [{ title_c: "衍生品" }, { title_e: "DERIVATIVES" }, { cata_c: [] }, { cata_e: [] }, 1]];

var vWorks = new Vue({
    el: ".gallery",
    data: {
        list: [["", "", "", "", ""]],
        lists: {},
        catas: [""],
        catas_c: [""],
        nCataIndex: 0,
        nPerPage: 6, // 每页显示10个
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
            template: "\n                <li>\n                    <div class=\"thumbnail\" :style=\"getUrl(worksData[0])\"></div>\n                    <div class=\"info\">\n                        <p v-if=\"worksData[1]\"><span>作品名称：</span>{{worksData[1]}}</p>\n                        <p v-if=\"worksData[2]\"><span>尺寸：</span>{{worksData[2]}}</p>\n                        <p v-if=\"worksData[3]\"><span>时间：</span>{{worksData[3]}}</p>\n                        <p v-if=\"worksData[4]\"><span>作者：</span>{{worksData[4]}}</p>\n                    </div>\n                    <div style=\"clear:both;\"></div>\n                </li>",
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

var vDerivatives = new Vue({
    el: ".derivatives",
    data: {
        list: [["", "", "", "", ""]],
        lists: {},
        catas: [""],
        catas_c: [""],
        nCataIndex: 0,
        nPerPage: 6, // 每页显示10个
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
            template: "\n                <li>\n                    <div class=\"thumbnail\" :style=\"getUrl(worksData[0])\"></div>\n                    <div class=\"info\">\n                        <p v-if=\"worksData[1]\"><span>作品名称：</span>{{worksData[1]}}</p>\n                        <p v-if=\"worksData[2]\"><span>尺寸：</span>{{worksData[2]}}</p>\n                        <p v-if=\"worksData[3]\"><span>时间：</span>{{worksData[3]}}</p>\n                        <p v-if=\"worksData[4]\"><span>作者：</span>{{worksData[4]}}</p>\n                    </div>\n                    <div style=\"clear:both;\"></div>\n                </li>",
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

// lazy loading
window.onload = function () {

    var oContent = document.querySelector(".content");

    // 作品数据
    {
        var sURL = "ajax.php?item=gallery_works",
            fnSuccessCallback = function fnSuccessCallback(res) {
            vWorks.lists = JSON.parse(res);
            vWorks.list = vWorks.lists[vWorks.catas[0]];
        },
            fnFailCallback = function fnFailCallback(status) {
            console.error("加载作品数据失败");
        };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }

    // 衍生品数据
    {
        var sURL = "ajax.php?item=gallery_derivatives",
            fnSuccessCallback = function fnSuccessCallback(res) {
            vDerivatives.lists = JSON.parse(res);
            vDerivatives.list = vDerivatives.lists[vDerivatives.catas[0]];
        },
            fnFailCallback = function fnFailCallback(status) {
            console.error("加载衍生品数据失败");
        };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
};
