<template>
  <div id="app" class="app">
    <keep-alive><router-view></router-view></keep-alive>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/">发现</van-tabbar-item>
      <van-tabbar-item icon="play-circle-o" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="music-o" to="/my">我的</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/friend">朋友</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/account">账号</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
  name: 'app',
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem
  },
  data() {
    return {
      active: 0
    }
  },
}
</script>
<style lang="less">
.app{
  .van-tabbar--fixed{
    height:1.3rem;
    .van-icon {
        font-size: 0.56rem;
      }
    }
    .van-tabbar-item--active{
      color:rgba(red,0.7);
    }
}
</style>
