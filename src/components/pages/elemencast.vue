<style lang="sass">
    @import ../../sass/elemencast

    #elemencast
        +flex(column, n, center, center)
        height: 100%
        width: 100%

        > .container
            > .content
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

                    .seta
                        border-top-color: $black
                        margin-left: $pixel * 5.5

                    .square
                        width: $pixel * 13.81 + 24
                        height: $pixel * 38.3
                        padding: $pixel * 1.3
                        padding-top: $pixel * 3
                        padding-right: $pixel * 1.3 + 24
                        overflow-y: scroll
                        overflow-x: hidden
                        +border-box()

            > .logo
                +flex(column, n, flex-start, center)
                width: 100%
                margin-top: $pixel * -1

        > .menu
            +flex(row, n, center, center)
            width: 100%
            z-index: 9

            > .item
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
            +flex(row, n, center, flex-start)

            &__item
                +flex(column, n, flex-start, center)
                margin-bottom: $pixel * 2
                margin-left: $pixel * -1
                margin-right: $pixel * -1
                max-width: $pixel * 8.75
                width: $pixel * 8.75
                min-width: $pixel * 8.75

                &:first-of-type
                    margin-left: 0

                &:last-of-type
                    margin-right: 0

                &:hover
                    .icones__item-tip
                        opacity: 1

                &-tip
                    opacity: 0
                    border-radius: $pixel
                    background-color: $black
                    color: $white
                    margin-top: $pixel * -2.5
                    padding: $pixel
                    padding-right: $pixel * 2
                    padding-left: $pixel * 2
                    +border-box()
                    +transition(.2s)

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
    import { elemencast } from '@/components/templates'

    export default {
        components: {
            elemencast
        }
    }
</script>
