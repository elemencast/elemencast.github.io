<template lang="pug">
    #episodios
        episodio-header(
            :episodio='episodio.id',
            :titulo='episodio.titulo.resumido',
            :subtitulo='episodio.subtitulo')
        player(:audio='episodio.audio')
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { episodioHeader } from '@/components/atoms'
    import { player } from '@/components/organisms'

    export default {
        data: () => ({
            episodio: {
                titulo: {
                    resumido: '',
                    completo: ''
                },
                subtitulo: '',
                participantes: [],
                audio: '',
                texto: ''
            }
        }),
        components: {
            episodioHeader,
            player
        },
        mounted: function () {
            this.downloadEpisodios()
        },
        computed: {
            ...mapGetters([
                'getEpisodio',
                'getEpisodios'
            ])
        },
        methods: {
            ...mapActions([
                'downloadEpisodios'
            ])
        },
        watch: {
            getEpisodios: function (change) {
                this.episodio = this.getEpisodio(1)
            }
        }
    }
</script>
