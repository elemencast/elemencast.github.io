<template lang="pug">
    #elemencast
        conteiner
        links(:items='getLinks')
        icones(:items='getIcones')
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
                'getIcones'
            ])
        }
    }
</script>
