<template lang="pug">
    .control
        .buttons
            .button.small(@click='toggleInfo()')
                img(:src='infoIcon')

            .button.big(@click='toggleAudio()')
                img(:src='buttonIcon')

            a.button.small(:href='src',
                target='_blank',
                :download='downloadFile')
                img(src='/static/img/download.svg')

        .duration
            .currentTime {{getCurrentTime}}
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        props: ['src'],
        mounted: function () {
            this.setAudioStatus('stop')
            this.setCurrentTime('00:00')
        },
        computed: {
            ...mapGetters([
                'getCurrentTime',
                'getAudioStatus',
                'getInfoPanel'
            ]),
            buttonIcon () {
                if (this.getAudioStatus === 'play') {
                    return '/static/img/pause.svg'
                }

                return '/static/img/play.svg'
            },
            infoIcon () {
                if (this.getInfoPanel) {
                    return '/static/img/info2.svg'
                }

                return '/static/img/info.svg'
            },
            downloadFile () {
                return this.src.split('/')[3]
            }
        },
        methods: {
            ...mapActions([
                'setAudioStatus',
                'setCurrentTime',
                'setInfoPanel'
            ]),
            toggleAudio () {
                if (this.getAudioStatus === 'play') {
                    return this.setAudioStatus('pause')
                }

                return this.setAudioStatus('play')
            },
            toggleInfo () {
                if (this.getInfoPanel) {
                    return this.setInfoPanel(false)
                }

                return this.setInfoPanel(true)
            }
        }
    }
</script>
