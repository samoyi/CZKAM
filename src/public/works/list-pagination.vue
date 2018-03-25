<template>
    <!-- <li @click="clickPagination(pageIndex)">{{pageIndex+1}}</li> -->
    <div class="pagination_wrapper" v-if="pageNum>1">
        <!-- <ul v-if="list.length>perPage" class="pagination"> -->
        <ul class="pagination">
            <!-- <list-pagination v-for="n in pageNum" :page-index="n-1"
                    :class="{ currentLi:nPageIndex===n-1}"
                    @switchpagination="switchpage">
            </list-pagination> -->
            <li  v-for="n in pageNum" :class="{ currentLi:pageIndex===n-1}"
                    @click="clickPagination(n-1)">{{n}}</li>
        </ul>
    </div>
</template>

<script>

// import {fetchJSON} from '../myUtil.js';

export default {
    props: ["pageNum", "perPage", "list", "pageIndex"],
    // props: ["pageIndex"],
    data () {
        return {

        }
    },
    methods: {
        clickPagination(index){
            this.$emit("switchpagination", index);
            setTimeout(function(){
                window.scrollTo( 0, 0 );
            }, 200);
        },
    },
}
</script>

<style scoped lang="scss">

@import '../basic.scss';
@import '../common.scss';

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
