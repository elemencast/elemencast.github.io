<template lang="pug">
    .loading(:class="{ 'loading-pulse': downloading }")
</template>

<script>
    export default {
        props: ['downloading']
    }
</script>
