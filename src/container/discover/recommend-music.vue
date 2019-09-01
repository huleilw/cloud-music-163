<template>
    <div class="recommend-music">
        <div class="recommend-music-head">
            <h4 class="head-title-left">推荐歌单</h4>
            <span class="head-title-right"><i class="right-title-name">歌单广场</i></span>
        </div>
        <van-row class="recommend-music-list">
            <van-col span="8" 
                class="recommend-music-item"
                v-for="item in recommendMusicList"
                :key="item.id"
            >
                <div class="item-image-box">
                    <van-image
                        class="item-image"
                        fit="cover"
                        :src="item.picUrl"
                        @click="goToMusicList(item)"
                    />
                    <i class="image-play-icon">
                        <van-icon name="play-circle-o" />
                       {{Math.ceil(item.playCount/10000)}}万
                    </i>
                </div>
                <p class="item-name" v-clamp>{{item.name}}</p>
            </van-col> 
        </van-row>
    </div>
</template>

<script>
import Vclamp from '@/mixins/v-clamp'
import {musicIndex} from '@/const/api'
import {MUSIC_LIST} from '@/const/path'
import { mapActions } from 'vuex';

const {recommendMusic} = musicIndex

    export default {
        name:'RecommendMusic',
        mixins:[Vclamp],
        data() {
            return {
                recommendMusicList:[]
            }
        },
        mounted() {
            this.getRecommendMusic()
        },
        methods: {
            ...mapActions(['fetchRecommendMusic']),
            getRecommendMusic() {
                this.fetchRecommendMusic().then(data=>{
                    this.recommendMusicList = data
                })
            },
            goToMusicList(item){
                const {id,name,picUrl,playCount} = {...item}
                this.$router.push({
                    path:MUSIC_LIST,
                    query:{id,name,picUrl,playCount}
                })
            }
        },
    }
</script>

<style lang="less" >
.recommend-music{
    .recommend-music-head{
        height:1rem;
        line-height: 1rem;
        padding:0 0.2rem;
        .head-title-left{
            float: left;
            font-size:0.4rem;
            font-weight: 600;
        }
        .head-title-right{
            float: right;
            font-size:0.2rem;
            .right-title-name{
                font-style: normal;
                border:1px solid #ccc;
                padding:0.08rem 0.28rem;
                border-radius: 0.5rem 0.5rem;
            }
        }
    }
    .recommend-music-list{
        display: grid;
        grid-template-columns: repeat(3, 33.33%);
        padding:0 0 0 0.4rem;
        .recommend-music-item{
            padding-bottom:0.26rem;
            .item-image-box{
                position: relative;
                .image-play-icon{
                    width:2rem;
                    position: absolute;
                    color:#fff;
                    font-style: normal;
                    font-size:0.3rem;
                    top:0.1rem;
                    left:1.4rem;
                }
            }
            .item-image{
                width:2.8rem;
                height:2.8rem;
                .van-image__img{
                    border-radius: 0.16rem;
                }   
            }
            .item-name{
                text-align: left;
                width:3rem;
                font-size: 0.12rem;
                line-height: 0.32rem;
            }
        }
    }
}
</style>