// import Vue from 'vue'

export default {
    setAudioStatus ({ commit }, value) {
        commit('playerStatus', value)
        commit('audioStatus', value)
    },
    setPlayer ({ commit }, player) {
        commit('player', player)
    },
    setCanvas ({ commit }, canvas) {
        commit('canvas', canvas)
    },
    setCurrentTime ({ commit }, currentTime) {
        commit('currentTime', currentTime)
    }
}
