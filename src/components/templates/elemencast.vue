<style lang="sass">
    @import ../../sass/imports/_extend

    #elemencast
        +flex(column, n, center, center)
        height: 100%
        width: 100%
</style>

<template lang="pug">
    #elemencast
        conteiner
        links(:items='getLinks')
        icones(:items='getIcons')
        main-footer
</template>

<script>
    import { mapGetters } from 'vuex'
    import {
        icones,
        links,
        mainFooter
    } from '@/components/molecules'
    import { conteiner } from '@/components/organisms'

    export default {
        components: {
            icones,
            links,
            mainFooter,
            conteiner
        },
        computed: {
            ...mapGetters([
                'getLinks',
                'getIcons'
            ])
        }
    }
</script>
