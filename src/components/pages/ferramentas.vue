<style lang="sass">
    @import ../../sass/imports/_extend

    #ferramentas
        *
            color: $black

        > p
            text-align: left

        h2
            font-weight: 500

        h3
            font-weight: 500

        .content
            > .item
                > .area
                    padding-top: $pixel
                    border-top-style: solid
                    border-top-width: 1px
                    border-top-color: $black

                > .link
                    .title
                        font-size: $pixel * 2

                    .subtitle
                        font-size: $pixel * 2

                    .description

                > h4:first-of-type
                    font-weight: 700

            &:last-child::after
                content: '.'
                color: $white
                padding-bottom: $pixel * 2
</style>

<template lang="pug">
    ferramentas
</template>

<script>
    import { ferramentas } from '@/components/templates'

    export default {
        components: {
            ferramentas
        }
    }
</script>
