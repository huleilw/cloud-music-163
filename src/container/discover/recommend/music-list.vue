<template>
  <div class="music-list">
    <div class="head-box">
      <van-nav-bar
        title="歌单"
        right-text="播放"
        left-arrow
        @click-left="goBack"
        @click-right="goToPlay"
      />
      <div class="music-desc-box">
        <div class="info-box">
          <div class="left">
            <van-image
              class="left-image"
              fit="cover"
              :src="musicDesc.picUrl"
            />
            <i class="image-play-icon">
              <van-icon name="play-circle-o" />
              {{Math.ceil(musicDesc.playCount/10000)}}万
            </i>
          </div>
          <div class="right">
            <p class="right-text right-top">{{musicDesc.name}}</p>
            <div class="right-middle-box">
              <van-icon name="music-o"  class="music-icon"/>
              <p class="text">网易云音乐></p>
            </div>
            <div class="right-bottom-box">
              <p v-clamp class="bottom-text">临近开学的那几天我们的内心戏总是格外多"数学作业有几页实在来不及做了"</p>
              <van-icon name="arrow" class="arrow-icon" />
            </div>
          </div>
        </div>
        <div class="edit-box">
          <van-tabbar>
            <van-tabbar-item icon="chat-o">590</van-tabbar-item>
            <van-tabbar-item icon="share">100</van-tabbar-item>
            <van-tabbar-item icon="upgrade" class="download">下载</van-tabbar-item>
            <van-tabbar-item icon="certificate">多选</van-tabbar-item>
          </van-tabbar>
        </div>
      </div>
    </div>
    <div class="music-container">

    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';

import Vclamp from '@/mixins/v-clamp'
import {GO_TO_PLAy} from '@/const/path'
  export default {
    components:{
      [Tabbar.name]:Tabbar,
      [TabbarItem.name]:TabbarItem
    },
    mixins:[Vclamp],
    data() {
      return {
        
      }
    },
    computed: {
      musicDesc(){
        const {id,name,picUrl,playCount} = this.$route.query
        return {
          id,
          name,
          picUrl,
          playCount
        }
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      },
    goToPlay() {
     this.$router.push(GO_TO_PLAy)
      }
    },
  }
</script>

<style lang="less" >
.music-list{
  .music-desc-box{
    .info-box{
      display: grid;
      grid-template-columns: 36% 64%;
      .left{
        position: relative;
        .left-image{
          width: 3rem;
          height: 3rem;
          padding:0.26rem;
          .van-image__img{
            border-radius: 0.16rem;
          } 
        }
        .image-play-icon{
          position: absolute;
          font-size: 0.24rem;
          color: #fff;
          width: 2rem;
          font-style: normal;
          font-size:0.3rem;
          top:0.34rem;
          left:1.8rem;
        }
      }
      .right{
        padding:0.24rem;
        font-size:0.36rem;
        .right-top{
          font-size: 0.46rem;
        }
        .right-middle-box{
          display: grid;
          grid-template-columns: 15% 85%;
          padding: 0.34rem 0;
          .music-icon{
            font-size: 0.6rem;
          }
          .text{
            line-height: 0.6rem;
          }
        }
        .right-bottom-box{
          display: grid;
          grid-template-columns: 90% 10%;
          .arrow-icon{
            text-align: center;
            line-height: 0.76rem;
          }
        }
      }
    }
  }
  .head-box{
    .edit-box{
      .van-tabbar-item--active{
        color: #7D7E80;
      }
      .van-tabbar--fixed{
        position: relative;
      }
      .download{
        .van-tabbar-item__icon{
          transform:rotate(180deg);
        }
      }
    }
  }
}
</style>