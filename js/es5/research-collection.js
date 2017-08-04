;"use strict";

vCatalog.title = ["学术研究·馆藏", "RESEARCH·COLLECTION"];
vCatalog.catas = [[{ title_c: "学术研究" }, { title_e: "RESEARCH" }, { cata_c: ["学术委员会", "学术活动"] }, { cata_e: ["ACADEMIC COMMITTEE", "ACADEMIC EVENTS"] }, 0], [{ title_c: "馆藏" }, { title_e: "COLLECTION" },
// {cata_c: [ "国画", "历史文物","油画", "版画", "雕塑", "装置", "摄影", "多媒体影像", "其他"]},
// {cata_e: ["CHINESE PAINTING", "RELICS", "OLI PAINTING", "PRINT", "SCULPTURE", "DEVICE", "PHOTOGRAPHY", "MULTIMEDIA", "OTHERS"]},
{ cata_c: ["国画"] }, { cata_e: ["CHINESE PAINTING"] }, 1]];

var vAcademicEvents = exhibitionClass(".academic_events");

// 国画
var vChinesePainting = vCollectionClass(".Chinese_painting", ["cuizhenkuan", "xinshuimo", "changanhuapai"], ["崔振宽作品", "新水墨作品", "长安画派作品"]);

function vCollectionClass(elSelector, catas_e, catas_c) {
    return new Vue({
        el: elSelector,
        data: {
            list: [["", "", "", "", "", ""]],
            lists: {},
            catas: catas_e,
            catas_c: catas_c,
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
                template: "\n                    <li>\n                        <a :href=\"worksData.pic\" target=\"_blank\"><div class=\"thumbnail\" :style=\"getUrl(worksData.pic)\"></div></a>\n                        <div class=\"info\">\n                            <p><span>作品名称：</span>{{worksData.name}}</p>\n                            <p><span>尺寸：</span>{{worksData.size}}</p>\n                            <p><span>时间：</span>{{worksData.time}}</p>\n                            <p><span>作者：</span>{{worksData.author}}</p>\n                            <p v-if=\"worksData.style\"><span>风格：</span>{{worksData.style}}</p>\n                        </div>\n                        <div style=\"clear:both;\"></div>\n                    </li>",
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
}

// get data
{
    var sURL = "ajax/research.php",
        fnSuccessCallback = function fnSuccessCallback(res) {
        var oParsed = JSON.parse(res);

        // 学术研究数据
        {
            // 学术活动数据
            {
                (function () {
                    var oAcademicEvents = oParsed.activity,
                        aAll = [];
                    for (var item in oAcademicEvents) {
                        oAcademicEvents[item].forEach(function (data) {
                            aAll.push(data);
                        });
                    }
                    oAcademicEvents.All = aAll.reverse();
                    vAcademicEvents.lists = oAcademicEvents;
                    vAcademicEvents.catas = Object.keys(vAcademicEvents.lists).reverse();
                    vAcademicEvents.list = vAcademicEvents.lists[vAcademicEvents.catas[0]];
                })();
            }
        }

        // 馆藏数据
        {
            // 国画数据
            vChinesePainting.lists = oParsed.chinese;
            vChinesePainting.list = vChinesePainting.lists[vChinesePainting.catas[0]];
        }

        // preload
        {
            var aPreload = [];
            for (var i = 0, len = vChinesePainting.catas.length; i < len; i++) {
                aPreload[i] = vChinesePainting.lists[vChinesePainting.catas[i]].map(function (item) {
                    return item.pic;
                });
            }
            stepBatchLoadImage(aPreload);
        }
    },
        fnFailCallback = function fnFailCallback(status) {
        console.error("加载国画数据失败");
    };
    AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
}
