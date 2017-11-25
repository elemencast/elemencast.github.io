<style lang="sass">
    @import ../../sass/imports/_extend

    #ferramentas
        padding-top: $pixel !important
        *
            color: $black

        > p
            text-align: left

        h2
            font-weight: 500

        h3
            font-weight: 500

        > .content
            > .item
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
