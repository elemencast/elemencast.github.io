<style lang="sass">
    @import ../../sass/imports/_extend

    #episodios
        +flex(column, n, space-between, center)
        height: 100%
        width: 100%

        > .loading
            position: absolute
            background-color: $black
            border-radius: 50%
            bottom: $pixel * 2.9
            +transition(.2s)
            display: none

            &-pulse
                display: inline-block
                +animation(pulse, 800ms, ease-in-out, 0, infinite, normal, running)

        > .header
            padding: $pixel * 1.5
            padding-bottom: 0

            > .ep-id
                letter-spacing: -1px

            > h1
                font-size: $pixel * 4
                line-height: $pixel * 3.7
                font-weight: 300

            > h2
                font-size: $pixel * 2
                font-weight: 700

            > h3
                font-size: $pixel * 1.5
                font-weight: 700

            > h4
                font-size: $pixel * 2
                font-weight: 700
                letter-spacing: 2px

        > .player
            +flex(column, n, flex-start, center)
            width: 100%
            flex: 1 1 auto

            > .control
                +flex(column, n, flex-start, center)
                padding-top: $pixel + 2
                width: 100%
                height: 100%

                > .buttons
                    +flex(row, n, center, center)
                    width: 100%

                    > .button
                        +cursor-pointer()

                        &.small
                            overflow: hidden
                            width: $pixel * 3.5
                            height: $pixel * 3.5
                            +flex(row, n, center, center)

                            > img
                                width: $pixel * 2.5
                                height: $pixel * 2.5

                        &.big
                            overflow: hidden
                            width: $pixel * 6
                            height: $pixel * 7
                            margin-left: $pixel * -.5
                            margin-right: $pixel * -.5
                            +flex(row, n, center, center)

                            > img
                                width: $pixel * 6
                                height: $pixel * 6

                > .duration
                    > .currentTime
                        font-weight: 300
                        font-size: $pixel * 3.5

            > canvas
                position: absolute
                bottom: $pixel * -1 / 2
                width: $pixel * 13.81 + 10
                height: $pixel * 13

            > audio
                display: none

        @keyframes pulse
            0%
                bottom: $pixel * 3.5
                height: $pixel * 1.2
                width: $pixel * 1.2
            33%
                height: $pixel * 2
                width: $pixel * 2
                bottom: $pixel * 3
            63%
                height: $pixel * 2
                width: $pixel * 2
                bottom: $pixel * 3
            100%
                bottom: $pixel * 3.5
                height: $pixel * 1.2
                width: $pixel * 1.2
</style>

<template lang="pug">
    episodios
</template>

<script>
    import { episodios } from '@/components/templates'

    export default {
        components: {
            episodios
        }
    }
</script>
