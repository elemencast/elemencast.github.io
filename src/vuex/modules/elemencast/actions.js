// import Vue from 'vue'
import axios from '@/axios'

const actions = {
    setAudioStatus: ({ commit }, value) => {
        commit('playerStatus', value)
        commit('audioStatus', value)
    },

    setPlayer: ({ commit }, player) =>
        commit('player', player),

    setCanvas: ({ commit }, canvas) =>
        commit('canvas', canvas),

    setCurrentTime: ({ commit }, currentTime) =>
        commit('currentTime', currentTime),

    setInfoPanel: ({ commit }, value) =>
        commit('displayInformation', value),

    downloadEpisodes: ({ commit }) =>
        axios.episodios.getAll()
            .then(data => commit('episodios', data))
}

export default actions
