<template lang="pug">
    #sobre.square
        h1 oi!
        p
            | Que bom que você está aqui!
            | O intuito desse podcast é devolver pra comunidade o que
            | eu tenho aprendido com ela durante anos e eu espero
            | fortemente que você me ajude nessa jornada.
            | Toda semana eu, Luigui Delyer, pretendo trazer
            | alguns drops de conteúdo direto sobre diversos assuntos
            | relacionados a Front-end, Javascript, CSS, SASS, Pug,
            | HTML5, programação funcional, NodeJS, mapas e GIS,
            | dentre outros temas que surgirão no decorrer do caminho.
            | Muitos amigos da comunidade também estarão aqui comigo,
            | então pode ficar tranquilo que vem coisa boa pela frente!
            | Me ajude a fazer este podcast ficar ainda mais com a cara
            | da nossa comunidade. Troque uma ideia comigo e vamos juntos
            | moldar o conteúdo que queremos ter.
            | Eu também quero te motivar a criar conteúdo também!
            | Então trata de postar no seu blog ou abrir um canal
            | no YouTube. Assim a gente troca conteúdo!
            <br>
            <br>
            | Esse site foi inteiramente construído com Atomic Design
            | e várias outras coisas legais, além do fato de que
            | toda produção do podcast é totalmente feita com
            | ferramentas gratuitas e/ou open-source. Dá uma olhada
            | no link ali em baixo sobre as ferramentas que eu usei
            | eu listei tudo ali.
            <br>
            <br>
            | Se você encontrou alguma coisa no site que não gostou,
            | estou aguardando seu PR :)
</template>

<script>
    import { mapState, mapGetters, mapActions } from 'vuex'

    export default {
        props: [],
        data: () => ({}),
        created: function () {},
        mounted: function () {},
        updated: function () {},
        destroyed: function () {},
        components: {},
        computed: {
            ...mapGetters([]),
            ...mapState({})
        },
        methods: {
            ...mapActions([])
        },
        filters: {},
        watch: {}
    }
</script>
