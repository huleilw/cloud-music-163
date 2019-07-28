<template>
    <div class="play-container">
        <span >
            <audio :src="songUrl" ref="audio" autoplay class="audio" @timeupdate="play"></audio>
        </span>
        <div class="play-box">
            <div class="play-image" v-if="!isShowLyric" @click="showLyric">
                <div class="cd">
                    <img src="@/assets/img/cd.png">
                    <div class="singerbg" :class="{cur:isPlay}">
                        <img :src="albumImg" >
                    </div>
                </div>
                <div class="swith" :class="{cur:isPlay}">
                    <img src="@/assets/img/swith.png">
                </div>
            </div>
            <div class="lyric" v-if="isShowLyric" @click="hiddenLyric">
                <ul>
                    <li v-for="(item,index) in lyricData" :key="index"></li>
                </ul>
            </div>
            <div class="set-icon-box">
                <ul class="icon-list">
                    <li class="icon-item"><van-icon name="like-o" /></li>
                    <li class="icon-item-download" style="transform:rotate(180deg)"><van-icon name="upgrade" /></li>
                    <li class="icon-item"><van-icon name="fire-o" /></li>
                    <li class="icon-item"><van-icon name="chat-o" /></li>
                    <li class="icon-item-more" style="transform:rotate(90deg)"><van-icon name="ellipsis" /></li>
                </ul>
            </div>
        </div>
        <div class="play-bottom">
            <div class="progressBar">
                <p class="start">{{currentTime | formatterDate}}</p>
                <p class="range">
                    <span class="duration">
                        <span 
                        class="currentTime" 
                        :style="{width:currentTime / duration * 100+'%'}"
                        ></span>
                    </span>
                </p>
                <p class="end">{{duration | formatterDate }}</p>
            </div>
            <div class="controller">
                <p class="playModeBtn " @click="changePlayState"
                >
                <van-icon name="replay" v-if="playState==='all'" />
                <van-icon name="info-o"  v-if="playState === 'once'"/>
                <van-icon name="exchange" v-if="playState === 'random'" />
                </p>
                <ul>
                    <li class=""><van-icon name="arrow-left" /></li>
                    <li class="" @click="pause_play"  
                    >
                    <van-icon :name="[isPlay?'pause-circle-o':'play-circle-o'].toString()" />
                    </li>
                    <li class=""><van-icon name="arrow" /></li>
                </ul>
                
                <p class="playListBtn " @click="isShowPlayListBtn">
                    <van-icon name="bars" />
                </p>
                <van-popup
                    v-model="show"
                    round
                    position="bottom"
                    :style="{ height: '40%' }"
                >
                <span class="cancel" @click="hiddenPopup">取消</span>
                </van-popup>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {Popup } from 'vant'
    export default {
        name:"PlayContainer",
        components:{
            [Popup.name]:Popup
        },
        data() {
            return {
                isShowPlayList: false,
                isPlay:true,
                playState:'all',
                show:false,
                datalist:[],
                songUrl:'',
                albumImg:'',
                duration:0,     //歌曲的总时长
                currentTime:0,  //当前播放时间
                isShowLyric:false,
                lyricData:[]
            }
        },
        filters:{
            formatterDate(date){
                 let time;
                if(date > -1){
                    var min = Math.floor(date/60) % 60;
                    var sec = date % 60

                    if(min < 10){time += "0"}
                    time = min + ":"
                    if(sec < 10){time += "0"}
                    time += ~~sec
                }
                return time
            }
        },
        computed: {
            ...mapState(['songSheetId']),
        },
        async mounted() {
            const data = await this.fetchPlaylistDetail(this.songSheetId)
            this.datalist = data
            this.albumImg = data[0].al.picUrl
            if (this.datalist) {
                this.getMusicData()
            }
        },
        methods: {
            ...mapActions(['fetchPlaylistDetail','fetchMusic','fetchLyric']),
            getMusicData() {
                const musicId = this.datalist.map(item=>item.id)
                this.fetchMusic(musicId).then(data=>{
                    this.songUrl = data[0].url
                }).catch(e=>{
                    console.error(e)
                })
                this.fetchLyric(musicId[0]).then(data=>{
                    this.lyricData = data.lyric
                })
            },
            play(){
                const audio = this.$refs.audio
                this.$nextTick(()=>{
                    this.duration = audio.duration;            //获取音频的总时长
                    this.currentTime = audio.currentTime;     //获取音频的当前播放时间
                })
            },
             changePlayState() {
                 //点击切换播放模式
                if(this.playState === 'all'){
                    this.playState = 'random';
                }else if(this.playState === 'random'){
                    this.playState = 'once';
                }else if(this.playState === 'once'){
                    this.playState = 'all';
                }
            },
            pause_play(){
                this.isPlay = !this.isPlay
                this.$nextTick(()=>{
                    const audio = this.$refs.audio
                    this.isPlay ? audio.play() : audio.pause()
                })
            },
            isShowPlayListBtn(){
                this.show = true
            },
            hiddenPopup(){
                this.show = false
            },
            showLyric(){
                this.isShowLyric = true
            },
            hiddenLyric(){
                this.isShowLyric = false
            }
        },
    }
</script>

<style lang="less">
.play-container{
    background: #ccc;
    z-index: 2;
    position: relative;
    bottom:0px;
    .play-box{
        .play-image{
            position: relative;
            overflow: hidden;
            padding:2rem 0 1.4rem 0;
            .cd{
               margin:auto;
                width:80%;
                position: relative;
                img{
                    width:100%;
                    display: block;
                } 
                .singerbg{
                    width: 60%;border-radius:50%;overflow: hidden;
                    position: absolute;top:50%;left:50%;transform:translate(-50%,-50%);
                    transition:all 1s;
                    animation:rotate 8s linear infinite;
                    animation-play-state:paused;
                }
                .singerbg.cur{animation-play-state:running;}
                @keyframes rotate{
                    from{transform:translate(-50%, -50%) rotate(0deg);}
                    to{transform:translate(-50%, -50%) rotate(360deg);}
                }  
            }
            .swith{
                width:26%;
                position: absolute;
                top:-0.08rem;
                left:58%;
                transform:translateX(-50%) rotate(-30deg);
                transform-origin:15px 15px;transition:all 0.8s;
                img{
                    width:100%;
                    display:block;
                }
            }
            .swith.cur{transform:translateX(-50%) rotate(0deg);}
        }
        .lyric{
            height:11.4rem;
        }
        .set-icon-box{
            height:1.4rem;
            line-height: 1.4rem;
            .icon-list{
                display:grid;
                grid-template-columns: repeat(5,20%);
                text-align:center;
                .icon-item-download{
                    .van-icon{
                       top:0.12rem;
                    }
                }
            }
        }
    }
    .play-bottom{
        .progressBar{
            overflow: hidden;
            padding:0.6rem 3%;
            font-size:0.12rem;
            color:rgba(255,255,255,0.6);
            p{float: left;}
            p.start{
                width: 12%;
                height: 1.2rem;
                line-height: 1.2rem;
                text-align:right;}
            p.end{
                width: 12%;
                height: 1.2rem;
                line-height: 1.2rem;
                text-align:left;}
            p.range{
                width: 70%;
                padding:0 3%;
                margin:0.6rem auto;
                span.duration{
                    width: 100%;
                    height: 0.053rem;
                    display: block;
                    background:rgba(255,255,255,0.5);
                    position: relative;
                    span.currentTime{
                        width: 0;
                        height: 0.053rem;
                        position: absolute;
                        top:0;
                        left:0;
                        background: #c20c02;
                    }
                }
            }
        }
        .controller{
            position: relative;text-align:center;line-height: 1.33rem;height: 1.33rem;
            color:rgba(255, 255, 255, 0.6);
            p{position: absolute;top:0;font-size:0.8rem;}
            p.playModeBtn{left:3%;}
            p.playListBtn{right:3%;}
            ul{overflow: hidden; width: 68%;margin:0 auto;
                li{float: left;width: 33.333%;font-size:1.07rem;}
                li.icon-bofang, li.icon-pause-20{font-size:1.33rem;}
            }
        }
        .cancel{
            color:#000;
            position: relative;
            font-size: 0.4rem;
            bottom:-5.6rem;
        }
    }
}
</style>