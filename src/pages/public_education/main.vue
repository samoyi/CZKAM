<template>
    <div id="wrapper">
        <img src="../../assets/logo.png">
        <h1>This is {{curPage}}</h1>
        <h1>To <a :href="linkTo">{{ linkTo }}</a></h1>
    </div>
</template>

<script>
export default {
    data () {
        return {
            curPage: 'home.html',
            linkTo: 'test.html'
        }
    }
}
</script>

<style lang="scss">

</style>
