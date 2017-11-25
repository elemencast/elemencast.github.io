<template lang="pug">
    .control
        .button(@click='toggleAudio()')
            img(:src="buttonIcon")

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
