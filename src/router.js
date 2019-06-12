import Vue from 'vue'
import Router from 'vue-router'
import SinglePage from './views/SinglePage.vue'
import TestPage from './sections/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: SinglePage
    },
    {
    	path: '/test',
    	name: 'test',
    	component: TestPage

    },
  ]
})
