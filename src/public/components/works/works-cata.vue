<!-- works模块的分类按钮
该模块和news-cata模块类似 -->
<template>
    <ul class="works_cata" v-if="catas_ch">
        <li :class="{active_cata: index===cataIndex}"
                 v-for="(item,index) in catas_ch"
                @click="clickCata(index)">{{item}}</li>
    </ul>
</template>

<script>

export default {
    // catas_ch 是作品分类的中文名数组。如果作品没有分类，传空数组
    // cataIndex 是当前要显示的某一类的index
    props: ["catas_ch", "cataIndex"],
    data () {
        return {};
    },
    methods: {
        clickCata(index){ // 点击作品分类菜单，发送该分类的index
            this.$emit("switchcata", index);
        },
    },
}
</script>

<style scoped lang="scss">

@import '../../scss/common.scss';

.works_cata{
    font-size: 12px;
    height: 22px;
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
