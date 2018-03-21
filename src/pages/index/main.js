import Vue from 'vue'
import main from './main.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

new Vue({
  el: '#wrapper',
  render: h => h(main)
})
