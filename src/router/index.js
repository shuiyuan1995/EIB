import Vue from 'vue'
import Router from 'vue-router'
import Home from '@views/Home.vue'

Vue.use(Router)

export default new Router({
  mode:"history",
  alias: "/",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})