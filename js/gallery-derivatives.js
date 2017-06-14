;"use strict";


vCatalog.title = ["画廊·衍生品", "GALLERY·DERIVATIVES"];
vCatalog.catas = [
        [
            {title_c: ""},
            {title_e: ""},
            {cata_c: ["画廊", "衍生品"]},
            {cata_e: ["GALLERY", "DERIVATIVES"]},
            0
        ]
    ];



// let vWorks = new Vue({
//     el: ".gallery",
//     data: {
//         list: [
//             ["", "", "", "", ""],
//         ],
//         lists: {},
//         catas: ["cuizhenkuan" , "huoming", "wangyanlin", "luopingan"],
//         catas_c: ["崔振宽", "霍明", "王炎林", "罗平安"],
//         nPerPage: 4, // 每页显示10个
//         nPageIndex : 0, // 当前页码
//     },
//     computed: {
//         displayedItem(){
//             return this.list.slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage);
//         },
//         pageNum(){
//             return Math.ceil((this.list.length)/this.nPerPage);
//         },
//         firstWorks(){
//             return this.lists.jiao;
//         },
//     },
//     methods: {
//         switchpage(index){
//             this.nPageIndex = index;
//         },
//         switchworks(index){
//             this.list = this.lists[this.catas[index]];
//         },
//     },
//     components: {
//         "works-item": {
//             props: ["worksData"],
//             template: `
//                 <li>
//                     <div><img :src="worksData[0]" :alt="worksData[1] />"</div>
//                     <p>作品名称：{{worksData[1]}}</p>
//                     <p>尺寸：{{worksData[2]}}</p>
//                     <p>时间：{{worksData[3]}}</p>
//                     <p>作者：{{worksData[4]}}</p>
//                 </li>`,
//         },
//         "works-cata": {
//             props: ["cata_c"],
//             template: `<li @click="clickCata(cata_c)">{{cata_c}}</li>`,
//             methods: {
//                 clickCata(cata){
//                     this.$emit("switchcata", this.$parent.catas_c.indexOf(cata));
//                 },
//             },
//         },
//         "list-pagination": {
//             props: ["pageIndex"],
//             template: `<li @click="clickPagination(pageIndex)">{{pageIndex+1}}</li>`,
//             methods: {
//                 clickPagination(index){
//                     this.$emit("switchpagination", index);
//                 },
//             },
//         },
//     },
// });

let vWorks = new Vue({
    el: ".gallery",
    data: {
        list: [
            ["", "", "", "", ""],
        ],
        lists: {},
        catas: ["cuizhenkuan" , "huoming", "wangyanlin", "luopingan"],
        catas_c: ["崔振宽", "霍明", "王炎林", "罗平安"],
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


// lazy loading
window.onload = function(){

    let oContent = document.querySelector(".content");

    // 作品数据
    {
        let sURL = "ajax.php?item=gallery_works",
            fnSuccessCallback = function(res){
                vWorks.lists = JSON.parse(res);
                vWorks.list = vWorks.lists[vWorks.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("加载作品数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }

};
