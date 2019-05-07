import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

import '@common/stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
