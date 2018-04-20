<template lang="pug">
    .item
        h2.m__t--s(v-if='type') {{type}}
        h4.m__t--s.m__b--xs.area(v-if='area') {{area}}
        a.link(:href='href')
            h3.title.m__t--s(v-if='title.length > 1',
                v-for='(item, index) in title',
                :key='index') {{item}}
            h3.title.m__t--s(v-else) {{title[0]}}
            h4.subtitle.m__b--m(v-if='subtitle') {{subtitle}}
            h5.description(v-if='description') {{description}}
            img(v-if='image', :src='image', width='70px')
</template>

<script>
    export default {
        props: [
            'type',
            'area',
            'href',
            'title',
            'subtitle',
            'description',
            'image'
        ]
    }
</script>
