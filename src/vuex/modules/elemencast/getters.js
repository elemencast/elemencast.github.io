// import Vue from 'vue'

const getters = {
    getLinks: state => state.links,
    getTools: state => state.tools,
    getIcons: state => state.icons,
    getCurrentTime: state => state.currentTime,
    getAudioStatus: state => state.audioStatus,
    getEpisodes: state => state.allEpisodes,
    getCurrentEpisode: state => state.currentEpisode,
    getPlayer: state => state.player,
    getCanvas: state => state.canvas,
    getInfoPanel: state => state.informationPopup
}

export default getters
