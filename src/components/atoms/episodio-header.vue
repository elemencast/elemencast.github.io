<template lang="pug">
    .header
        h4.ep-id(v-if='episodio') # {{episodio}}
        h1.m__b--xs(
          v-if='titulo',
          :style="estilo"
        ) {{titulo}}
        h2(v-if='subtitulo') {{subtitulo}}
</template>

<script>
    export default {
        props: ['episodio', 'titulo', 'estilo', 'subtitulo']
    }
</script>
