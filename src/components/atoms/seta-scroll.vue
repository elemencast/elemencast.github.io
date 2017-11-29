<style lang="sass">
    @import ../../sass/imports/_extend

    .seta
        position: fixed
        bottom: $pixel * 5
        opacity: 0
        height: 0
        width: 0
        border-left-width: $pixel * 1
        border-left-style: solid
        border-left-color: transparent

        border-right-width: $pixel * 1
        border-right-style: solid
        border-right-color: transparent

        border-top-width: $pixel * 2
        border-top-style: solid
        +transition(.2s)
        +animation(down, 1600ms, ease-in-out, 1500ms, 2, normal, running)

    @keyframes down
        0%
            bottom: $pixel * 5
            opacity: 0
        20%
            bottom: $pixel * 5
            opacity: 1
        59%
            bottom: $pixel * 2
            opacity: 0
        60%
            bottom: $pixel * 5
            opacity: 0
        61%
            bottom: $pixel * 5
            opacity: 1
        100%
            bottom: $pixel * 2
            opacity: 0
</style>

<template lang="pug">
    .seta
</template>
