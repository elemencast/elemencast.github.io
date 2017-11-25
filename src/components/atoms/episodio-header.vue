<template lang="pug">
    .header
        h4.ep-id # {{episodio}}
        h1.m__b--xs {{titulo}}
        h2 {{subtitulo}}
        h3 Mais informações
</template>

<script>
    export default {
        props: ['episodio', 'titulo', 'subtitulo']
    }
</script>
