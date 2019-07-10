<template>
    <div class="head">
        <span class="head-item">语音识别</span>
        <span class="head-item"
        @click="goToSearch"
        >
            <van-search placeholder="请输入搜索关键词" 
            v-model="value" 
            class="head-item-search"
            />
        </span>
        <span class="head-item">播放</span>
    </div>
</template>
<script>
import {GO_TO_SEARCH} from '@/const/path'

export default {
    name:"Head",
   
    data() {
        return {
            value:''
        }
    },
    methods: {
       goToSearch(){
           this.$router.push({path:GO_TO_SEARCH})
       }
    },
}
</script>
<style lang="less">
    .head{
        display:grid;
        grid-template-columns: 20% auto 20%;
        height:40px;
        line-height: 40px;
        text-align: center;
        .head-item{
            font-size: 14px;
            .head-item-search{
                padding:0;
                margin-top:6px;
                height:28px;
                .van-search__content{
                     background:rgba(#ccc,0.4);
                     border-radius: 15px 15px;
                }
            }
        }
    }
</style>
