<template>
    <li @click="clickPagination(pageIndex)">{{pageIndex+1}}</li>
</template>

<script>

// import {fetchJSON} from '../myUtil.js';

export default {
    props: ["pageIndex"],
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

</style>
