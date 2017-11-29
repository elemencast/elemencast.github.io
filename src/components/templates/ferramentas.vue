<template lang="pug">
    #ferramentas
        seta-scroll
        .square
            .content(v-for='(item, index) in getFerramentas',
                :key='index')
                ferramenta(:tipo='item.tipo',
                    :area='item.area',
                    :href='item.href',
                    :titulo='item.titulo',
                    :subtitulo='item.subtitulo',
                    :descricao='item.descricao',
                    :imagem='item.imagem')
</template>

<script>
    import { mapGetters } from 'vuex'
    import {
        ferramenta,
        setaScroll
    } from '@/components/atoms'

    export default {
        components: {
            ferramenta,
            setaScroll
        },
        computed: {
            ...mapGetters([
                'getFerramentas'
            ])
        }
    }
</script>
