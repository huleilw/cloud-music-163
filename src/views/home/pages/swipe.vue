<template>
    <div class="swipe">
        <van-swipe :autoplay="3000" indicator-color="white" class="swipe-image">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import { Swipe, SwipeItem } from 'vant';
export default {
    name:"Swipe",
    components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
       
    },
    data() {
    return {
    }
  }
}
</script>
<style lang="less">
.swipe{
    .swipe-image{
        width:100%;
        height:120px;
        background: green;
        .van-swipe{
            height:120px;
            .van-swipe__indicators{
                bottom:12px;
            }
        }
    }
    
}
</style>
