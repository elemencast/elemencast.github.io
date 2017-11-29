<style lang="sass">
    @import ../../sass/elemencast

    .seta
        position: fixed
        bottom: $pixel * 7
        opacity: 0
        height: 0
        width: 0
        border-left-width: $pixel * 1.5
        border-left-style: solid
        border-left-color: transparent

        border-right-width: $pixel * 1.5
        border-right-style: solid
        border-right-color: transparent

        border-top-width: $pixel * 2
        border-top-style: solid
        +transition(.2s)
        +animation(down, 1600ms, ease-in-out, 1500ms, 2, normal, running)

    @keyframes down
        0%
            bottom: $pixel * 7
            opacity: 1
        49%
            bottom: $pixel * 3
            opacity: 0
        50%
            bottom: $pixel * 7
            opacity: 1
        100%
            bottom: $pixel * 3
            opacity: 0
</style>

<template lang="pug">
    .seta
</template>
