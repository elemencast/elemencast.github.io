<template lang="pug">
    .player
        controles
        espectro(width='111px', height='305px')
        audio-player
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { audioVisualizer } from '@/components/bosons'
    import { controles } from '@/components/molecules'
    import {
        espectro,
        audioPlayer
    } from '@/components/atoms'

    export default {
        props: [],
        data: () => ({}),
        created: function () {},
        mounted: function () {
            audioVisualizer(this.getPlayer, this.getCanvas)
        },
        updated: function () {},
        destroyed: function () {},
        components: {
            controles,
            espectro,
            audioPlayer
        },
        computed: {
            ...mapGetters([
                'getPlayer',
                'getCanvas'
            ])
        },
        methods: {
            ...mapActions([])
        },
        filters: {},
        watch: {}
    }
</script>
