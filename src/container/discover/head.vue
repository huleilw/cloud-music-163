<template>
    <div class="head">
        <span class="head-item">语音识别</span>
        <span class="head-item"
        @click="goToSearch"
        >
            <van-search placeholder="请输入" 
            v-model="value" 
            shape="round"
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
        height:1rem;
        line-height: 1rem;
        text-align: center;
        .head-item{
            font-size: 0.36rem;
            .van-search{
                padding:0.1rem 0 0 0;
                .van-search__content{
                    height: 0.8rem;
                    background-color: rgba(#ccc,0.5);
                }
            }
        }
    }
</style>
