import Vue from 'vue'

const mutations = {
    audioStatus: (state, value) => {
        state.audioStatus = value
        return state
    },
    player: (state, player) => {
        state.player = player
        return state
    },
    playerStatus: (state, status) => {
        if (state.player) {
            state.player[status]()
        }
        return state
    },
    canvas: (state, canvas) => {
        state.canvas = canvas
        return state
    },
    currentTime: (state, currentTime) => {
        state.currentTime = currentTime
        return state
    },
    episodios: (state, data) => Vue.set(state, 'episodios', data)
}

export default mutations
