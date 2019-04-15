import Vue from 'vue'
import Router from 'vue-router'
import Home from '@views/Home.vue'
import login from '@views/login.vue'
import register from '@views/register.vue'
import investment from '@views/investment.vue'
import investmentinfo from '@views/investmentinfo.vue'
import investmentmoney from '@views/investmentmoney.vue'
import investmentgo from '@views/investmentgo.vue'
import account from '@views/account.vue'
import ranking from '@views/ranking.vue'
import security from '@views/security.vue'
import securitysetting from '@views/securitysetting.vue'
import bulletin from '@views/bulletin.vue'
import bulletinlist from '@views/bulletinlist.vue'
import bulletinnotice from '@views/bulletinnotice.vue'
import help from '@views/help.vue'

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
    },
    {
      path: '/investmentinfo',
      name: 'investmentinfo',
      component:investmentinfo
    },
    {
      path: '/investmentmoney',
      name: 'investmentmoney',
      component:investmentmoney
    },
    {
      path: '/investmentgo',
      name: 'investmentgo',
      component:investmentgo
    },
    {
      path: '/account',
      name: 'account',
      component:account
    },
    {
      path: '/ranking',
      name: 'ranking',
      component:ranking
    },
    {
      path: '/security',
      name: 'security',
      component:security
    },
    {
      path: '/securitysetting/:type',
      name: 'securitysetting',
      component:securitysetting
    },
    {
      path: '/bulletin',
      name: 'bulletin',
      component:bulletin
    },
    {
      path: '/bulletinlist',
      name: 'bulletinlist',
      component:bulletinlist
    },
    {
      path: '/bulletinnotice',
      name: 'bulletinnotice',
      component:bulletinnotice
    },
    {
      path: '/help',
      name: 'help',
      component:help
    }
  ]
})