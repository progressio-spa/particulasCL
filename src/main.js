import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import "bulma/css/bulma.css"
import "@fortawesome/fontawesome-free/css/all.css"
import component from 'bulma-vue-carousel'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
