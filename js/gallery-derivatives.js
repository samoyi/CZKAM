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



    let vWorks = new Vue({
        el: ".gallery",
        data: {
            list: [
                ["", "", "", "", ""],
            ],
            lists: {},
            catas: ["cuizhenkuan" , "huoming", "wangyanlin", "luopingan"],
            catas_c: ["崔振宽", "霍明", "王炎林", "罗平安"],
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
        "cuizhenkuan": [
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
            ["", "崔振宽作品名称", "158cm x 362cm", "2016年", "崔振宽"],
        ],
        "huoming": [
            ["", "霍明作品名称", "158cm x 362cm", "2016年", "霍明"],
            ["", "霍明作品名称", "158cm x 362cm", "2016年", "霍明"],
            ["", "霍明作品名称", "158cm x 362cm", "2016年", "霍明"],
            ["", "霍明作品名称", "158cm x 362cm", "2016年", "霍明"],
            ["", "霍明作品名称", "158cm x 362cm", "2016年", "霍明"],
            ["", "霍明作品名称", "158cm x 362cm", "2016年", "霍明"],
            ["", "霍明作品名称", "158cm x 362cm", "2016年", "霍明"],
            ["", "霍明作品名称", "158cm x 362cm", "2016年", "霍明"],
            ["", "霍明作品名称", "158cm x 362cm", "2016年", "霍明"],
            ["", "霍明作品名称", "158cm x 362cm", "2016年", "霍明"],
            ["", "霍明作品名称", "158cm x 362cm", "2016年", "霍明"],
        ],
        "wangyanlin": [
            ["", "王炎林作品名称", "158cm x 362cm", "2016年", "王炎林"],
            ["", "王炎林作品名称", "158cm x 362cm", "2016年", "王炎林"],
            ["", "王炎林作品名称", "158cm x 362cm", "2016年", "王炎林"],
            ["", "王炎林作品名称", "158cm x 362cm", "2016年", "王炎林"],
        ],
        "luopingan": [
            ["", "罗平安作品名称", "158cm x 362cm", "2016年", "罗平安"],
            ["", "罗平安作品名称", "158cm x 362cm", "2016年", "罗平安"],
            ["", "罗平安作品名称", "158cm x 362cm", "2016年", "罗平安"],
            ["", "罗平安作品名称", "158cm x 362cm", "2016年", "罗平安"],
            ["", "罗平安作品名称", "158cm x 362cm", "2016年", "罗平安"],
            ["", "罗平安作品名称", "158cm x 362cm", "2016年", "罗平安"],
            ["", "罗平安作品名称", "158cm x 362cm", "2016年", "罗平安"],
            ["", "罗平安作品名称", "158cm x 362cm", "2016年", "罗平安"],
            ["", "罗平安作品名称", "158cm x 362cm", "2016年", "罗平安"],
            ["", "罗平安作品名称", "158cm x 362cm", "2016年", "罗平安"],
            ["", "罗平安作品名称", "158cm x 362cm", "2016年", "罗平安"],
        ],
    };
    vWorks.list = vWorks.lists.cuizhenkuan;
