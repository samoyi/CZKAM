<!-- 分页器组件。在出现列表的模块中可以引用该组件 -->

<template>
    <div class="pagination_wrapper" v-if="pageNum>1">
        <ul class="pagination">
            <li  v-for="n in pageNum" :class="{ currentLi:pageIndex===n-1}"
                    @click="clickPagination(n-1)">{{n}}</li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        pageNum: { // 总页数
            type: Number,
        },
        perPage: { // 每页显示几条。超过该条数则到下一页
            type: Number,
            default: 6,
        },
        pageIndex: { // 当前页码。从0开始计
            type: Number,
            default: 0,
        }
    },
    data () {
        return {}
    },
    methods: {
        clickPagination(index){ // 翻页并回到顶部
            this.$emit("switchpagination", index);
            setTimeout(function(){
                window.scrollTo( 0, 0 );
            }, 200);
        },
    },
}
</script>

<style scoped lang="scss">

// @import '../scss/basic.scss';
@import '../scss/common.scss';

.pagination_wrapper{
    text-align: center;
    .pagination{
        margin-top: 90px;
        display: inline-block;
        li{
            border: 1px solid gray;
            width: 34px;
            line-height: 34px; height:34px;
            box-sizing: border-box;
            text-align: center;
            border-radius: 5px;
            cursor: pointer;
            float: left;
            margin-right: 10px;
        }
        .currentLi{
            border: none;
        }
    }
}

</style>
