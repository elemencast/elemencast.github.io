import Vue from 'vue'
import router from './router'
import store from './vuex'
import elemencast from './components/elemencast'

Vue.config.productionTip = true
Vue.config.debug = true

new Vue({
    router,
    store,
    render: h => h(elemencast)
}).$mount('#app')
