// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import "./common/styles/index.scss"
import {
  /* eslint-disable no-unused-vars */
  Style,
  Dialog,
  Picker,
  CascadePicker,
  Toast,
  createAPI
} from 'cube-ui'
Vue.config.productionTip = false
Vue.use(Picker)
Vue.use(Dialog)
Vue.use(CascadePicker)
Vue.use(Toast)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
