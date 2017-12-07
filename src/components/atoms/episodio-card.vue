<style scoped lang="sass">
    @import ../../sass/imports/_extend

    .card
        border-style: solid
        border-width: 1px
        border-color: $black
        width: $pixel * 11.1
        min-width: $pixel * 11.1
        max-width: $pixel * 11.1
        height: $pixel * 11.1
        min-height: $pixel * 11.1
        max-height: $pixel * 11.1
        text-align: center
        border-radius: 50%
        +flex(column, n, center, center)
        +border-box
        +transition(.1s)
        +cursor-pointer
        +dont-select

        &:hover
            border-width: $pixel

        > h3
            line-height: $pixel * 2
            font-weight: 700
            font-size: $pixel * 2.2

        > h4
            font-size: $pixel * 2
            font-weight: 500
</style>

<template lang="pug">
    router-link.card.m__b--s(:to="'/episodios/' + id")
        h3 {{title}}
        h4 {{subtitle}}
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        props: ['id', 'title', 'subtitle'],
        data: () => ({}),
        created: function () {},
        mounted: function () {},
        updated: function () {},
        destroyed: function () {},
        components: {},
        computed: {
            ...mapGetters([])
        },
        methods: mapActions(['setCurrentEpisode']),
        filters: {},
        watch: {}
    }
</script>
