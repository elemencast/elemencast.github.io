import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const load = component => () => import(`@/components/${component}.vue`)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                content: load('templates/home')
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
