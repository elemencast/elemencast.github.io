<template lang="pug">
    .control
        .buttons
            .button.small
                img(src='/static/img/info.svg')

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
                'getAudioStatus'
            ]),
            buttonIcon () {
                if (this.getAudioStatus === 'play') {
                    return '/static/img/pause.svg'
                } else if (this.getAudioStatus === 'pause' ||
                            this.getAudioStatus === 'stop') {
                    return '/static/img/play.svg'
                }
            },
            downloadFile () {
                return this.src.split('/')[3]
            }
        },
        methods: {
            ...mapActions([
                'setAudioStatus',
                'setCurrentTime'
            ]),
            toggleAudio () {
                if (this.getAudioStatus === 'play') {
                    return this.setAudioStatus('pause')
                } else {
                    return this.setAudioStatus('play')
                }
            }
        }
    }
</script>
