<template lang="pug">
    .header
        h4.ep-id(v-if='episodio') # {{episodio}}
        h1.m__b--xs(v-if='titulo') {{titulo}}
        h2(v-if='subtitulo') {{subtitulo}}
</template>

<script>
    export default {
        props: ['episodio', 'titulo', 'subtitulo']
    }
</script>
