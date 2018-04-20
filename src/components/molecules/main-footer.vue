<style lang="sass">
    @import ../../sass/imports/_extend

    .footer
        +flex(column, n, center, center)

        &-msg
            &__small,
            &__big
                +flex(row, n, center, center)

            &__small
                > *
                    font-size: $pixel + 4
                    font-weight: 500

            &__big
                > *
                    font-size: $pixel * 2.5
                    font-weight: 300
</style>

<template lang="pug">
    .footer
        .footer-msg__big produzido inteiramente com ferramentas livres e gratuitas
        .footer-msg__small
            p Luigui Delyer - 2018
            p.m__l--s |
            router-link.m__l--s(to='/ferramentas') Softwares / Hardwares / Licenças
</template>
