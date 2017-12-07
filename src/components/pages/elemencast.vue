<style lang="sass">
    @import ../../sass/elemencast

    #elemencast
        > .container
            > .content
                background-image: url('/static/img/background.svg')
                background-repeat: no-repeat
                background-position: top center
                background-size: cover

                > #informacoes
                    background-color: $white

                > .wrapper
                    border-color: #000
                    border-style: solid
                    border-width: $pixel * 2.6
                    border-radius: $pixel * 10

                    &__white
                        background-color: #FFF

                    &__transparent
                        background-color: $transparent

                    .seta
                        border-top-color: $black
                        margin-left: $pixel * 5.5

                    > #episodios
                        > .seta
                            margin-left: 0

        > nav
            > .items
                > .item
                    > a
                        color: $black

        .icones
            &:hover
                z-index: 9

            .icone
                &__item
                    &:hover
                        .icone__item--tip
                            opacity: 1

                    &--tip
                        opacity: 0
                        background-color: $black
                        color: $white
                        +transition(.2s)

        .footer
            &-msg
                &__small,
                &__big
                    > *
                        color: $black
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
