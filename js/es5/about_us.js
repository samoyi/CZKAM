;"use strict";

vCatalog.title = ["关于我们", "ABOUT US"];
vCatalog.catas = [[{ title_c: "美术馆" }, { title_e: "ART GALLERY" }, { cata_c: ["简介", "大事记", "开放时间", "地理交通", "联系我们"] }, { cata_e: ["INTRODUCE", "EVENTS", "OPENING HOURS", "TRANSPORTATION", "CONTACT US"] }, 0], [{ title_c: "配套设施" }, { title_e: "FACILITIES" },
// {cata_c: ["艺术酒店", "咖啡厅", "多功能报告厅", "贵宾厅", "停车位"]},
// {cata_e: ["ART HOTEL", "MO COFFEE", "MULTI-FUNCTIONAL AUDITORIUM", "VIP HALL", "PARKING"]},
{ cata_c: ["艺术酒店", "咖啡厅"] }, { cata_e: ["ART HOTEL", "MO COFFEE"] }, 1]];

// lazy loading
window.onload = function () {

    var oContent = document.querySelector(".content");

    // 大事记
    {
        var imgs = oContent.querySelectorAll(".events img"),
            len = imgs.length;
        for (var i = 0; i < len; i++) {
            imgs[i].src = "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/about_us/art_gallery/events/" + i + ".jpg";
        }
    }

    // 联系我们
    {
        var _imgs = oContent.querySelectorAll(".contact_us img"),
            _len = _imgs.length;
        for (var _i = 0; _i < _len; _i++) {
            _imgs[_i].src = "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/about_us/art_gallery/contact_us/" + _i + ".jpg";
        }
    }

    // 艺术酒店
    {
        var _imgs2 = oContent.querySelectorAll(".art_hotel img"),
            _len2 = _imgs2.length;
        for (var _i2 = 0; _i2 < _len2; _i2++) {
            _imgs2[_i2].src = "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/about_us/facilities/art_hotel/" + _i2 + ".jpg";
        }
    }
    // 咖啡厅
    {
        var _imgs3 = oContent.querySelectorAll(".mo_coffee img"),
            _len3 = _imgs3.length;
        for (var _i3 = 0; _i3 < _len3; _i3++) {
            _imgs3[_i3].src = "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/about_us/facilities/mo_coffee/" + _i3 + ".jpg";
        }
    }

    /*
     * 虽然给地图控件设置了尺寸，但是在不显示的情况下，百度地图会认为其尺寸为0，大小
     * 为一个点，就是实际矩形的左上角。因此页面在没显示的情况下加载下面的代码，百度
     * 地图会选定这一点为中心点。最终地图显示出来之后，中心点会处于矩形的左上角。
     * 所以这里一直监听是否切换到了地图页面的显示，如果是的话，再加载地图代码。
     */
    {
        var mapWatcher = setInterval(function () {
            if ("地理交通" === vCatalog.currentLevel2Title) {
                var map = new BMap.Map("bd_map");
                var point = new BMap.Point(109.095807, 34.294372);
                map.centerAndZoom(point, 15);

                //创建标注
                var marker = new BMap.Marker(point); // 创建标注
                map.addOverlay(marker); // 将标注添加到地图中
                marker.setAnimation();

                // 启用滚轮放大缩小
                map.enableScrollWheelZoom();

                clearInterval(mapWatcher);
            }
        }, 500);
    }
};