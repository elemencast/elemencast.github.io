<style lang="sass">
    @import ../../sass/imports/_extend

    .icone
        &__item
            +flex(column, n, flex-start, center)
            margin-bottom: $pixel
            margin-left: $pixel * -1
            margin-right: $pixel * -1
            max-width: $pixel * 9.75
            width: $pixel * 9.75
            min-width: $pixel * 9.75

            &--tip
                border-radius: $pixel
                margin-top: $pixel * -3.5
                padding: $pixel
                padding-right: $pixel * 2
                padding-left: $pixel * 2
                +border-box()
                +transition(.2s)
</style>


<template lang="pug">
    .icone
        .icone__item
            .icone__item--tip.m__b--s {{name}}
            a(v-if="name == 'download'",
                :href='href',
                target='_blank',
                :download='fileName')
                img(:src='image')
            a(v-else,
                :href='href',
                target='_blank')
                img(:src='image')
</template>

<script>
    export default {
        props: ['href', 'image', 'name'],
        computed: {
            fileName () {
                let fileName = this.href.split('/')
                return fileName[fileName.length - 1]
            }
        }
    }
</script>
