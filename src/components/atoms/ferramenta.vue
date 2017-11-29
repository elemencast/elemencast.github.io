<template lang="pug">
    .item
        h2.m__t--s(v-if='tipo') {{tipo}}
        h4.m__t--s.m__b--xs.area(v-if='area') {{area}}
        a(:href='href')
            h3.m__t--s(v-if='titulo.length > 1',
                v-for='(item, index) in titulo',
                :key='index') {{item}}
            h3.m__t--s(v-else) {{titulo[0]}}
            h4.m__b--m(v-if='subtitulo') {{subtitulo}}
            h5(v-if='descricao') {{descricao}}
            img(v-if='imagem', :src='imagem', width='70px')
</template>

<script>
    export default {
        props: [
            'tipo',
            'area',
            'href',
            'titulo',
            'subtitulo',
            'descricao',
            'imagem'
        ]
    }
</script>
