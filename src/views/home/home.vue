<template>
    <div class="home">
        <home-head></home-head>
        <swipe></swipe>
        <foot></foot>
    </div>
</template>
<script>
import HomeHead from './pages/head'
import Swipe from './pages/swipe'
import Foot from './pages/foot'
export default {
    name:"Home",
    components:{
        HomeHead,
        Swipe,
        Foot
    }
}
</script>