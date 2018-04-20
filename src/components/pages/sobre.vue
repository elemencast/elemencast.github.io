<style lang="sass">
    @import ../../sass/imports/_extend

    #sobre
        p
            text-align: left

            &:last-child::after
                content: '.'
                color: $white
                padding-bottom: $pixel * 6
</style>

<template lang="pug">
    sobre
</template>

<script>
    import { sobre } from '@/components/templates'

    export default {
        components: {
            sobre
        }
    }
</script>
