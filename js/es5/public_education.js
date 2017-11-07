"use strict";

vCatalog.title = ["公共教育", "PUBLIC EDUCATION"];
vCatalog.catas = [[{ title_c: "公教活动" }, { title_e: "ACTIVITIES" }, { cata_c: ["山水高研班", "书法班", "艺术大讲堂"] }, { cata_e: ["ADVANCED SEMINAR", "CALLIGRAPHY SEMINAR", "ART FORUM"] }, 0], [{ title_c: "合作交流" }, { title_e: "EXCHANGES" }, { cata_c: ["教育实践"] }, { cata_e: ["EDUCATIONAL PRACTICE"] }, 1], [{ title_c: "志愿者服务" }, { title_e: "VOLUNTEERING" }, { cata_c: [] }, { cata_e: [] }, 2]];

var vSsgyb = exhibitionClass(".ssgyb");
directToDetailArticle(vSsgyb);
var vSfb = exhibitionClass(".sfb");
directToDetailArticle(vSfb);
var vYsdjt = exhibitionClass(".ysdjt");
directToDetailArticle(vYsdjt);
var vPractice = exhibitionClass(".practice");
directToDetailArticle(vPractice);
var vVolunteering = exhibitionClass(".volunteering");
directToDetailArticle(vVolunteering);

// get data
{

    // 统一请求该页的所有数据
    var sURL = "http://www.czkam.com/ajax/public.php",
        fnSuccessCallback = function fnSuccessCallback(res) {
        var oParsed = JSON.parse(res);

        {
            (function () {
                // 读取山水高研班数据
                var oSsgybData = oParsed.adv,
                    aAll = [];

                for (var item in oSsgybData) {
                    oSsgybData[item].forEach(function (data) {
                        aAll.push(data);
                    });
                }
                oSsgybData.All = aAll.reverse();
                vSsgyb.lists = oSsgybData;
                vSsgyb.catas = Object.keys(vSsgyb.lists).reverse();
                vSsgyb.list = vSsgyb.lists[vSsgyb.catas[0]];
            })();
        }

        {
            (function () {
                // 读取书法班数据
                var oSfbData = oParsed.cal,
                    aAll = [];
                for (var item in oSfbData) {
                    oSfbData[item].forEach(function (data) {
                        aAll.push(data);
                    });
                }
                oSfbData.All = aAll.reverse();
                vSfb.lists = oSfbData;
                vSfb.catas = Object.keys(vSfb.lists).reverse();
                vSfb.list = vSfb.lists[vSsgyb.catas[0]];
            })();
        }

        {
            (function () {
                // 读取艺术大讲堂数据
                var oYsdjtData = oParsed.art,
                    aAll = [];
                for (var item in oYsdjtData) {
                    oYsdjtData[item].forEach(function (data) {
                        aAll.push(data);
                    });
                }
                oYsdjtData.All = aAll;
                vYsdjt.lists = oYsdjtData;
                vYsdjt.catas = Object.keys(vYsdjt.lists).reverse();
                vYsdjt.list = vYsdjt.lists[vYsdjt.catas[0]];
            })();
        }

        {
            (function () {
                // 读取教育实践数据
                var oPracticeData = oParsed.edu,
                    aAll = [];
                for (var item in oPracticeData) {
                    oPracticeData[item].forEach(function (data) {
                        aAll.push(data);
                    });
                }
                oPracticeData.All = aAll;
                vPractice.lists = oPracticeData;
                vPractice.catas = Object.keys(vPractice.lists).reverse();
                vPractice.list = vPractice.lists[vPractice.catas[0]];
            })();
        }

        {
            (function () {
                // 读取志愿者服务数据
                var oVolunteeringData = oParsed.vol,
                    aAll = [];
                for (var item in oVolunteeringData) {
                    oVolunteeringData[item].forEach(function (data) {
                        aAll.push(data);
                    });
                }
                oVolunteeringData.All = aAll.reverse();
                vVolunteering.lists = oVolunteeringData;
                vVolunteering.catas = Object.keys(vVolunteering.lists).reverse();
                vVolunteering.list = vVolunteering.lists[vVolunteering.catas[0]];
            })();
        }
    },
        fnFailCallback = function fnFailCallback(status) {
        console.error("公共教育数据加载失败");
    };
    AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
}
