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
