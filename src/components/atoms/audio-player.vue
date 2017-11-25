<template lang="pug">
    audio(:src='getEpisodio.audio' ref='audio' controls)
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        created: function () {},
        mounted: function () {
            this.setPlayer(this.$refs.audio)

            this.$refs.audio.addEventListener('timeupdate', event => {
                this.setCurrentTime(this.processingTime(event))
            }, false)
        },
        computed: {
            ...mapGetters([
                'getEpisodio'
            ])
        },
        methods: {
            ...mapActions([
                'setPlayer',
                'setCurrentTime'
            ]),
            processingTime (event) {
                let sec = Number()
                let min = Number()
                sec = Math.floor(event.target.currentTime)
                min = Math.floor(sec / 60)
                min = min >= 10 ? min : '0' + min
                sec = Math.floor(sec % 60)
                sec = sec >= 10 ? sec : '0' + sec

                return `${min}:${sec}`
            }
        }
    }
</script>
