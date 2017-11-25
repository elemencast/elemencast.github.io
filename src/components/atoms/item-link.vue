<template lang="pug">
    router-link(:to='href') {{titulo}}
</template>

<script>
    export default {
        props: ['href', 'titulo']
    }
</script>
