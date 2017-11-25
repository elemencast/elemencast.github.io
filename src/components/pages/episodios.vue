<style lang="sass">
    @import ../../sass/imports/_extend

    #episodios
        +flex(column, n, space-between, center)
        height: 100%
        width: 100%

        > .header
            padding: $pixel * 1.5
            padding-top: $pixel * 3
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

                > .button
                    > img
                        width: $pixel * 8
                        height: $pixel * 8

                > .duration
                    > .currentTime
                        font-weight: 300
                        font-size: $pixel * 3

            > canvas
                position: absolute
                bottom: 0
                width: $pixel * 13.81 + 10
                height: $pixel * 13

            > audio
                display: none
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
