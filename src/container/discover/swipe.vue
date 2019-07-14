<template>
    <div class="swipe">
        <van-swipe :autoplay="3000" 
        indicator-color="red" 
        class="swipe-image"
        >
            <van-swipe-item 
            v-for="(item,index) in imagList" 
            :key="index"
            @click="bannerDetail"
            >
                <van-image :src="item.pic" />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
import { Swipe, SwipeItem,Image } from 'vant';

import {musicIndex} from '@/const/api';
import {BANNER_DETAIL} from '@/const/path'

const {bannerImag} = musicIndex
export default {
    name:"Swipe",
    components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        [Image.name]:Image
    },
    data() {
    return {
        imagList:[]
    }
  },
  mounted () {
      this.getBannerImag()
  },
  methods: {
      getBannerImag() {
          this.axios.get(bannerImag(2)).then(resp=>{
              this.imagList = resp.data.banners
          })
      },
      bannerDetail(){
          this.$router.push({path:BANNER_DETAIL})
      }
  },
}
</script>
<style lang="less">
.swipe{
    .swipe-image{
        width:94%;
        height:3.6rem;
        margin: 0.26rem;
        border-radius: 0.18rem 0.18rem;
        .van-swipe{
            width:100%;
            height:100%;
        }
        .van-swipe__indicator{
            width:0.16rem;
            height:0.16rem;
            bottom:0.12rem;
        }
    }
    
}
</style>
