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

    setEpisodes: ({ dispatch, commit }, id) => {
        return axios.episodios.getAll()
            .then(data => {
                commit('allEpisodes', data)

                if (id) {
                    dispatch('setCurrentEpisode', id)
                }
            })
    },

    setCurrentEpisode: ({ commit }, id) =>
        commit('currentEpisode', id)
}

export default actions
