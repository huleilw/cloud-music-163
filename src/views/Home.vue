<template>
    <div class="home">
        <van-button type="primary">主要按钮</van-button>
    </div>
</template>
<script>
import {Button } from 'vant'
export default {
components:{
    [Button.name]:Button
}
}
</script>
<style lang="less">
.home{
    font-size: 0.5rem;
}
</style>
