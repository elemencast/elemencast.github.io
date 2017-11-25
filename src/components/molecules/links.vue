<template lang="pug">
    .menu
        .item(v-for='(menu, index) in items',
            :key='index')
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
