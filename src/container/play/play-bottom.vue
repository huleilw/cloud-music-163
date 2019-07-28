<template>
    <div class="play-bottom">
        <div class="progressBar">
            <p class="start">00</p>
            <p class="range">
                <span class="duration"><span class="currentTime"></span></span>
            </p>
            <p class="end">00</p>
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
                <van-icon :name="[isPlay?'pause-circle-o':'play-circle-o']" />
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
</template>

<script>
import {mapState,mapActions} from 'vuex'
import {Popup } from 'vant'
    export default {
        name:"PlayBottom",
        components:{
            [Popup.name]:Popup
        },
        data() {
            return {
              isPlay:true,
              playState:'all',
              show:false,
              datalist:[]
            }
        },
        computed: {
            ...mapState(['songSheetId']),
        },
        async mounted() {
            const data = await this.fetchPlaylistDetail(this.songSheetId)
            this.datalist = data
        },
        methods: {
            ...mapActions(['fetchPlaylistDetail','fetchMusic']),
            changePlayState() {
                 
                const id = this.datalist.map(item=>item.id).toString()
                this.fetchMusic(id).then(resp=>{
                    console.log(resp);
                })
                console.log(id);
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
                    console.log(this.$refs.audio)
                })
            },
            isShowPlayListBtn(){
                this.show = true
            },
            hiddenPopup(){
                this.show = false
            }
        },
    }
</script>

<style lang="less" >
.play-bottom{
    background: #ccc;
    z-index: 2;
    position: relative;
    bottom:0px;
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
                    width: 10%;
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
</style>