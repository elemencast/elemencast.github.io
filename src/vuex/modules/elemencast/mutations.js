// import Vue from 'vue'

export default {
    audioStatus (state, value) {
        state.audioStatus = value
        return state
    },
    player (state, player) {
        state.player = player
        return state
    },
    playerStatus (state, status) {
        state.player[status]()
        return state
    },
    canvas (state, canvas) {
        state.canvas = canvas
        return state
    },
    currentTime (state, currentTime) {
        state.currentTime = currentTime
        return state
    }
}
