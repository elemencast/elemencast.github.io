<template lang="pug">
    .button(:click='action')
        img(:src='buttonIcon')
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        props: ['action', 'buttonIcon'],
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
