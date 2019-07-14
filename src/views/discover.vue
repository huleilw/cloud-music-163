<template>
    <div class="discover">
        <Head></Head>
        <swipe></swipe>
        <head-nav-bar></head-nav-bar>
    </div>
</template>

<script>
import Head from '@/container/discover/head'
import Swipe from '@/container/discover/swipe'
import HeadNavBar from '@/container/discover/head-nav-bar'

    export default {
        name:"Discover",
        components:{
            Head,
            Swipe,
            HeadNavBar
        }
    }
</script>

<style lang="less" >

</style>