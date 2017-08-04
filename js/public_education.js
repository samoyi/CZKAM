;"use strict";


vCatalog.title = ["公共教育", "PUBLIC EDUCATION"];
vCatalog.catas = [
        [
            {title_c: "公教活动"},
            {title_e: "ACTIVITIES"},
            {cata_c: ["山水高研班", "书法班", "艺术大讲堂"]},
            {cata_e: ["ADVANCED SEMINAR", "CALLIGRAPHY SEMINAR", "ART FORUM"]},
            0
        ],
        [
            {title_c: "合作交流"},
            {title_e: "EXCHANGES"},
            {cata_c: ["教育实践"]},
            {cata_e: ["EDUCATIONAL PRACTICE"]},
            1,
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
directToDetailArticle(vSsgyb);
let vSfb= exhibitionClass(".sfb");
directToDetailArticle(vSfb);
let vYsdjt= exhibitionClass(".ysdjt");
directToDetailArticle(vYsdjt);
let vPractice= exhibitionClass(".practice");
directToDetailArticle(vPractice);
let vVolunteering = exhibitionClass(".volunteering");
directToDetailArticle(vVolunteering);


// get data
{

    // 统一请求该页的所有数据
    let sURL = "http://www.czkam.com/ajax/public.php",
        fnSuccessCallback = function(res){
            let oParsed = JSON.parse(res);

            {
                // 读取山水高研班数据
                let oSsgybData = oParsed.adv,
                    aAll = [];

                for(let item in oSsgybData){
                    oSsgybData[item].forEach(function(data){
                        aAll.push(data);
                    })
                }
                oSsgybData.All = aAll.reverse();
                vSsgyb.lists = oSsgybData;
                vSsgyb.catas = Object.keys(vSsgyb.lists).reverse();
                vSsgyb.list = vSsgyb.lists[vSsgyb.catas[0]];
            }

            {
                // 读取书法班数据
                let oSfbData = oParsed.cal,
                    aAll = [];
                for(let item in oSfbData){
                    oSfbData[item].forEach(function(data){
                        aAll.push(data);
                    })
                }
                oSfbData.All = aAll.reverse();
                vSfb.lists = oSfbData;
                vSfb.catas = Object.keys(vSfb.lists).reverse();
                vSfb.list = vSfb.lists[vSsgyb.catas[0]];
            }

            {
                // 读取艺术大讲堂数据
                let oYsdjtData = oParsed.art,
                    aAll = [];
                for(let item in oYsdjtData){
                    oYsdjtData[item].forEach(function(data){
                        aAll.push(data);
                    })
                }
                oYsdjtData.All = aAll;
                vYsdjt.lists = oYsdjtData;
                vYsdjt.catas = Object.keys(vYsdjt.lists).reverse();
                vYsdjt.list = vYsdjt.lists[vYsdjt.catas[0]];
            }

            {
                // 读取教育实践数据
                let oPracticeData = oParsed.edu,
                    aAll = [];
                for(let item in oPracticeData){
                    oPracticeData[item].forEach(function(data){
                        aAll.push(data);
                    })
                }
                oPracticeData.All = aAll;
                vPractice.lists = oPracticeData;
                vPractice.catas = Object.keys(vPractice.lists).reverse();
                vPractice.list = vPractice.lists[vPractice.catas[0]];
            }

            {
                // 读取志愿者服务数据
                let oVolunteeringData = oParsed.vol,
                    aAll = [];
                for(let item in oVolunteeringData){
                    oVolunteeringData[item].forEach(function(data){
                        aAll.push(data);
                    })
                }
                oVolunteeringData.All = aAll.reverse();
                vVolunteering.lists = oVolunteeringData;
                vVolunteering.catas = Object.keys(vVolunteering.lists).reverse();
                vVolunteering.list = vVolunteering.lists[vVolunteering.catas[0]];
            }

        },
        fnFailCallback = function(status){
            console.error("公共教育数据加载失败");
        };
    AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);

}
