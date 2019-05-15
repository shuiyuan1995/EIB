import Vue from 'vue'
import store from "@store";

import Router from 'vue-router'
import Home from '@views/Home.vue'
import login from '@views/login.vue'
import register from '@views/register.vue'
import investment from '@views/investment.vue'
import investmentinfo from '@views/investmentinfo.vue'
import investmentmoney from '@views/investmentmoney.vue'
import investmentgo from '@views/investmentgo.vue'
import account from '@views/account.vue'
import accountRecharge from '@views/accountRecharge.vue'
import accountExtract from '@views/accountExtract.vue'
import accountHistory from '@views/accountHistory.vue'
import accountitem from '@views/accountitem.vue'
import accountsetting from '@views/accountsetting.vue'
import ranking from '@views/ranking.vue'
import security from '@views/security.vue'
import securitysetting from '@views/securitysetting.vue'
import bulletin from '@views/bulletin.vue'
import bulletinlist from '@views/bulletinlist.vue'
import bulletinnotice from '@views/bulletinnotice.vue'
import help from '@views/help.vue'
import helpfinancial from '@views/helpfinancial.vue'
import helpoperation from '@views/helpoperation.vue'
import helplist from '@views/helplist.vue'
import cooperation from '@views/cooperation.vue'
import about from '@views/About.vue'
import invitation from '@views/invitation.vue'
import invitationpromote from '@views/invitationpromote.vue'
import invitationreward from '@views/invitationreward.vue'

Vue.use(Router)

const router = new Router({
  mode:"history",
  alias: "/",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        role: 'all'
      }
    },
    {
      path: '/login',
      name: 'login',
      component:login,
      meta: {
        role: 'all'
      }
    },
    {
      path: '/register',
      name: 'register',
      component:register,
      meta: {
        role: 'all'
      }
    },
    {
      path: '/investment',
      name: 'investment',
      component:investment,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/investmentinfo',
      name: 'investmentinfo',
      component:investmentinfo,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/investmentmoney',
      name: 'investmentmoney',
      component:investmentmoney,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/investmentgo',
      name: 'investmentgo',
      component:investmentgo,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/account',
      name: 'account',
      component:account,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/accountRecharge/:type',
      name: 'accountRecharge',
      component:accountRecharge,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/accountExtract',
      name: 'accountExtract',
      component:accountExtract,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/accountHistory',
      name: 'accountHistory',
      component:accountHistory,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/accountitem',
      name: 'accountitem',
      component:accountitem,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/accountsetting',
      name: 'accountsetting',
      component:accountsetting,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/invitation',
      name: 'invitation',
      component:invitation,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/invitationpromote',
      name: 'invitationpromote',
      component:invitationpromote,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/invitationreward',
      name: 'invitationreward',
      component:invitationreward,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/ranking',
      name: 'ranking',
      component:ranking,
      meta: {
        role: 'all'
      }
    },
    {
      path: '/security',
      name: 'security',
      component:security,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/securitysetting/:type',
      name: 'securitysetting',
      component:securitysetting,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/bulletin',
      name: 'bulletin',
      component:bulletin,
      meta: {
        role: 'all'
      }
    },
    {
      path: '/bulletinlist',
      name: 'bulletinlist',
      component:bulletinlist,
      meta: {
        role: 'all'
      }
    },
    {
      path: '/bulletinnotice/:page',
      name: 'bulletinnotice',
      component:bulletinnotice,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/help',
      name: 'help',
      component:help,
      meta: {
        role: 'all'
      }
    },
    {
      path: '/helpfinancial/:page',
      name: 'helpfinancial',
      component:helpfinancial,
      meta: {
        role: 'all'
      }
    },
    {
      path: '/helpoperation',
      name: 'helpoperation',
      component:helpoperation,
      meta: {
        role: 'all'
      }
    },
    {
      path: '/helplist/:page',
      name: 'helplist',
      component:helplist,
      meta: {
        role: 'all'
      }
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component:cooperation,
      meta: {
        role: 'member'
      }
    },
    {
      path: '/about',
      name: 'about',
      component:about,
      meta: {
        role: 'all'
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  if(!store.state.userInfo.nick&&to.meta.role=='member'){
    next('/')
  }else{
    next()
  }
})

export default router;