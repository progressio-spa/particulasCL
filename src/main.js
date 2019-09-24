import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bulma-carousel/dist/css/bulma-carousel.min.css'
import VueScrollTo from 'vue-scrollto'
import VueI18n from 'vue-i18n'
import { languages } from './langs/index.js'
import { defaultLocale } from './langs/index.js'

Vue.use(VueI18n)

Vue.use(VueScrollTo)

const messages = Object.assign(languages)

// You can also pass in the default options
Vue.use(VueScrollTo, {
    container: 'body',
    duration: 500,
    easing: 'ease',
    offset: 1000,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true,
})

Vue.config.productionTip = false

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: defaultLocale, // set locale
  fallbackLocale: 'es',
  messages, // set locale messages
})

new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
}).$mount('#app')
