<style lang="sass">
    @import ../../sass/imports/_extend

    .container
        width: 100%
        +flex(column, n, center, center)
        +media-mobile
            z-index: 99

        > .content
            +flex(column, n, flex-start, center)
            width: $pixel * 44.74
            height: $pixel * 55

            +media-mobile
                z-index: 99

            > .wrapper
                padding-top: $pixel * 2.5
                width: $pixel * 13.81
                height: $pixel * 35.3
                overflow: hidden
                z-index: 9
                +transition(.2s)

        > .logo
            +flex(column, n, flex-start, center)
            width: 100%
            margin-top: $pixel * -1
</style>

<template lang="pug">
    .container
        .content
            informacoes
            .wrapper.wrapper__white
                router-view(name="content")
        .logo
            img(src="/static/img/letras-logo.svg")
</template>

<script>
    import { informacoes } from '@/components/molecules'

    export default {
        components: {
            informacoes
        }
    }
</script>
