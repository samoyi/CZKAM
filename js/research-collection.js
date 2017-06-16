;"use strict";


vCatalog.title = ["学术研究·馆藏", "RESEARCH·COLLECTION"];
vCatalog.catas = [
        [
            {title_c: "学术研究"},
            {title_e: "RESEARCH"},
            {cata_c: ["学术委员会", "学术活动"]},
            {cata_e: ["ACADEMIC COMMITTEE", "ACADEMIC EVENTS"]},
            0
        ],
        [
            {title_c: "馆藏"},
            {title_e: "COLLECTION"},
            {cata_c: ["历史文物", "国画", "油画", "版画", "雕塑", "装置", "摄影", "多媒体影像", "其他"]},
            {cata_e: ["RELICS", "CHINESE PAINTING", "OLI PAINTING", "PRINT", "SCULPTURE", "DEVICE", "PHOTOGRAPHY", "MULTIMEDIA", "OTHERS"]},
            1
        ]
    ];



let vAcademicEvents = exhibitionClass(".academic_events");



// lazy loading
window.onload = function(){

    let oContent = document.querySelector(".content");

    // 艺术活动数据
    {
        let sURL = "ajax.php?item=research_events",
            fnSuccessCallback = function(res){
                vAcademicEvents.lists = JSON.parse(res);
                vAcademicEvents.catas = Object.keys(vAcademicEvents.lists).reverse();
                vAcademicEvents.list = vAcademicEvents.lists[vAcademicEvents.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("加载艺术活动数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }


};
