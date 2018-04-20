<template lang="pug">
    .player
        controles(:src='audio')
        espectro(width='111px', height='305px')
        audio-player(:src='audio')
</template>

<script>
    import { mapGetters } from 'vuex'
    import { audioVisualizer } from '@/components/bosons'
    import { controles } from '@/components/molecules'
    import {
        espectro,
        audioPlayer
    } from '@/components/atoms'

    export default {
        props: ['audio'],
        mounted: function () {
            return audioVisualizer(this.getPlayer, this.getCanvas)
        },
        components: {
            controles,
            espectro,
            audioPlayer
        },
        computed: mapGetters([
            'getPlayer',
            'getCanvas'
        ])
    }
</script>
