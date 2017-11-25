<template lang="pug">
    .container
        .content
            .wrapper.wrapper__white
                router-view(name="content")
        .logo
            img(src="/static/img/letras-logo.svg")
</template>
