<style lang="sass">
    @import ../../sass/elemencast

    #elemencast
        +flex(column, n, center, center)
        height: 100%
        width: 100%

        .container
            .content
                +flex(column, n, flex-start, center)
                background-image: url('/static/img/background.svg')
                background-repeat: no-repeat
                background-position: top center
                background-size: cover
                width: $pixel * 44.74
                height: $pixel * 55

                > .wrapper
                    border-radius: $pixel * 7.87
                    margin-top: $pixel * 2.5
                    width: $pixel * 13.81
                    height: $pixel * 38.3
                    overflow: hidden
                    +transition(.2s)

                    &__white
                        background-color: #FFF

                    &__transparent
                        background-color: $transparent

                    > .square
                        width: $pixel * 13.81 + 24
                        height: $pixel * 37.97
                        padding: $pixel * 2.3
                        padding-right: $pixel * 2.3 + 24
                        overflow-y: scroll
                        overflow-x: hidden
                        +border-box()

            .logo
                +flex(column, n, flex-start, center)
                width: 100%
                margin-top: $pixel * -1

        .menu
            +flex(row, n, center, center)
            margin: $pixel
            margin-top: 0
            width: 100%

            .item
                > a
                    display: inline-block
                    color: $black
                    font-size: $pixel * 3

                > .pipe,
                > .pipe::before
                    display: inline-block

                > .pipe::before
                    content: '|'
                    font-size: $pixel * 3
                    margin-left: $pixel
                    margin-right: $pixel

        .icones
            +flex(row, n, center, center)

            &-item
                margin: $pixel * 2

        .footer
            +flex(column, n, center, center)

            &-msg
                &__small,
                &__big
                    +flex(row, n, center, center)

                    > *
                        color: $black

                &__small
                    > *
                        font-size: $pixel + 4
                        font-weight: 500

                &__big
                    > *
                        font-size: $pixel * 2.5
                        font-weight: 300
</style>

<template lang="pug">
    elemencast
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'
    import { elemencast } from '@/components/templates'

    export default {
        props: [],
        data: () => ({}),
        created: function () {},
        mounted: function () {},
        updated: function () {},
        destroyed: function () {},
        components: {
            elemencast
        },
        computed: {
            ...mapGetters([]),
            ...mapState({})
        },
        methods: {
            ...mapActions([])
        },
        filters: {},
        watch: {}
    }
</script>
