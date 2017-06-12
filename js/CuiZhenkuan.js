;"use strict";


vCatalog.title = ["崔振宽简介", "CUI ZHENKUAN ART"];
vCatalog.catas = [
        [
            {title_c: ""},
            {title_e: ""},
            {cata_c: ["崔振宽简介", "艺术年表", "作品", "艺术论著", "艺术活动", "艺术影响"]},
            {cata_e: ["CUI ZHENKUAN", "ART CHRONOLOGY", "WORKS", "TREATISE", "ACTIVITY", "VIDEO"]},
            0
        ]
    ];

let vTreatise = new Vue({
    el: ".treatise",
    data: {
        list: [
            ["", "崔振宽", "2016年"],
            ["", "崔振宽", "2016年"],
            ["", "崔振宽", "2016年"],
            ["", "崔振宽", "2016年"],
            ["", "崔振宽", "2016年"],
            ["", "崔振宽", "2016年"],
            ["", "崔振宽", "2016年"],
            ["", "崔振宽", "2016年"],
            ["", "崔振宽", "2016年"],
            ["", "崔振宽", "2016年"],
            ["", "崔振宽", "2016年"],
        ],
        nPerPage: 4, // 每页显示10个
        nPageIndex : 0, // 当前页码
    },
    computed: {
        displayedItem(){
            return this.list.slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage);
        },
        pageNum(){
            return Math.ceil((this.list.length)/10);
        },
    },
    methods: {
        switchpage(index){
            this.nPageIndex = index;
        }
    },
    components: {
        "treatise-item": {
            props: ["liData"],
            template: `<news-list>
                    <div slot="image"><img alt="作品图" :src="liData[0]" /></div>
                    <p slot="summary">作者：{{liData[1]}}</p>
                    <p slot="remark">时间：{{liData[2]}}</p>
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


let vWorks = new Vue({
    el: ".works",
    data: {
        list: [
            ["", "", "", "", ""],
        ],
        lists: {},
        catas: ["jiaomo" , "shuimo", "xiaopin", "xiesheng"],
        catas_c: ["焦墨", "水墨", "小品", "写生"],
        nPerPage: 6, // 每页显示10个
        nPageIndex : 0, // 当前页码
    },
    computed: {
        displayedItem(){
            return this.list.slice(this.nPageIndex*this.nPerPage, (this.nPageIndex+1)*this.nPerPage);
        },
        pageNum(){
            return Math.ceil((this.list.length)/10);
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
            // console.log(this.list);
            // console.log(cata_c.lists[index]);
            this.list = this.lists[this.catas[index]];
        },
    },
    components: {
        "works-item": {
            props: ["worksData"],
            template: `
                <li>
                    <div><img :src="worksData[0]" :alt="worksData[1] />"</div>
                    <p>作品名称：{{worksData[1]}}</p>
                    <p>尺寸：{{worksData[2]}}</p>
                    <p>时间：{{worksData[3]}}</p>
                    <p>作者：{{worksData[4]}}</p>
                </li>`,
        },
        "works-cata": {
            props: ["cata_c"],
            template: `<li @click="clickCata(cata_c)">{{cata_c}}</li>`,
            methods: {
                clickCata(cata){
                    console.log( this.$parent.catas_c.indexOf(cata) );
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
                },
            },
        },
    },
});
// 加载作品数据
vWorks.lists = {
    "jiaomo": [
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "焦墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
    ],
    "shuimo": [
        ["", "水墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "水墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "水墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "水墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "水墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "水墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "水墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "水墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "水墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "水墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "水墨作品名称", "158cm x 362cm", "2016年", "崔振宽"],
    ],
    "xiaopin": [
        ["", "小品作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "小品作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "小品作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "小品作品名称", "158cm x 362cm", "2016年", "崔振宽"],
    ],
    "xiesheng": [
        ["", "写生作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "写生作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "写生作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "写生作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "写生作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "写生作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "写生作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "写生作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "写生作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "写生作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ["", "写生作品名称", "158cm x 362cm", "2016年", "崔振宽"],
    ],
};
vWorks.list = vWorks.lists.jiaomo;



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
            return Math.ceil((this.list.length)/10);
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
                },
            },
        },
    },
});
