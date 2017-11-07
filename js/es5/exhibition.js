"use strict";

"use strict";

vCatalog.title = ["展览", "EXHIBITION"];
vCatalog.catas = [[{ title_c: "常设展览" }, { title_e: "PERMANENT EXHIBTION" }, { cata_c: [] }, { cata_e: [] }, 0], [{ title_c: "在线展览" }, { title_e: "ON-LINE" }, { cata_c: [] }, { cata_e: [] }, 1], [{ title_c: "展览" }, { title_e: "OTHER" }, { cata_c: [] }, { cata_e: [] }, 2], [{ title_c: "展品欣赏（测试）" }, { title_e: "APPRECIATION" }, { cata_c: [] }, { cata_e: [] }, 3]];

var vPermanentExhibition = exhibitionClass(".permanent_exhibition");
directToDetailArticle(vPermanentExhibition);
var vOnlineExhibition = exhibitionClass(".online_exhibition");
directToDetailArticle(vOnlineExhibition);
var vOtherExhibition = exhibitionClass(".other_exhibition");
directToDetailArticle(vOtherExhibition);
// let vAppreciation = exhibitionClass(".appreciation");
// directToDetailArticle(vAppreciation);

var vAppreciation = new Vue({
    el: ".appreciation",
    data: {
        list: [["", "", "", "", ""]],
        lists: {},
        catas: [""], // 就一类，这个没用
        catas_c: [""], // 就一类，这个没用
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
            template: "\n                <li>\n                    <a :href=\"worksData[0]\" target=\"_blank\">\n                        <div class=\"thumbnail\" :style=\"getUrl(worksData[0])\"></div>\n                    </a>\n                    <div class=\"info\">\n                        <p v-if=\"worksData[1]\"><span>作品名称：</span>{{worksData[1]}}</p>\n                        <p v-if=\"worksData[2]\"><span>尺寸：</span>{{worksData[2]}}</p>\n                        <p v-if=\"worksData[3]\"><span>时间：</span>{{worksData[3]}}</p>\n                        <p v-if=\"worksData[4]\"><span>作者：</span>{{worksData[4]}}</p>\n                    </div>\n                    <div style=\"clear:both;\"></div>\n                </li>",
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

// get data
{

    var oContent = document.querySelector(".content");

    // 展览数据
    {
        // let sURL = "ajax.php?item=exhibition_permanent",
        var sURL = "http://www.czkam.com/ajax/show.php",
            fnSuccessCallback = function fnSuccessCallback(res) {
            var oParsed = JSON.parse(res);

            {
                (function () {
                    // 读取常设展览数据
                    var oPermanentExhibitionData = oParsed.always,
                        aAll = [],
                        aKey = Object.keys(oPermanentExhibitionData);

                    aKey.reverse().forEach(function (item) {
                        oPermanentExhibitionData[item].forEach(function (data) {
                            aAll.push(data);
                        });
                    });
                    oPermanentExhibitionData.All = aAll;
                    vPermanentExhibition.lists = oPermanentExhibitionData;
                    // 获得所有年份字符串组成的数组
                    vPermanentExhibition.catas = Object.keys(vPermanentExhibition.lists).reverse();
                    vPermanentExhibition.list = vPermanentExhibition.lists[vPermanentExhibition.catas[0]];
                })();
            }

            {
                (function () {
                    // 读取在线展览数据
                    var oOnlineExhibitionData = oParsed.online,
                        aAll = [],
                        aKey = Object.keys(oOnlineExhibitionData);

                    aKey.reverse().forEach(function (item) {
                        oOnlineExhibitionData[item].forEach(function (data) {
                            aAll.push(data);
                        });
                    });
                    oOnlineExhibitionData.All = aAll;
                    vOnlineExhibition.lists = oOnlineExhibitionData;
                    // 获得所有年份字符串组成的数组
                    vOnlineExhibition.catas = Object.keys(vOnlineExhibition.lists).reverse();
                    vOnlineExhibition.list = vOnlineExhibition.lists[vOnlineExhibition.catas[0]];
                })();
            }

            {
                (function () {
                    // 读取其他展览数据
                    var oOtherExhibitionData = oParsed.other,
                        aAll = [],
                        aKey = Object.keys(oOtherExhibitionData);

                    aKey.reverse().forEach(function (item) {
                        oOtherExhibitionData[item].forEach(function (data) {
                            aAll.push(data);
                        });
                    });
                    oOtherExhibitionData.All = aAll;
                    vOtherExhibition.lists = oOtherExhibitionData;
                    // 获得所有年份字符串组成的数组
                    vOtherExhibition.catas = Object.keys(vOtherExhibition.lists).reverse();
                    vOtherExhibition.list = vOtherExhibition.lists[vOtherExhibition.catas[0]];
                })();
            }

            {
                // 读取展品欣赏数据
                vAppreciation.list = oParsed.appreciation.map(function (value) {
                    return [value.url, value.title, "", "", ""];
                });
                console.log(vAppreciation.list);
            }
        },
            fnFailCallback = function fnFailCallback(status) {
            console.error("加载展览数据失败");
        };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
}
