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
        props: [],
        data: () => ({}),
        created: function () {},
        mounted: function () {},
        updated: function () {},
        destroyed: function () {},
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
                'setAudioStatus'
            ]),
            toggleAudio () {
                if (this.getAudioStatus === 'play') {
                    this.setAudioStatus('pause')
                } else {
                    this.setAudioStatus('play')
                }
            }
        },
        filters: {},
        watch: {}
    }
</script>
