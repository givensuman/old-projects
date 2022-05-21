import Vue from 'vue'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

import 'animate.css'

import './global.scss'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')
