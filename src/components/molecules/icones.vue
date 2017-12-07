<style lang="sass">
    @import ../../sass/imports/_extend

    .icones
        +flex(row, n, center, flex-start)
</style>

<template lang="pug">
    .icones
        icone(v-for='(icone, index) in items',
            :key='index',
            :name='icone.name',
            :href='icone.href',
            :image='icone.image')
</template>

<script>
    import { icone } from '@/components/atoms'

    export default {
        props: ['items'],
        components: {
            icone
        }
    }
</script>
