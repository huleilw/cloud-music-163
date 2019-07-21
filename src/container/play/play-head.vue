<template>
    <div class="play-index">
        <header class="play-head">
            <span @click="goBack" class="head-back-index"><van-icon name="arrow-left" /></span>
            <span class="head-music-name">
                <van-notice-bar
                :delay="delay"
                class="music-name-detail"
            >
                通知内容通知内容通知内容通知内容通知内容通知内容
                </van-notice-bar>
                <i class="music-singer" @click="goSingerDetail">李现<van-icon name="arrow" /></i>
            </span>
            <span class="head-share-icon" @click="showPopup">
                <van-icon name="share" />
            </span>
            <van-popup
                v-model="show"
                round
                position="bottom"
                :overlay="false"
                :style="{ height: '40%' }"
            />
        </header>
    </div>
</template>
<script>
import { NoticeBar,Popup } from 'vant'
    export default {
        name:'PlayIndex',
        components:{
            [NoticeBar.name]:NoticeBar,
            [Popup.name]:Popup
        },
        data() {
            return {
                delay: 2,
                show:false
            }
        },
        methods: {
            goBack() {
                this.$router.push({path:'/'})
            },
            goSingerDetail(){

            },
            showPopup(){
                this.show = true
            }
        },
    }
</script>

<style lang="less" >
.play-index{
    .play-head{
        height:1.2rem;
        display:grid;
        grid-template-columns: 10% auto 10%;
        line-height: 1.2rem;
        color:#ccc;
        text-align: center;
        .head-music-name{
            display:grid;
            grid-template-rows:80% 20%;
            .music-name-detail{
                background: #fff;
                color:#ccc;
            }
            .music-singer{
                font-style: normal;
                font-size:0.12rem;
                margin-top:-0.76rem;
                z-index: 1;
            }
        }
        
    }
}
</style>