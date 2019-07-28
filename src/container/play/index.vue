<template>
    <div class="play-index">
        <play-head></play-head>
        <play-container></play-container>
    </div>
</template>
<script>
import PlayHead from './play-head'
import PlayContainer from './play-container'

    export default {
        name:'PlayIndex',
        components:{
           PlayHead,
           PlayContainer
        }
    }
</script>

<style lang="less" >
</style>