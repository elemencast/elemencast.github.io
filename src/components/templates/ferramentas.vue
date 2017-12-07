<template lang="pug">
    #ferramentas
        seta-scroll
        .square
            .content(v-for='(item, index) in getTools',
                :key='index')
                ferramenta(:type='item.type',
                    :area='item.area',
                    :href='item.href',
                    :title='item.title',
                    :subtitle='item.subtitle',
                    :description='item.description',
                    :image='item.image')
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
                'getTools'
            ])
        }
    }
</script>
