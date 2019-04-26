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
import invitationranking from '@views/invitationranking.vue'
import invitationreward from '@views/invitationreward.vue'

Vue.use(Router)

const router = new Router({
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
      path: '/accountRecharge',
      name: 'accountRecharge',
      component:accountRecharge
    },
    {
      path: '/accountExtract',
      name: 'accountExtract',
      component:accountExtract
    },
    {
      path: '/accountHistory',
      name: 'accountHistory',
      component:accountHistory
    },
    {
      path: '/accountitem',
      name: 'accountitem',
      component:accountitem
    },
    {
      path: '/accountsetting',
      name: 'accountsetting',
      component:accountsetting
    },
    {
      path: '/invitation',
      name: 'invitation',
      component:invitation
    },
    {
      path: '/invitationpromote',
      name: 'invitationpromote',
      component:invitationpromote
    },
    {
      path: '/invitationranking',
      name: 'invitationranking',
      component:invitationranking
    },
    {
      path: '/invitationreward',
      name: 'invitationreward',
      component:invitationreward
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
      path: '/bulletinnotice/:page',
      name: 'bulletinnotice',
      component:bulletinnotice
    },
    {
      path: '/help',
      name: 'help',
      component:help
    },
    {
      path: '/helpfinancial/:page',
      name: 'helpfinancial',
      component:helpfinancial
    },
    {
      path: '/helpoperation',
      name: 'helpoperation',
      component:helpoperation
    },
    {
      path: '/helplist/:page',
      name: 'helplist',
      component:helplist
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component:cooperation
    },
    {
      path: '/about',
      name: 'about',
      component:about
    }
  ]
})


// router.beforeEach((to, from, next) => {
//   // const list = ['home', 'group', 'user']    // 将需要切换效果的路由名称组成一个数组
//   // const toName = to.name    // 即将进入的路由名字
//   // const fromName = from.name    // 即将离开的路由名字
//   // const toIndex = list.indexOf(toName)    // 进入下标
//   // const fromIndex = list.indexOf(fromName)   // 离开下标
//   // let direction = ''
//   // console.log(to,from)
//   // const toDepth = to.path.split('/').length
//   // const fromDepth = from.path.split('/').length
//   // let transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
//   // console.log(transitionName)

//   // if (toIndex < fromIndex) {          // 如果进入的下标小于离开的下标，那么是左滑
//   //   direction = 'left'
//   // } else {
//   //   direction = 'right'         // 如果进入的下标大于离开的下标，那么是右滑
//   // }

//   // if (toIndex > -1 && fromIndex > -1) {   // 如果下标都存在
//   //   if (toIndex < fromIndex) {          // 如果进入的下标小于离开的下标，那么是左滑
//   //     direction = 'left'
//   //   } else {
//   //     direction = 'right'         // 如果进入的下标大于离开的下标，那么是右滑
//   //   }
//   // }

//   // store.state.viewDirection = direction  //这里使用vuex进行赋值

//   return next()
// })

export default router;