import {musicIndex,playInfo} from '@/const/api'
import Vue from 'vue'
const { recommendMusic} = musicIndex
const { playlistDetail, songUrl, lyric} = playInfo

export default {
    async fetchRecommendMusic({commit}){
        let resp = await Vue.axios.get(recommendMusic)
        const data = resp.data.result
        commit('updateSongList',data)
        return data
    },
    async fetchPlaylistDetail({commit},id){
        let resp = await Vue.axios.get(playlistDetail(id))
        const data = resp.data.playlist.tracks
        commit('updatePlaylistDetail',data)
        return data
    },
    async fetchMusic({commit},id){
        let resp = await Vue.axios.get(songUrl(id))
        const data = resp.data.data
        return data
    },
    async fetchLyric({commit},id){
        let resp = await Vue.axios.get(lyric(id))
        return resp.data.lrc
    }
}