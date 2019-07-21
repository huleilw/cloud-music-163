<template>
    <div class="discover">
        <Head></Head>
        <swipe></swipe>
        <head-nav-bar></head-nav-bar>
        <recommend-music></recommend-music>
    </div>
</template>

<script>
import Head from '@/container/discover/head'
import Swipe from '@/container/discover/swipe'
import HeadNavBar from '@/container/discover/head-nav-bar'
import RecommendMusic from '@/container/discover/recommend-music'
    export default {
        name:"Discover",
        components:{
            Head,
            Swipe,
            HeadNavBar,
            RecommendMusic
        }
    }
</script>

<style lang="less" >

</style>