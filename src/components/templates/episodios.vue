<template lang="pug">
    #episodios
        loading(:downloading='downloading')
        episodio-header(
            :episodio='episodio.id',
            :titulo='episodio.titulo.resumido',
            :subtitulo='episodio.subtitulo')
        player(:audio='episodio.audio')
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import {
        episodioHeader,
        loading
    } from '@/components/atoms'
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
            loading,
            player
        },
        mounted: function () {
            return this.downloadEpisodes()
        },
        computed: {
            ...mapGetters([
                'getEpisodio',
                'getEpisodios'
            ]),
            downloading () {
                if (this.episodio.audio) {
                    return false
                }
                return true
            }
        },
        methods: {
            ...mapActions([
                'downloadEpisodes'
            ])
        },
        watch: {
            getEpisodios: function (change) {
                this.episodio = this.getEpisodio(1)

                return this.episodio
            }
        }
    }
</script>
