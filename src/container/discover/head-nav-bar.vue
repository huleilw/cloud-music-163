<template>
    <div class="head-nav-bar">
        <ul class="head-bar-item"
            v-for="(item,index) in navBarList" :key="index"
        >
            <van-icon :name="item.icon"/>
            <li>{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'HeadNavBar',
        data() {
            return {
                navBarList: [
                   {
                       icon:'calender-o',
                       name:'每日推荐'
                   },
                   {
                       icon:'music-o',
                       name:'歌单'
                   },
                   {
                       icon:'bar-chart-o',
                       name:'排行榜'
                   },
                   {
                       icon:'live',
                       name:'电台'
                   },
                   {
                       icon:'browsing-history-o',
                       name:'直播'
                   }
                ]
            }
        },
       
    }
</script>

<style lang="less" >
.head-nav-bar{
    display: grid;
    grid-template-columns: repeat(5, 20%);
    border-bottom:1px solid	#DCDCDC;
    .head-bar-item{
        font-size:0.16rem;
        text-align: center;
        height:1.8rem;
        margin-top:0.3rem;
        .van-icon{
            font-size:0.6rem;
            color: white;
            background: rgba(red,0.8);
            border-radius: 50%;
            width: 0.8rem;
            height: 0.8rem;
            text-align: center;
            line-height: 0.8rem;
            margin-bottom: 0.3rem;
        }
    }
}
</style>