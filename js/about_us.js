;"use strict";


vCatalog.title = ["关于我们", "ABOUT US"];
vCatalog.catas = [
        [
            {title_c: "美术馆"},
            {title_e: "ART GALLERY"},
            {cata_c: ["简介", "大事记", "开放时间", "地理交通", "联系我们"]},
            {cata_e: ["INTRODUCE", "EVENTS", "OPENING HOURS", "TRANSPORTATION", "CONTACT US"]},
            0
        ],
        [
            {title_c: "配套设施"},
            {title_e: "FACILITIES"},
            {cata_c: ["艺术酒店", "咖啡厅", "多功能报告厅", "贵宾厅", "停车位"]},
            {cata_e: ["ART HOTEL", "MO COFFEE", "MULTI-FUNCTIONAL AUDITORIUM", "VIP HALL", "PARKING"]},
            1
        ],
    ];


// lazy loading
window.onload = function(){

    let oContent = document.querySelector(".content");

    // 大事记
    {
        let imgs = oContent.querySelectorAll(".events img"),
            len = imgs.length;
        for(let i=0; i<len; i++){
            imgs[i].src = "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/about_us/art_gallery/events/" + i + ".jpg";
        }
    }
    // 艺术酒店
    {
        let imgs = oContent.querySelectorAll(".art_hotel img"),
            len = imgs.length;
        for(let i=0; i<len; i++){
            imgs[i].src = "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/about_us/facilities/art_hotel/" + i + ".jpg";
        }
    }
    // 咖啡厅
    {
        let imgs = oContent.querySelectorAll(".mo_coffee img"),
            len = imgs.length;
        for(let i=0; i<len; i++){
            imgs[i].src = "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/about_us/facilities/mo_coffee/" + i + ".jpg";
        }
    }

    /*
     * 虽然给地图控件设置了尺寸，但是在不显示的情况下，百度地图会认为其尺寸为0，大小
     * 为一个点，就是实际矩形的左上角。因此页面在没显示的情况下加载下面的代码，百度
     * 地图会选定这一点为中心点。最终地图显示出来之后，中心点会处于矩形的左上角。
     * 所以这里一直监听是否切换到了地图页面的显示，如果是的话，再加载地图代码。
     */
     {
         let mapWatcher = setInterval(function(){
             if("地理交通" === vCatalog.currentLevel2Title){
                 var map = new BMap.Map("bd_map");
                 var point = new BMap.Point(109.095807, 34.294372);
                 map.centerAndZoom(point, 15);

                 //创建标注
                 var marker = new BMap.Marker(point);  // 创建标注
             	map.addOverlay(marker);               // 将标注添加到地图中
             	marker.setAnimation();

                 // 启用滚轮放大缩小
                 map.enableScrollWheelZoom();

                 clearInterval(mapWatcher);
             }
         }, 500);
     }


     // 汉中数据
     {
         let sURL = "ajax.php?item=article_hanzhong",
             fnSuccessCallback = function(res){
                 let oParsed = JSON.parse(res);
                 setTimeout(function(){
                     vUpdatedArticle.articleHTML = oParsed.hanzhong;
                 }, 5000);
             },
             fnFailCallback = function(status){
                 console.error("加载汉中行数据失败");
             };
         AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
     }
};
