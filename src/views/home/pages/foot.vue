<template>
    <div class="foot">
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">发现</van-tabbar-item>
            <van-tabbar-item icon="play-circle-o">视频</van-tabbar-item>
            <van-tabbar-item icon="music-o">我的</van-tabbar-item>
            <van-tabbar-item icon="friends-o">朋友</van-tabbar-item>
            <van-tabbar-item icon="contact">账号</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';

export default {
    name:"Foot",
    components:{
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem
    },
    data() {
        return {
            active:0
        }
    },
}
</script>

