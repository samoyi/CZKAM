;"use strict";


vCatalog.title = ["公共教育", "PUBLIC EDUCATION"];
vCatalog.catas = [
        [
            {title_c: ""},
            {title_e: ""},
            {cata_c: ["公教活动", "合作交流", "志愿者服务"]},
            {cata_e: ["ACTIVITIES", "EXCHANGES", "VOLUNTEERING"]},
            0
        ]
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

let vExchanges = new Vue({
    el: ".exchanges",
    data: {
        list: [
            ["合作交流呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["合作交流呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["合作交流呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["合作交流呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["合作交流呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["合作交流呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
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
        "exchanges-item": {
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

let vVolunteering = new Vue({
    el: ".volunteering",
    data: {
        list: [
            ["志愿者服务呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["志愿者服务呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["志愿者服务呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["志愿者服务呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["志愿者服务呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["志愿者服务呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["志愿者服务呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["志愿者服务呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["志愿者服务呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
            ["志愿者服务呵呵呵呵", "", "由山西省教育厅主办第三个是感受到水电费水电费水电费是水电费水电费水电费是的给我个省份的记录数惊呆了发熟练度设定了烦死了对方说……", "2016年11月13日"],
        ],
        nPerPage: 8, // 每页显示8个
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
        "volunteering-item": {
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
