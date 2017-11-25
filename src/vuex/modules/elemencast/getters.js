// import Vue from 'vue'

export default {
    getLinks (state) {
        return state.links
    },
    getIcones (state) {
        return state.icones
    },
    getCurrentTime (state) {
        return state.currentTime
    },
    getAudioStatus (state) {
        return state.audioStatus
    },
    getEpisodio (state) {
        return state.episodio
    },
    getPlayer (state) {
        return state.player
    },
    getCanvas (state) {
        return state.canvas
    }
}
