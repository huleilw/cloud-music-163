import Vue from 'vue'
import Vuex from 'vuex'

import playMusicState from './playMusic/state'
import playMusicMutations from './playMusic/mutations'
import playMusicActions from './playMusic/actions'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        ...playMusicState
    },
    mutations: {
        ...playMusicMutations
    },
    actions: {
        ...playMusicActions
    }
})
