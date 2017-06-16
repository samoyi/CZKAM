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
// let vPermanentExhibition = new Vue({
//     el: ".permanent_exhibition",
//     data: {
//         list: [
//             ["", "", "", "", ""],
//         ],
//         lists: {},
//         catas: ["2017", "2016", "2015", "2014"],
//         nCataIndex: 0,
//         nPerPage: 6, // 每页显示6个
//         nPageIndex : 0, // 当前页码
//     },
//     computed: {
//         displayedItem(){
//             return this.list.slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage);
//         },
//         pageNum(){
//             return Math.ceil((this.list.length)/this.nPerPage);
//         },
//     },
//     methods: {
//         switchpage(index){
//             this.nPageIndex = index;
//         },
//         switchexhibitions(index){
//             this.list = this.lists[this.catas[index]];
//             this.nCataIndex = index;
//         },
//     },
//     components: {
//         "exhibition-item": {
//             props: ["exhibitionData"],
//             template: `
//                 <li>
//                     <img class="cover" :src="exhibitionData[0]" :alt="exhibitionData[2]" />
//                     <div class="info">
//                         <h3><span>{{exhibitionData[1]}}</span><span v-if="exhibitionData[1]"> | </span>{{exhibitionData[2]}}</h3>
//                         <p class="date">{{exhibitionData[3]}}</p>
//                         <p class="summary">{{exhibitionData[4]}}</p>
//                         <span class="more">MORE</span>
//                     </div>
//                     <div style="clear:both;"></div>
//                 </li>`,
//         },
//         "exhibition-cata": {
//             props: ["cata", "thisIndex", "cataIndex"],
//             template: `<li :class="{active_cata: thisIndex===cataIndex}" @click="clickCata(cata)">{{cata}}</li>`,
//             methods: {
//                 clickCata(cata){
//                     this.$emit("switchcata", this.$parent.catas.indexOf(cata));
//                 },
//             },
//         },
//         "list-pagination": {
//             props: ["pageIndex"],
//             template: `<li @click="clickPagination(pageIndex)">{{pageIndex+1}}</li>`,
//             methods: {
//                 clickPagination(index){
//                     this.$emit("switchpagination", index);
//                     setTimeout(function(){
//                         window.scrollTo( 0, 0 );
//                     }, 200);
//                 },
//             },
//         },
//     },
// });



// lazy loading
window.onload = function(){

    let oContent = document.querySelector(".content");

    // 作品数据
    {
        let sURL = "ajax.php?item=exhibition_permanent",
            fnSuccessCallback = function(res){
                vPermanentExhibition.lists = JSON.parse(res);
                vPermanentExhibition.catas = Object.keys(vPermanentExhibition.lists);
                vPermanentExhibition.list = vPermanentExhibition.lists[vPermanentExhibition.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("加载展览数据失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
};
