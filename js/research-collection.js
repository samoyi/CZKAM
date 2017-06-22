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
            // {cata_c: [ "国画", "历史文物","油画", "版画", "雕塑", "装置", "摄影", "多媒体影像", "其他"]},
            // {cata_e: ["CHINESE PAINTING", "RELICS", "OLI PAINTING", "PRINT", "SCULPTURE", "DEVICE", "PHOTOGRAPHY", "MULTIMEDIA", "OTHERS"]},
            {cata_c: ["国画"]},
            {cata_e: ["CHINESE PAINTING"]},
            1
        ]
    ];



let vAcademicEvents = exhibitionClass(".academic_events");

// 国画
let vChinesePainting = vCollectionClass(".Chinese_painting", ["cuizhenkuan", "xinshuimo", "changanhuapai"], ["崔振宽作品", "新水墨作品", "长安画派作品"]);


function vCollectionClass(elSelector, catas_e, catas_c){
    return new Vue({
        el: elSelector,
        data: {
            list: [
                ["", "", "", "", "", ""],
            ],
            lists: {},
            catas: catas_e,
            catas_c: catas_c,
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
                        <a :href="worksData[1]" target="_blank"><div class="thumbnail" :style="getUrl(worksData[0])"></div></a>
                        <div class="info">
                            <p><span>作品名称：</span>{{worksData[2]}}</p>
                            <p><span>尺寸：</span>{{worksData[3]}}</p>
                            <p><span>时间：</span>{{worksData[4]}}</p>
                            <p><span>作者：</span>{{worksData[5]}}</p>
                            <p v-if="worksData[6]"><span>风格：</span>{{worksData[6]}}</p>
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
}





// lazy loading
window.onload = function(){

    let oContent = document.querySelector(".content");

    // 艺术活动数据
    {
        let sURL = "ajax.php?item=research_events",
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
                vAcademicEvents.lists = oParsed;
                vAcademicEvents.catas = Object.keys(vAcademicEvents.lists).reverse();
                vAcademicEvents.list = vAcademicEvents.lists[vAcademicEvents.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("加载艺术活动数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }

    // 国画数据
    {
        let sURL = "ajax.php?item=collection_chinese",
            fnSuccessCallback = function(res){
                vChinesePainting.lists = JSON.parse(res);
                vChinesePainting.list = vChinesePainting.lists[vChinesePainting.catas[0]];

                let aPreload = [];
                for(let i=0,len=vChinesePainting.catas.length; i<len; i++){
                    aPreload[i] = vChinesePainting.lists[vChinesePainting.catas[i]].map(function(item){
                        return item[1];
                    });
                }
                stepBatchLoadImage(aPreload);
            },
            fnFailCallback = function(status){
                console.error("加载国画数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }

};
