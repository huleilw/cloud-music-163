<template>
    <div class="play-index">
        <play-head></play-head>
        <play-container></play-container>
        <play-bottom></play-bottom>
    </div>
</template>
<script>
import PlayHead from './play-head'
import PlayContainer from './play-container'
import PlayBottom from './play-bottom'

    export default {
        name:'PlayIndex',
        components:{
           PlayHead,
           PlayContainer,
           PlayBottom
        }
    }
</script>

<style lang="less" >
</style>