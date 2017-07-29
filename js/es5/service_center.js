;"use strict";

vCatalog.title = ["服务中心", "SERVICE CENTER"];
vCatalog.catas = [[{ title_c: "公告" }, { title_e: "BULLETIN" }, { cata_c: [] }, { cata_e: [] }, 0], [{ title_c: "会员" }, { title_e: "MEMBER SHIP" }, { cata_c: [] }, { cata_e: [] }, 1], [{ title_c: "下载专区" }, { title_e: "DOWNLOAD" }, { cata_c: [] }, { cata_e: [] }, 2], [{ title_c: "参观导览" }, { title_e: "GUIDE" }, { cata_c: [] }, { cata_e: [] }, 3, "none"], // 不渲染
[{ title_c: "意见留言" }, { title_e: "COMMENTS" }, { cata_c: [] }, { cata_e: [] }, 4, "none"]];

var vBulletin = new Vue({
    el: ".bulletin",
    data: {
        list: [],
        nPerPage: 8, // 每页显示10个
        nPageIndex: 0, // 当前页码

        detailArticleHTML: "",
        bDisplayDetailArticle: false
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
        "bulletin-item": {
            props: ["liData"],
            template: "<li>\n                <h3 @click=\"displayDetailArticle(liData[3])\" slot=\"title\">{{liData[0]}}</h3>\n                <p slot=\"summary\">{{liData[1]}}</p>\n                <span slot=\"remark\">{{liData[2]}}</span>\n            </li>",
            methods: {
                // 显示详情文章页面
                displayDetailArticle: function displayDetailArticle(articleID) {
                    var _this = this;

                    if (articleID) {
                        (function () {
                            // 列表项图片绑定了详情文章ID才显示文章
                            var parent = _this.$parent;
                            parent.bDisplayDetailArticle = true;
                            var detailArticleHTML = parent.detailArticleHTML;
                            if (!detailArticleHTML) {
                                // 如果没有文章数据数据。一般都是没有的，因为不会预加载，且上一篇详情隐藏后也会清除数据
                                parent.detailArticleHTML = "<p>正在加载……</p>";
                                var sURL = "ajax.php?item=article_" + articleID,
                                    fnSuccessCallback = function fnSuccessCallback(res) {
                                    parent.detailArticleHTML = JSON.parse(res);
                                },
                                    fnFailCallback = function fnFailCallback(status) {
                                    console.error("加载详情页数据失败");
                                };
                                AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
                            }
                        })();
                    }
                }
            }
        },
        "uploaded-article": {
            props: ["contentHtml"],
            template: "<article>\n                        <div v-html=\"contentHtml\"></div>\n                        <i class=\"close_article\" @click=\"closeDetailArticle\">关闭文章</i>\n                    </article>",
            methods: {
                closeDetailArticle: function closeDetailArticle() {
                    this.$parent.detailArticleHTML = "";
                    this.$parent.bDisplayDetailArticle = false;
                }
            }
        }
    },
    created: function created() {
        var _this2 = this;

        // 接收侧目录组件发送的点击通知，关闭详情文章
        Bus.$on('clickCataToCloseDetailArticle', function (indexes) {
            _this2.detailArticleHTML = "";
            _this2.bDisplayDetailArticle = false;
        });
    }
});

var vDownload = new Vue({
    el: ".download",
    data: {
        list: [],
        nPerPage: 8, // 每页显示10个
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
        "bulletin-item": {
            props: ["liData"],
            template: "<li>\n                        <span class=\"title\" slot=\"title\">{{liData[0]}}</span>\n                        <span class=\"time\" slot=\"remark\">{{liData[1]}}</span>\n                        <a class=\"dl_icon\" :href=\"liData[3]\" target=\"_self\">{{liData[2]}}<i></i></a>\n                    </li>"
        }
    }
});

// lazy loading
window.onload = function () {

    var oContent = document.querySelector(".content");

    // 公告数据
    {
        var sURL = "ajax.php?item=service_bulletin",
            fnSuccessCallback = function fnSuccessCallback(res) {
            vBulletin.list = JSON.parse(res);
        },
            fnFailCallback = function fnFailCallback(status) {
            console.error("加载公告数据失败");
        };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }

    // 下载数据
    {
        var sURL = "ajax.php?item=service_download",
            fnSuccessCallback = function fnSuccessCallback(res) {
            vDownload.list = JSON.parse(res);
        },
            fnFailCallback = function fnFailCallback(status) {
            console.error("加载下载数据失败");
        };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
};
