<style scoped lang="sass">
    @import ../../sass/imports/_extend

    .cards
        margin-top: $pixel * -4
        width: $pixel * 16.7
        align-self: flex-start
</style>

<template lang="pug">
    #episodios
        seta-scroll(
            v-if='getEpisodes.length > 3 && !this.$route.params.id'
        )

        loading(
            v-if='$route.params.id',
            :downloading='downloading'
        )

        .cards.square(v-if='!$route.params.id')
            episodio-card(
                v-for='(episode, index) in getEpisodes',
                :key='index',
                :id='episode.id',
                :title='episode.titulo.resumido',
                :subtitle='episode.subtitulo'
            )

        episodio-header(
            v-if='$route.params.id'
            :episodio='episodio.id',
            :titulo='episodio.titulo.resumido',
            :subtitulo='episodio.subtitulo'
        )

        player(
            v-if='$route.params.id',
            :audio='episodio.audio'
        )
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import {
        episodioHeader,
        episodioCard,
        loading,
        setaScroll
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
            episodioCard,
            loading,
            player,
            setaScroll
        },
        created () {
            this.setEpisodes(this.$route.params.id)
        },
        computed: {
            ...mapGetters([
                'getCurrentEpisode',
                'getEpisodes'
            ]),
            downloading () {
                if (this.episodio.audio !== '') {
                    return false
                }
                return true
            }
        },
        methods: {
            ...mapActions([
                'setEpisodes',
                'setCurrentEpisode'
            ]),
            setEpisode (id) {
                if (id === 'ultimo') {
                    this.$router.push(`/episodios/${this.getEpisodes.length}`)
                }

                this.setCurrentEpisode(id)
                this.episodio = this.getCurrentEpisode

                if (this.episodio.titulo === undefined) {
                    this.episodio = {
                        id: '9999',
                        titulo: {
                            resumido: 'Episódio fail :(',
                            completo: ''
                        },
                        subtitulo: 'Tente novamente',
                        participantes: [],
                        audio: '',
                        texto: ''
                    }
                }
                return this.episodio
            }
        },
        watch: {
            '$route.params.id': function (change) {
                return this.setEpisode(change)
            },
            getEpisodes: function (change) {
                if (change.length > 0) {
                    this.setEpisode(this.$route.params.id)
                }
            }
        }
    }
</script>
