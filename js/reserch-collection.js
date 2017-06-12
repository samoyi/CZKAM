;"use strict";


vCatalog.title = ["学术研究·馆藏", "RESERCH·COLLECTION"];
vCatalog.catas = [
        [
            {title_c: "学术研究"},
            {title_e: "RESERCH"},
            {cata_c: ["学术委员会", "学术活动"]},
            {cata_e: ["ACADEMIC COMMITTEE", "ACADEMIC EVENTS"]},
            0
        ],
        [
            {title_c: "馆藏"},
            {title_e: "COLLECTION"},
            {cata_c: ["历史文物", "国画", "油画", "版画", "雕塑", "装置", "摄影", "多媒体影像", "其他"]},
            {cata_e: ["RELICS", "CHINESE PAINTING", "OLI PAINTING", "PRINT", "SCULPTURE", "DEVICE", "PHOTOGRAPHY", "MULTIMEDIA", "OTHERS"]},
            1
        ]
    ];


let vAcademicActivity = new Vue({
    el: ".academic_events",
    data: {
        list: [
            ["学术活动", "", "学术活动描述……", "2016年11月13日", 1],
            ["学术活动", "", "学术活动描述……", "2016年11月13日", 2],
            ["学术活动", "", "学术活动描述……", "2016年11月13日", 3],
            ["学术活动", "", "学术活动描述……", "2016年11月13日", 4],
            ["学术活动", "", "学术活动描述……", "2016年11月13日", 5],
            ["学术活动", "", "学术活动描述……", "2016年11月13日", 6],
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
                    <img :src="liData[1]" slot="image" alt="学术活动图片" />
                    <p slot="summary">{{liData[2]}}</p>
                    <span slot="remark">{{liData[3]}}</span>
                    <a :link="liData[4]">more</a>
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
