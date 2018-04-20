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
    displayInformation: (state, value) => {
        state.informationPopup = value
        return state
    },
    currentTime: (state, currentTime) => {
        state.currentTime = currentTime
        return state
    },
    allEpisodes: (state, data) => Vue.set(state, 'allEpisodes', data),
    currentEpisode: (state, id) => {
        const episode = state.allEpisodes.reduce((acc, elm, indx) => {
            if (elm.id === id) {
                acc = elm
            }
            return acc
        }, {})

        return Vue.set(state, 'currentEpisode', episode)
    }
}

export default mutations
