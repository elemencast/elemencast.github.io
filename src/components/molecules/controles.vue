<template lang="pug">
    .control
        .buttons
            .button.small
                img(src='/static/img/info.svg')

            .button.big(@click='toggleAudio()')
                img(:src='buttonIcon')

            a.button.small(href='/static/audio/ep1-atomic-design.mp3',
                target='_blank',
                download='ep1-atomic-design.mp3')
                img(src='/static/img/download.svg')

        .duration
            .currentTime {{getCurrentTime}}
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        mounted: function () {
            this.setAudioStatus('stop')
            this.setCurrentTime('00:00')
        },
        components: {},
        computed: {
            ...mapGetters([
                'getCurrentTime',
                'getAudioStatus'
            ]),
            buttonIcon () {
                if (this.getAudioStatus === 'play') {
                    return '/static/img/pause.svg'
                } else if (this.getAudioStatus === 'pause' ||
                            this.getAudioStatus === 'stop') {
                    return '/static/img/play.svg'
                }
            }
        },
        methods: {
            ...mapActions([
                'setAudioStatus',
                'setCurrentTime'
            ]),
            toggleAudio () {
                if (this.getAudioStatus === 'play') {
                    this.setAudioStatus('pause')
                } else {
                    this.setAudioStatus('play')
                }
            }
        }
    }
</script>
