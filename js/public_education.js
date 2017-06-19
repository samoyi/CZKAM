;"use strict";


vCatalog.title = ["公共教育", "PUBLIC EDUCATION"];
vCatalog.catas = [
        [
            {title_c: "公教活动"},
            {title_e: "ACTIVITIES"},
            {cata_c: ["山水高研班", "艺术大讲堂"]},
            {cata_e: ["SHANSHUIGAOYANBAN", "YISHUDAJIANGTANG"]},
            0
        ],
        [
            {title_c: "合作交流"},
            {title_e: "FACILITIES"},
            {cata_c: []},
            {cata_e: []},
            1
        ],
        [
            {title_c: "志愿者服务"},
            {title_e: "VOLUNTEERING"},
            {cata_c: []},
            {cata_e: []},
            2
        ],
    ];


let vSsgyb= exhibitionClass(".ssgyb");
let vYsdjt= exhibitionClass(".ysdjt");
let vExchanges= exhibitionClass(".exchanges");
let vVolunteering = exhibitionClass(".volunteering");

// lazy loading
window.onload = function(){

    let oContent = document.querySelector(".content");

    // 山水高研班数据
    {
        let sURL = "ajax.php?item=public_ssgyb",
            fnSuccessCallback = function(res){
                vSsgyb.lists = JSON.parse(res);
                vSsgyb.catas = Object.keys(vSsgyb.lists).reverse();
                vSsgyb.list = vSsgyb.lists[vSsgyb.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("山水高研班数据加载失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }

    // 艺术大讲堂数据
    {
        let sURL = "ajax.php?item=public_ysdjt",
            fnSuccessCallback = function(res){
                vYsdjt.lists = JSON.parse(res);
                vYsdjt.catas = Object.keys(vYsdjt.lists).reverse();
                vYsdjt.list = vYsdjt.lists[vYsdjt.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("艺术大讲堂数据加载失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }

    // 合作交流数据
    {
        let sURL = "ajax.php?item=public_exchanges",
            fnSuccessCallback = function(res){
                vExchanges.lists = JSON.parse(res);
                vExchanges.catas = Object.keys(vExchanges.lists).reverse();
                vExchanges.list = vExchanges.lists[vExchanges.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("合作交流数据加载失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }


    // 志愿者服务数据
    {
        let sURL = "ajax.php?item=public_volunteering",
            fnSuccessCallback = function(res){
                vVolunteering.lists = JSON.parse(res);
                vVolunteering.catas = Object.keys(vVolunteering.lists).reverse();
                vVolunteering.list = vVolunteering.lists[vVolunteering.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("志愿者服务数据加载失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }


    // 汉中数据
    // {
    //     let sURL = "ajax.php?item=article_hanzhong",
    //         fnSuccessCallback = function(res){
    //             let oParsed = JSON.parse(res);
    //             setTimeout(function(){
    //                 vUploadedArticle.articleHTML = oParsed.hanzhong;
    //             }, 2000);
    //         },
    //         fnFailCallback = function(status){
    //             console.error("加载汉中行数据失败");
    //         };
    //     AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    // }
};
