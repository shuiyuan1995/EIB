import Vue from 'vue'
import Router from 'vue-router'
import Home from '@views/Home.vue'
import login from '@views/login.vue'
import register from '@views/register.vue'
import investment from '@views/investment.vue'

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
      path: '/login',
      name: 'login',
      component:login
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/register',
      name: 'register',
      component:register
    },
    {
      path: '/investment',
      name: 'investment',
      component:investment
    }
  ]
})