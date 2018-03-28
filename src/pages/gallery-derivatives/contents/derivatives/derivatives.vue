<template>
    <works-page :works="allData.derivatives" :title="'衍生品'"></works-page>
</template>

<script>
import worksPage from '../../../../public/components/works/works.vue';
export default {
    props: ['allData'],
    data () {
        return {
        }
    },
    components: {
        worksPage,
    },

}
</script>

<style scoped lang="scss">

@import "../../../../public/scss/common.scss";
</style>
