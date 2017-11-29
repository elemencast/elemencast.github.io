<template lang="pug">
    canvas(ref='canvas', :width='width', :height='height')
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        props: ['width', 'height'],
        mounted: function () {
            return this.setCanvas(this.$refs.canvas)
        },
        methods: mapActions(['setCanvas'])
    }
</script>
