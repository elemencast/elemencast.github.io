<style lang="sass">
    @import ../../sass/imports/_extend

    #informacoes
        position: absolute
        overflow: hidden
        top: $pixel * 7.3
        height: $pixel * 30.8
        opacity: 1
        border-style: solid
        border-width: $pixel * 2.6
        border-radius: $pixel * 4
        z-index: 5
        +border-box
        +transition(.4s)

        +media-mobile
            top: 0
            height: 0
            opacity: 0
            background-color: $white

    .box
        &--open
            width: $pixel * 87.5

            +media-mobile
                opacity: 1 !important
                border-style: solid
                border-width: $pixel * 2.6
                border-radius: $pixel * 4
                z-index: 99 !important
                width: 100%
                height: 100vh !important

        &--close
            +transition-delay(.4s)
            width: 0

        &--open,
        &--close
            .square
                margin-top: 0
                padding-top: $pixel
                width: calc(100% + #{$pixel * 3})
                height: 100%

                > .quero-participar
                    display: inline-block
                    padding: $pixel / 2
                    padding-left: $pixel * 4
                    padding-right: $pixel * 4
                    margin-bottom: $pixel * 2
                    border-radius: $pixel * 2
                    background-color: $black
                    color: $white
                    font-weight: 100
                    font-size: $pixel * 2.5

            .button
                display: none

                +media-mobile
                    display: inline-block
                    position: absolute
                    right: $pixel
                    top: $pixel
                    z-index: 9

            .content
                +flex(row, n, space-between, center)
                opacity: 1
                width: 100%
                height: 100%
                +transition(.5s)

                +media-mobile
                    +flex(column, n, space-around, center)

                &--show
                    +animation(showContent, 1000ms, ease-in-out, 0ms, 1, normal, running)

                &--hide
                    opacity: 0
                    +animation(hideContent, 500ms, ease-in-out, 0ms, 1, normal, running)

                > hr.line
                    display: none

                    +media-mobile
                        display: block
                        width: 90%
                        border-bottom: 2px solid $black

                > .left,
                > .right
                    width: $pixel * 32
                    height: $pixel * 26
                    overflow: hidden

                    +media-mobile
                        width: 90%
                        height: 40vh

                    > .seta
                        margin-left: $pixel * 14
                        +media-mobile
                            margin-left: $pixel * 16.5

                > .left
                    h2
                        font-weight: 500
                        padding-bottom: $pixel * 2
                        border-bottom-style: solid
                        border-bottom-width: 1px
                        border-bottom-color: $black

                    pre
                        white-space: pre-wrap

                        &::after
                            content: '.'
                            color: $white
                            padding-bottom: $pixel * 2

                > .right
                    .pessoa
                        +flex(row, n, flex-start, center)

                        > .imagem
                            height: $pixel * 7
                            min-height: $pixel * 7
                            max-height: $pixel * 7
                            width: $pixel * 7
                            min-width: $pixel * 7
                            max-width: $pixel * 7
                            overflow: hidden
                            +flex(row, n, center, center)
                            border-radius: 50%
                            border-style: solid
                            border-width: $pixel / 2
                            border-color: $black

                            > img
                                max-height: $pixel * 9
                                max-width: $pixel * 9

                        > .dados
                            width: 100%
                            +flex(column, n, center, flex-start)

                            > .links
                                width: 100%
                                +flex(row, n, flex-start, center)

                                > a
                                    color: $black
                                    font-size: $pixel * 2

                    pre
                        white-space: pre-wrap

                        &::after
                            content: '.'
                            color: $white
                            padding-bottom: $pixel * 2

        @keyframes showContent
            0%
                opacity: 0
            49%
                opacity: 0
            50%
                opacity: 0
            100%
                opacity: 1

        @keyframes hideContent
            0%
                opacity: 1
            49%
                opacity: 1
            50%
                opacity: 1
            100%
                opacity: 0
</style>

<template lang="pug">
    #informacoes(:class='infoStatus')
        .button.small(
            @click='toggleInfo()'
        )
            img(:src='closeIcon')

        .content(:class='showContent')
            .left
                seta-scroll(v-if='getInfoPanel')
                .square
                    h2.m__b--m {{episodio.titulo.completo}}
                    pre {{episodio.texto}}

            hr.line

            .right
                seta-scroll(v-if='getInfoPanel')
                .square
                    h4.m__b--s Participantes desta edição
                    .participante(v-for='(pessoa, index) in episodio.participantes',
                        :key='index')
                        .pessoa.m__b--s
                            .imagem.m__r--s
                                img(:src='pessoa.foto')
                            .dados
                                h2 {{pessoa.nome}}

                                .links
                                    a.m__r--s(:href="'mailto:' + pessoa.email", target='_blank') email
                                    a.m__r--s(:href='pessoa.github', target='_blank') github
                                    a.m__r--s(:href='pessoa.twitter', target='_blank') twitter

                        pre {{pessoa.minibio}}

                    a.quero-participar.m__t--s(href='https://github.com/elemencast/episodios',
                        target='_blank') quero participar
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    import { setaScroll } from '@/components/atoms'

    export default {
        props: [],
        data: () => ({
            episodio: {
                titulo: {
                    resumido: '',
                    completo: ''
                },
                subtitulo: '',
                participantes: [
                    {
                        foto: '',
                        nome: '',
                        email: '',
                        github: '',
                        twitter: '',
                        minibio: ''
                    }
                ],
                audio: '',
                texto: ''
            }
        }),
        created: function () {},
        mounted: function () {},
        updated: function () {},
        destroyed: function () {},
        components: {
            setaScroll
        },
        computed: {
            ...mapGetters([
                'getInfoPanel',
                'getCurrentEpisode',
                'getEpisodes'
            ]),
            infoStatus () {
                if (this.getInfoPanel) {
                    this.setEpisodes(this.$route.params.id)
                    return 'box--open'
                }

                return 'box--close'
            },
            showContent () {
                if (this.getInfoPanel) {
                    return 'content--show'
                }

                return 'content--hide'
            },
            closeIcon () {
                if (this.getInfoPanel) {
                    return '/static/img/close2.svg'
                }

                return '/static/img/close.svg'
            }
        },
        methods: {
            ...mapActions([
                'setInfoPanel'
            ]),
            setEpisodes () {
                if (this.getEpisodes.length > 0) {
                    const episodio = this.getCurrentEpisode

                    if (episodio.titulo.completo !== undefined) {
                        this.episodio = episodio
                    }

                    return this.episodio
                }
            },
            toggleInfo () {
                if (this.getCurrentEpisode.audio &&
                    this.getCurrentEpisode.audio !== undefined &&
                    this.getCurrentEpisode.audio !== '') {
                    if (this.getInfoPanel) {
                        return this.setInfoPanel(false)
                    }

                    return this.setInfoPanel(true)
                }
            }
        },
        watcher: {
            getInfoPanel: function (changes) {
                if (changes) {
                    this.setEpisodes()
                }
            }
        }
    }
</script>
