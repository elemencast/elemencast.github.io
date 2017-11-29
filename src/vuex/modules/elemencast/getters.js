// import Vue from 'vue'

const getters = {
    getLinks: state => state.links,
    getFerramentas: state => state.ferramentas,
    getIcones: state => state.icones,
    getCurrentTime: state => state.currentTime,
    getAudioStatus: state => state.audioStatus,
    getEpisodios: state => state.episodios,
    getEpisodio: (state, getters) => id =>
        getters.getEpisodios.reduce((acc, elm, indx) => {
            if (elm.id === id) {
                acc = elm
            }
            return acc
        }, {}),
    getPlayer: state => state.player,
    getCanvas: state => state.canvas,
    getInfoPanel: state => state.informationPopup
}

export default getters
