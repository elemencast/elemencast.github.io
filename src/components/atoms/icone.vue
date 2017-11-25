<template lang="pug">
    .icones-item
        a(:href='href', target='_blank')
            img(:src='image')
</template>

<script>
    export default {
        props: ['href', 'image']
    }
</script>
