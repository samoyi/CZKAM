;"use strict";


vCatalog.title = ["公共教育", "PUBLIC EDUCATION"];
vCatalog.catas = [
        [
            {title_c: "公教活动"},
            {title_e: "ART GALLERY"},
            {cata_c: ["山水高研班", "艺术大讲堂"]},
            {cata_e: ["SHANSHUIGAOYANBAN", "YISHUDAJIANGTANG"]},
            0
        ],
        [
            {title_c: "合作交流"},
            {title_e: "FACILITIES"},
            {cata_c: []},
            {cata_e: []},
            1
        ],
        [
            {title_c: "志愿者服务"},
            {title_e: "VOLUNTEERING"},
            {cata_c: []},
            {cata_e: []},
            2
        ],
    ];

let vActivities = new Vue({
    el: ".activities",
    data: {
        list: [
            ["公共教育呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["公共教育呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["公共教育呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["公共教育呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["公共教育呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["公共教育呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
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
        "public-activity": {
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
                },
            },
        },
    },
});

// let vExchanges = new Vue({
//     el: ".exchanges",
//     data: {
//         list: [
//             ["合作交流呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
//             ["合作交流呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
//             ["合作交流呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
//             ["合作交流呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
//             ["合作交流呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
//             ["合作交流呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
//         ],
//         nPerPage: 8, // 每页显示10个
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
//         }
//     },
//     components: {
//         "exchanges-item": {
//             props: ["liData"],
//             template: `<news-list>
//                     <h3 slot="title">{{liData[0]}}</h3>
//                     <img :src="liData[1]" slot="image" />
//                     <p slot="summary">{{liData[2]}}</p>
//                     <span slot="remark">{{liData[3]}}</span>
//                 </news-list>`,
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




let vExchanges= exhibitionClass(".exchanges");
let vVolunteering = exhibitionClass(".volunteering");

// lazy loading
window.onload = function(){

    let oContent = document.querySelector(".content");

    // 合作交流数据
    {
        let sURL = "ajax.php?item=public_exchanges",
            fnSuccessCallback = function(res){
                vExchanges.lists = JSON.parse(res);
                vExchanges.catas = Object.keys(vExchanges.lists).reverse();
                vExchanges.list = vExchanges.lists[vExchanges.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("合作交流数据加载失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }


    // 志愿者服务数据
    {
        let sURL = "ajax.php?item=public_volunteering",
            fnSuccessCallback = function(res){
                vVolunteering.lists = JSON.parse(res);
                vVolunteering.catas = Object.keys(vVolunteering.lists).reverse();
                vVolunteering.list = vVolunteering.lists[vVolunteering.catas[0]];
            },
            fnFailCallback = function(status){
                console.error("志愿者服务数据加载失败");
            };
        AJAX_GET(sURL, fnSuccessCallback, fnFailCallback);
    }
};
