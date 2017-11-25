<template lang="pug">
    #episodios
        episodio-header(
            :episodio='getEpisodio.id',
            :titulo='getEpisodio.titulo',
            :subtitulo='getEpisodio.subtitulo')
        player
</template>

<script>
    import { mapGetters } from 'vuex'
    import { episodioHeader } from '@/components/atoms'
    import { player } from '@/components/organisms'

    export default {
        components: {
            episodioHeader,
            player
        },
        computed: {
            ...mapGetters([
                'getEpisodio'
            ])
        }
    }
</script>
