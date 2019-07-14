import Vue from 'vue'
import Router from 'vue-router'
import HeadSearch from '@/container/discover/head-search'
import BannerDetail from '@/container/discover/banner-detail'
import Discover from '@/views/discover'
import Video from '@/views/video'
import Friend from '@/views/friend'
import My from '@/views/my'
import Account from '@/views/account'

Vue.use(Router)

export default new Router({
    // mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Discover',
            component: Discover
        },
        {
            path: '/video',
            name: 'Video',
            component: Video
        },
        {
            path: '/friend',
            name: 'Friend',
            component: Friend
        },
        {
            path: '/my',
            name: 'My',
            component: My
        },
        {
            path: '/account',
            name: 'Account',
            component: Account
        },
        {
            path: '/discover/head-search',
            name: 'HeadSearch',
            component: HeadSearch
        },
        {
            path: '/discover/banner-detail',
            name: 'BannerDetail',
            component: BannerDetail
        },
    ]
})