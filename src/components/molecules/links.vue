<style lang="sass">
    @import ../../sass/imports/_extend

    nav
        +flex(row, n, center, center)
        width: 100%
        z-index: 9

        > .item
            > .pipe,
            > .pipe::before
                display: inline-block

            > .pipe::before
                content: '|'
                font-size: $pixel * 3
                margin-left: $pixel
                margin-right: $pixel
</style>

<template lang="pug">
    nav
        .item(v-for='(menu, index) in items', :key='index')
            item-link(:href='menu.href', :titulo='menu.titulo')
            .pipe(v-if='index < items.length - 1')
</template>

<script>
    import { itemLink } from '@/components/atoms'

    export default {
        props: ['items'],
        components: {
            itemLink
        }
    }
</script>
