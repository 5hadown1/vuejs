import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from './store';

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
