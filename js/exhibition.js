;"use strict";

vCatalog.title = ["展览", "EXHIBITION"];
vCatalog.catas = [
        [
            {title_c: "常设展览"},
            {title_e: "PERMANENT EXHIBTION"},
            {cata_c: []},
            {cata_e: []},
            0
        ],
        [
            {title_c: "在线展览"},
            {title_e: "ON-LINE"},
            {cata_c: []},
            {cata_e: []},
            1,
        ],
        [
            {title_c: "展览"},
            {title_e: "OTHER"},
            {cata_c: []},
            {cata_e: []},
            2
        ],
    ];




let vPermanentExhibition = exhibitionClass(".permanent_exhibition");
directToDetailArticle(vPermanentExhibition);
let vOnlineExhibition = exhibitionClass(".online_exhibition");
directToDetailArticle(vOnlineExhibition);
let vOtherExhibition = exhibitionClass(".other_exhibition");
directToDetailArticle(vOtherExhibition);




// get data
{

    let oContent = document.querySelector(".content");

    // 展览数据
    {
        // let sURL = "ajax.php?item=exhibition_permanent",
        let sURL = "http://www.czkam.com/ajax/show.php",
            fnSuccessCallback = function(res){
                let oParsed = JSON.parse(res);

                {
                    // 读取常设展览数据
                    let oPermanentExhibitionData = oParsed.always,
                        aAll = [],
                        aKey = Object.keys(oPermanentExhibitionData);

                    aKey.reverse().forEach(function(item){
                        oPermanentExhibitionData[item].forEach(function(data){
                            aAll.push(data);
                        })
                    });
                    oPermanentExhibitionData.All = aAll;
                    vPermanentExhibition.lists = oPermanentExhibitionData;
                    // 获得所有年份字符串组成的数组
                    vPermanentExhibition.catas = Object.keys(vPermanentExhibition.lists).reverse();
                    vPermanentExhibition.list = vPermanentExhibition.lists[vPermanentExhibition.catas[0]];
                }

                {
                    // 读取在线展览数据
                    let oOnlineExhibitionData = oParsed.online,
                        aAll = [],
                        aKey = Object.keys(oOnlineExhibitionData);

                    aKey.reverse().forEach(function(item){
                        oOnlineExhibitionData[item].forEach(function(data){
                            aAll.push(data);
                        })
                    });
                    oOnlineExhibitionData.All = aAll;
                    vOnlineExhibition.lists = oOnlineExhibitionData;
                    // 获得所有年份字符串组成的数组
                    vOnlineExhibition.catas = Object.keys(vOnlineExhibition.lists).reverse();
                    vOnlineExhibition.list = vOnlineExhibition.lists[vOnlineExhibition.catas[0]];
                }

                {
                    // 读取其他展览数据
                    let oOtherExhibitionData = oParsed.other,
                        aAll = [],
                        aKey = Object.keys(oOtherExhibitionData);

                    aKey.reverse().forEach(function(item){
                        oOtherExhibitionData[item].forEach(function(data){
                            aAll.push(data);
                        })
                    });
                    oOtherExhibitionData.All = aAll;
                    vOtherExhibition.lists = oOtherExhibitionData;
                    // 获得所有年份字符串组成的数组
                    vOtherExhibition.catas = Object.keys(vOtherExhibition.lists).reverse();
                    vOtherExhibition.list = vOtherExhibition.lists[vOtherExhibition.catas[0]];
                }

            },
            fnFailCallback = function(status){
                console.error("加载展览数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }

}
