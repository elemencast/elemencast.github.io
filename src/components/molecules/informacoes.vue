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
        padding: $pixel * 2
        z-index: 5
        +border-box
        +transition(.4s)

    .box
        &--open
            width: 700px

            .content
                opacity: 1
                +transition(.5s)

                &--show
                    +animation(showContent, 1000ms, ease-in-out, 0ms, 1, normal, running)


            @keyframes showContent
                0%
                    opacity: 0
                49%
                    opacity: 0
                50%
                    opacity: 0
                100%
                    opacity: 1

        &--close
            width: 0
</style>

<template lang="pug">
    #informacoes(:class='infoStatus')
        .square
            .content(:class='showContent')
                .left
                .right
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
                'getInfoPanel'
            ]),
            infoStatus () {
                if (this.getInfoPanel) {
                    return 'box--open'
                }

                return 'box--close'
            },
            showContent () {
                if (this.getInfoPanel) {
                    return 'content--show'
                }
            }
        },
        methods: {
            ...mapActions([])
        },
        filters: {},
        watch: {}
    }
</script>
