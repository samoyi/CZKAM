;"use strict";

vCatalog.title = ["展览", "EXHIBITION"];
vCatalog.catas = [[{ title_c: "常设展览" }, { title_e: "PERMANENT EXHIBTION" },
// {cata_c: ["展览预告", "常设展览", "在线展览"]},
// {cata_e: ["UPCOMING EXHIBTION", "PERMANENT EXHIBTION", "ON-LINE"]},
{ cata_c: [] }, { cata_e: [] }, 0]];

var vPermanentExhibition = exhibitionClass(".permanent_exhibition");
directToDetailArticle(vPermanentExhibition);

// lazy loading
window.onload = function () {

    var oContent = document.querySelector(".content");

    // 展览数据
    {
        var sURL = "ajax.php?item=exhibition_permanent",
            fnSuccessCallback = function fnSuccessCallback(res) {
            var oParsed = JSON.parse(res),
                aAll = [];
            aKey = Object.keys(oParsed);
            aKey.reverse().forEach(function (item) {
                oParsed[item].forEach(function (data) {
                    aAll.push(data);
                });
            });
            oParsed.All = aAll;
            vPermanentExhibition.lists = oParsed;
            // 获得所有年份字符串组成的数组
            vPermanentExhibition.catas = Object.keys(vPermanentExhibition.lists).reverse();
            vPermanentExhibition.list = vPermanentExhibition.lists[vPermanentExhibition.catas[0]];
        },
            fnFailCallback = function fnFailCallback(status) {
            console.error("加载展览数据失败");
        };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
};
