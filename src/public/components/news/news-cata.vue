<!-- news模块的分类按钮
该模块和workss-cata模块类似 -->
<template>
    <ul class="news_cata" v-if="catas_ch">
        <li :class="{active_cata: index===cataIndex}"
                 v-for="(item,index) in catas_ch"
                @click="clickCata(index)">{{item}}</li>
    </ul>
</template>

<script>

export default {
    // catas_ch 是news分类的中文名数组。如果news没有分类，传空数组
    // cataIndex 是当前要显示的某一类的index
    props: ["catas_ch", "cataIndex"],
    data () {
        return {};
    },
    methods: {
        clickCata(index){ // 点击news分类菜单，发送该分类的index
            this.$emit("switchcata", index);
        },
    },
}
</script>

<style scoped lang="scss">

@import '../../scss/common.scss';

.news_cata{
    height: 22px;
    font-size: 12px;
    margin-top: 16px;
    .active_cata{
        color: $STANDARD_COLOR;
    }
    li{
        height: 22px;
        float: left;
        margin-right: 30px;
        cursor: pointer;
    }
}

</style>
