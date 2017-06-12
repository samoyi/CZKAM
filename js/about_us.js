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


// 百度地图
{
    var map = new BMap.Map("bd_map");
    var point = new BMap.Point(109.0958070000, 34.2943670000);
    map.centerAndZoom(point, 15);

    //创建标注
    var pt = new BMap.Point(109.0958070000, 34.2943670000);
    var myIcon = new BMap.Icon("http://developer.baidu.com/map/jsdemo/img/fox.gif", new BMap.Size(38,46));
    var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
    map.addOverlay(marker2);              // 将标注添加到地图中
}
