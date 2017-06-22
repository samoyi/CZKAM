;"use strict";

vCatalog.title = ["展览", "EXHIBITION"];
vCatalog.catas = [
        [
            {title_c: "常设展览"},
            {title_e: "PERMANENT EXHIBTION"},
            // {cata_c: ["展览预告", "常设展览", "在线展览"]},
            // {cata_e: ["UPCOMING EXHIBTION", "PERMANENT EXHIBTION", "ON-LINE"]},
            {cata_c: []},
            {cata_e: []},
            0
        ]
    ];




let vPermanentExhibition = exhibitionClass(".permanent_exhibition");
directToDetailArticle(vPermanentExhibition);


// lazy loading
window.onload = function(){

    let oContent = document.querySelector(".content");

    // 展览数据
    {
        let sURL = "ajax.php?item=exhibition_permanent",
            fnSuccessCallback = function(res){
                let oParsed = JSON.parse(res),
                    aAll = [];
                for(let item in oParsed){
                    // console.log(item)
                    oParsed[item].forEach(function(data){
                        aAll.push(data);
                    })
                }
                oParsed.All = aAll.reverse();
                vPermanentExhibition.lists = oParsed;
                // 获得所有年份字符串组成的数组
                vPermanentExhibition.catas = Object.keys(vPermanentExhibition.lists).reverse();
                vPermanentExhibition.list = vPermanentExhibition.lists[vPermanentExhibition.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("加载展览数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
};
