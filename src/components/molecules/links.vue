<style lang="sass">
    @import ../../sass/imports/_extend

    nav
        +flex(column, n, center, center)
        width: 100%
        z-index: 5

        > .newsletter
            display: inline-block
            padding: $pixel / 2
            padding-left: $pixel * 4
            padding-right: $pixel * 4
            border-radius: $pixel * 2
            background-color: $black-3
            color: $white
            font-weight: 100
            font-size: $pixel * 2.5

        > .items
            +flex(row, n, center, center)

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
        .items.m__t--s
            .item(v-for='(menu, index) in items', :key='index')
                item-link(:href='menu.href', :titulo='menu.titulo')
                .pipe(v-if='index < items.length - 1')

        a.newsletter.m__t--s(href='https://tinyletter.com/elemencast',
            target='_blank') me inscrever na newsletter
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
