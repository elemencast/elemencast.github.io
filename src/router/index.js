import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const load = component => () => import(`@/components/${component}.vue`)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/sobre',
            name: 'sobre',
            components: {
                content: load('pages/sobre')
            }
        },
        {
            path: '/episodios',
            name: 'episodios',
            components: {
                content: load('pages/episodios')
            }
        },
        {
            path: '/episodios/:id',
            name: 'episodio',
            components: {
                content: load('pages/episodios')
            },
            props: true
        },
        {
            path: '*',
            redirect: '/episodios'
        }
    ]
})
