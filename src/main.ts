import Vue from 'vue'
import App from './App.vue'
import registerDirectives from '@/directives/index'

Vue.config.productionTip = false

registerDirectives(Vue)

new Vue({
  render: h => h(App)
}).$mount('#app')
