;"use strict";


vCatalog.title = ["崔振宽简介", "CUI ZHENKUAN ART"];
vCatalog.catas = [
        [
            {title_c: ""},
            {title_e: ""},
            {cata_c: ["崔振宽简介", "艺术年表", "作品", "艺术论著", "艺术活动", "艺术影像"]},
            {cata_e: ["CUI ZHENKUAN", "ART CHRONOLOGY", "WORKS", "TREATISE", "ACTIVITY", "VIDEO"]},
            0
        ]
    ];

let vChronology = new Vue({
    el: ".art_chronology",
    components: {
        "chronology-pic": {
            props: ["src"],
            template: `<img :src="src" alt="崔振宽艺术年表"/>`,
        },
    },
    data: {
        srcs: [
            "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/CuiZhenkuan/chronology/thumbnail/0.jpg",
            "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/CuiZhenkuan/chronology/thumbnail/1.jpg",
            "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/CuiZhenkuan/chronology/thumbnail/2.jpg",
            "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/CuiZhenkuan/chronology/thumbnail/3.jpg",
            "http://funca.oss-cn-hangzhou.aliyuncs.com/CuiZhenkuanArtMuseum/CuiZhenkuan/chronology/thumbnail/4.jpg",
        ],
    }
});


let vWorks = new Vue({
    el: ".works",
    data: {
        list: [
            ["", "", "", "", ""],
        ],
        lists: {},
        catas: ["jiaomo" , "shuimo", "xiaopin", "xiesheng"],
        catas_c: ["焦墨", "水墨", "小品", "写生"],
        nCataIndex: 0,
        nPerPage: 6, // 每页显示10个
        nPageIndex : 0, // 当前页码
    },
    computed: {
        displayedItem(){
            return this.list.slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage);
        },
        pageNum(){
            return Math.ceil((this.list.length)/this.nPerPage);
        },
        firstWorks(){
            return this.lists.jiao;
        },
    },
    methods: {
        switchpage(index){
            this.nPageIndex = index;
        },
        switchworks(index){
            this.list = this.lists[this.catas[index]];
            // 更新类别编号，将列表名称列表的当前项变成不同颜色
            this.nCataIndex = index;
            // 切换类别后，将页码变成第一个的，否则，例如，如果切换前页码是2，而一个类别只有一页没有第二页，则该类别将不会显示。
            this.nPageIndex = 0;
        },
    },
    components: {
        "works-item": {
            props: ["worksData"],
            template: `
                <li>
                    <div class="thumbnail" :style="getUrl(worksData[0])"></div>
                    <div class="info">
                        <p><span>作品名称：</span>{{worksData[1]}}</p>
                        <p><span>尺寸：</span>{{worksData[2]}}</p>
                        <p><span>时间：</span>{{worksData[3]}}</p>
                        <p><span>作者：</span>{{worksData[4]}}</p>
                    </div>
                    <div style="clear:both;"></div>
                </li>`,
            methods: {
                getUrl(url){
                    return {
                        backgroundImage: "url(" + url + ")",
                    };
                },
            },
        },
        "works-cata": {
            props: ["cata_c", "thisIndex", "cataIndex"],
            template: `<li :class="{active_cata: thisIndex===cataIndex}" @click="clickCata(cata_c)">{{cata_c}}</li>`,
            methods: {
                clickCata(cata){
                    this.$emit("switchcata", this.$parent.catas_c.indexOf(cata));
                },
            },
        },
        "list-pagination": {
            props: ["pageIndex"],
            template: `<li @click="clickPagination(pageIndex)">{{pageIndex+1}}</li>`,
            methods: {
                clickPagination(index){
                    this.$emit("switchpagination", index);
                    setTimeout(function(){
                        window.scrollTo( 0, 0 );
                    }, 200);
                },
            },
        },
    },
});



let vTreatise = new Vue({
    el: ".treatise",
    data: {
        list: [
            ["", "", ""]
        ],
        nPerPage: 4, // 每页显示10个
        nPageIndex : 0, // 当前页码
    },
    computed: {
        displayedItem(){
            return this.list.slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage);
        },
        pageNum(){
            return Math.ceil((this.list.length)/this.nPerPage);
        },
    },
    methods: {
        switchpage(index){
            this.nPageIndex = index;
        }
    },
    components: {
        "treatise-item": {
            props: ["treatiseData"],
            template: `
                <li>
                    <div class="cover" :style="getUrl(treatiseData[0])"></div>
                    <div class="info">
                        <p><span>作者：</span>{{treatiseData[1]}}</p>
                        <p><span>时间：</span>{{treatiseData[2]}}</p>
                    </div>
                    <div style="clear:both;"></div>
                </li>`,
            methods: {
                getUrl(url){
                    return {
                        backgroundImage: "url(" + url + ")",
                    };
                },
            },
        },
        "list-pagination": {
            props: ["pageIndex"],
            template: `<li @click="clickPagination(pageIndex)">{{pageIndex+1}}</li>`,
            methods: {
                clickPagination(index){
                    this.$emit("switchpagination", index);
                    setTimeout(function(){
                        window.scrollTo( 0, 0 );
                    }, 200);
                },
            },
        },
    },
});





let vAcademicActivity = new Vue({
    el: ".activity",
    data: {
        list: [
            ["首届陕西省大学生摄影大展开幕啦", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["首届陕西省大学生摄影大展开幕啦", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["首届陕西省大学生摄影大展开幕啦", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["首届陕西省大学生摄影大展开幕啦", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["首届陕西省大学生摄影大展开幕啦", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["首届陕西省大学生摄影大展开幕啦", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["首届陕西省大学生摄影大展开幕啦", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["首届陕西省大学生摄影大展开幕啦", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["首届陕西省大学生摄影大展开幕啦", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["首届陕西省大学生摄影大展开幕啦", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["首届陕西省大学生摄影大展开幕啦", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
        ],
        nPerPage: 8, // 每页显示10个
        nPageIndex : 0, // 当前页码
    },
    computed: {
        displayedItem(){
            return this.list.slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage);
        },
        pageNum(){
            return Math.ceil((this.list.length)/this.nPerPage);
        },
    },
    methods: {
        switchpage(index){
            this.nPageIndex = index;
        }
    },
    components: {
        "activity-item": {
            props: ["liData"],
            template: `<news-list>
                    <h3 slot="title">{{liData[0]}}</h3>
                    <img :src="liData[1]" slot="image" />
                    <p slot="summary">{{liData[2]}}</p>
                    <span slot="remark">{{liData[3]}}</span>
                </news-list>`,
        },
        "list-pagination": {
            props: ["pageIndex"],
            template: `<li @click="clickPagination(pageIndex)">{{pageIndex+1}}</li>`,
            methods: {
                clickPagination(index){
                    this.$emit("switchpagination", index);
                    setTimeout(function(){
                        window.scrollTo( 0, 0 );
                    }, 200);
                },
            },
        },
    },
});


let vVideo = new Vue({
    el: ".video",
    components: {
        "video-template": {
            props: ["src", "title"],
            template: `
                <div>
                    <video :src="src" width="270" height="260" controls="controls">
                        你的浏览器版本过低
                    </video>
                    <h3>{{title}}</h3>
                </div>
                `,
        },
    },
    data: {
        srcs: [],
        titles: [],
    },
});






// lazy loading
window.onload = function(){

    let oContent = document.querySelector(".content");

    // 作品数据
    {
        let sURL = "ajax.php?item=cuizhenkuan_works",
            fnSuccessCallback = function(res){
                vWorks.lists = JSON.parse(res);
                vWorks.list = vWorks.lists[vWorks.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("加载作品数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
    // 论著数据
    {
        let sURL = "ajax.php?item=cuizhenkuan_treatise",
            fnSuccessCallback = function(res){
                vTreatise.list = JSON.parse(res);
            },
            fnFailCallback = function(status){
                console.error("加载著作数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
    // 艺术影像数据
    {
        let sURL = "ajax.php?item=cuizhenkuan_video",
            fnSuccessCallback = function(res){
                let oParsed = JSON.parse(res);
                console.log(oParsed);
                vVideo.srcs = oParsed.srcs;
                vVideo.titles = oParsed.titles;
            },
            fnFailCallback = function(status){
                console.error("加载艺术影像数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }

};
