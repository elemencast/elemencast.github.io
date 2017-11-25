<style lang="sass">
    @import ../../sass/imports/_extend

    .home
        &:last-child::after
            content: '.'
            color: $white
            padding-bottom: $pixel * 2
</style>

<template lang="pug">
    .home.square
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
        h1 oi!
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        props: [],
        data: () => ({}),
        created: function () {},
        mounted: function () {},
        updated: function () {},
        destroyed: function () {},
        components: {},
        computed: {
            ...mapGetters([]),
            ...mapState({})
        },
        methods: {
            ...mapActions([])
        },
        filters: {},
        watch: {}
    }
</script>
