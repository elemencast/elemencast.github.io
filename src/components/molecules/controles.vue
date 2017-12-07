<style scoped lang="sass">
    .disabled
        opacity: .5
</style>

<template lang="pug">
    .control
        .buttons
            .button.small(
                :class='noEpisode',
                @click='toggleInfo()'
            )
                img(:src='infoIcon')

            .button.big(
                :class='noEpisode',
                @click='toggleAudio()'
            )
                img(:src='buttonIcon')

            a.button.small(
                :class='noEpisode',
                :href='src',
                target='_blank',
                :download='downloadFile'
            )
                img(src='/static/img/download.svg')

        .duration
            .currentTime(:class='noEpisode') {{getCurrentTime}}
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
                'getInfoPanel',
                'getCurrentEpisode'
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
            },
            noEpisode () {
                if (!this.getCurrentEpisode.audio ||
                    this.getCurrentEpisode.audio === undefined ||
                    this.getCurrentEpisode.audio === '') {
                    return 'disabled'
                }

                return ''
            }
        },
        methods: {
            ...mapActions([
                'setAudioStatus',
                'setCurrentTime',
                'setInfoPanel'
            ]),
            toggleAudio () {
                if (this.getCurrentEpisode.audio &&
                    this.getCurrentEpisode.audio !== undefined &&
                    this.getCurrentEpisode.audio !== '') {
                    if (this.getAudioStatus === 'play') {
                        return this.setAudioStatus('pause')
                    }

                    return this.setAudioStatus('play')
                }
            },
            toggleInfo () {
                if (this.getCurrentEpisode.audio &&
                    this.getCurrentEpisode.audio !== undefined &&
                    this.getCurrentEpisode.audio !== '') {
                    if (this.getInfoPanel) {
                        return this.setInfoPanel(false)
                    }

                    return this.setInfoPanel(true)
                }
            }
        }
    }
</script>
