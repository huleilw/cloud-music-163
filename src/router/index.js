import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import HeadSearch from '@/views/home/pages/head-search'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path:'/pages/head-search.vue',
        name:'HeadSearch',
        component: HeadSearch
    }
    ]
})