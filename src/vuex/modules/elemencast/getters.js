// import Vue from 'vue'

const getters = {
    getLinks: state => {
        return state.links
    },
    getIcones: state => {
        return state.icones
    },
    getCurrentTime: state => {
        return state.currentTime
    },
    getAudioStatus: state => {
        return state.audioStatus
    },
    getEpisodios: state => {
        return state.episodios
    },
    getEpisodio: (state, getters) => (id) => {
        return getters.getEpisodios.reduce((acc, elm, indx) => {
            if (elm.id === id) {
                acc = elm
            }
            return acc
        }, {})
    },
    getPlayer: state => {
        return state.player
    },
    getCanvas: state => {
        return state.canvas
    }
}

export default getters
