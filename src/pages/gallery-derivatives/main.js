import Vue from 'vue'
import main from './main.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import gallery from './contents/gallery/gallery.vue'; // 画廊
import derivatives from './contents/derivatives/derivatives.vue'; // 衍生品

const routes = [
    { path: '/gallery', component: gallery },
    { path: '/derivatives', component: derivatives },
    { path: '*', redirect: '/gallery' }
]

const router = new VueRouter({
    routes
})


new Vue({
  el: '#wrapper',
  router,
  render: h => h(main)
})
