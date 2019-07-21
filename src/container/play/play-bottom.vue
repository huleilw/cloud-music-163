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
            </p>
            <ul>
                <li class=""></li>
                <li class="" @click="pause_play"
                    
                >
                </li>
                <li class=""></li>
            </ul>
            <p class="playListBtn " @click="isShowPlayListBtn"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name:"PlayBottom",
        data() {
            return {
              
            }
        },
        methods: {
            changePlayState() {
                
            },
            pause_play(){

            },
            isShowPlayListBtn(){

            }
        },
    }
</script>

<style lang="less" >
.play-bottom{
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
            width: 76%;
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
}
</style>