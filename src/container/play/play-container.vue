<template>
    <div class="play-container">
        <div class="play-box">
            <div class="play-image">
                <div class="cd">
                    <img src="@/assets/img/cd.png">
                    <div class="singerbg" >
                        <img >
                    </div>
                </div>
                <div class="swith" >
                    <img src="@/assets/img/swith.png">
                </div>
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
        <div class="lyric">
            
        </div>
        
    </div>
</template>

<script>
    export default {
        name:"PlayContainer",
    }
</script>

<style lang="less">
.play-container{
    .play-box{
        .play-image{
            position: relative;
            overflow: hidden;
            padding:2rem 0;
            .cd{
               margin:auto;
                width:80%;
                position: relative;
                img{
                    width:100%;
                    display: block;
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
                        margin-top:0.05rem;
                    }
                }
            }
        }
    }
}
</style>