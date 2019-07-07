<template>
    <div class="search">
        <div class="search-header">
            <span class="search-header-input">
                <form action="/">
                    <van-search
                        v-model="value"
                        placeholder="请输入搜索关键词"
                        show-action
                        @search="onSearch"
                        @cancel="onCancel"
                    />
                </form>
            </span>
            <span class="search-header-user">
                <van-icon name="contact" class="user-icon"/>
            </span>
        </div>
        <div class="search-hot">
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

const {searchHot} = musicIndex
export default {
    name:'Search',
    data() {
        return {
            value:'',
            hotSongList:[]
        }
    },
    mounted() {
        this.getHotList()
    },
    methods: {
        getHotList(){
            this.axios.get(searchHot).then(resp=>{
                this.hotSongList = resp.data.result.hots
            })
        },
        onSearch(){

        },
        onCancel(){}
    },
}
</script>
<style lang="less">
.search{
    .search-header{
        display:grid;
        grid-template-columns: auto 20%;
        height:50px;
        line-height: 50px;
        .search-header-user{
            text-align: center;
            .user-icon{
                margin-top:14px;
            }
        }
    }
    .search-hot{
        padding:0 14px;
        .search-hot-title{
            font-size: 14px;
            padding:10px 0;
            font-weight: 600;
        }
        .search-hot-list{
            font-size: 14px;
            .hot-item{
                padding:10px 0;
                .hot-item-rank{
                    font-style: normal;
                    padding-right: 4px;
                }
            }
        }
    }
}
</style>
