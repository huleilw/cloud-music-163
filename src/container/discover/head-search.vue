<template>
    <div class="search">
        <div class="search-header">
            <span class="search-header-input">
                <form action="/">
                    <van-search
                        v-model="value"
                        placeholder="请输入搜索关键词"
                        show-action
                        shape="round"
                        @search="onSearch"
                        @cancel="onCancel"
                    />
                </form>
            </span>
            <span class="search-header-user">
                <van-icon name="contact" class="user-icon"/>
            </span>
        </div>
        <div class="relate-music-box" v-if="value">
            <p class="relate-search">搜索：'{{value}}'</p>
            <!-- <ul class="relate-music-list">
                <li class="relate-music-item">
                    <van-icon name="search" />
                    <span>nn</span>
                </li>
            </ul> -->
        </div>
        <div class="search-hot" v-if="!value">
            <h1 class="search-hot-title">热搜榜</h1>
            <ol class="search-hot-list">
                <li class="hot-item" 
                v-for="(item,index) in hotSongList"
                :key="index"
                >
                    <i class="hot-item-rank">{{index+1}}</i>
                {{item.first}}</li>
            </ol>
        </div>
    </div>
</template>
<script>
import {musicIndex} from '@/const/api'
import {DISCOVER} from '@/const/path'
const {searchHot,relateMusic} = musicIndex
export default {
    name:'Search',
    data() {
        return {
            value:'',
            hotSongList:[]
        }
    },
    watch: {
        value:{
            handler(val){
                if(val){
                    //this.getRelateMusicList(val)
                }
            }
        }
    },
    mounted() {
        this.getHotList()
        this.getRelateMusicList()
    },
    methods: {
        getHotList(){
            this.axios.get(searchHot).then(resp=>{
                this.hotSongList = resp.data.result.hots
            })
        },
        onSearch(){

        },
        getRelateMusicList(val){
            this.axios.get(relateMusic(val)).then(resp=>{
                console.log(resp);
            })
        },
        onCancel(){
            this.$router.push({path:DISCOVER})
        }
    },
}
</script>
<style lang="less">
.search{
    .search-header{
        display:grid;
        grid-template-columns: auto 20%;
        height:1.2rem;
        line-height: 1.2rem;
        .search-header-user{
            text-align: center;
            .user-icon{
                margin-top:0.4rem;
            }
        }
    }
    .relate-music-box{
        padding: 0 0.6rem;
        .relate-search,.relate-music-item{
            font-size:0.3rem;
            color:#4169E1;
            height:1rem;
            line-height:1rem;
            border-bottom:1px solid	#DCDCDC;
        }
        .relate-music-item{
            color:black;
            .van-icon{
                font-size:0.4rem;
                color:#BEBEBE;
            }
        }
    }
    .search-hot{
        padding:0 0.6rem;
        .search-hot-title{
            font-size: 0.28rem;
            padding:0.26rem 0;
            font-weight: 600;
        }
        .search-hot-list{
            font-size: 0.28rem;
            .hot-item{
                padding:0.26rem 0;
                .hot-item-rank{
                    font-style: normal;
                    padding-right: 0.12rem;
                }
            }
        }
    }
}
</style>
