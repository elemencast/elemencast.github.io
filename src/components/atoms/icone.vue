<style lang="sass">
    @import ../../sass/imports/_extend

    .icones
        &__item
            +flex(column, n, flex-start, center)
            margin-bottom: $pixel * 2
            margin-left: $pixel * -1
            margin-right: $pixel * -1
            max-width: $pixel * 8.75
            width: $pixel * 8.75
            min-width: $pixel * 8.75

            &:first-of-type
                margin-left: 0

            &:last-of-type
                margin-right: 0

            &-tip
                border-radius: $pixel
                margin-top: $pixel * -2.5
                padding: $pixel
                padding-right: $pixel * 2
                padding-left: $pixel * 2
                +border-box()
                +transition(.2s)
</style>


<template lang="pug">
    .icones__item
        .icones__item-tip.m__b--s {{nome}}
        a(v-if="nome == 'download'",
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
        props: ['href', 'image', 'nome'],
        computed: {
            fileName () {
                let fileName = this.href.split('/')
                return fileName[fileName.length - 1]
            }
        }
    }
</script>
