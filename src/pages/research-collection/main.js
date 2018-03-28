import Vue from 'vue'
import main from './main.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import committee from './contents/research/committee.vue'; // 学术委员会
import events from './contents/research/events.vue'; // 学术活动
import chinesePainting from './contents/collection/chinesePainting.vue'; // 国画
import detail from '../../public/components/detail.vue'; // 详情文章

const routes = [
      { path: '/research/academic-committee', component: committee },
      { path: '/research', component: committee },
      { path: '/research/academic-events', component: events },
      { path: '/collection/chinese-painting', component: chinesePainting },
      { path: '/collection', component: chinesePainting },
      { path: '/detail/:id', component: detail },
      { path: '*', redirect: '/research/academic-committee' }
]

const router = new VueRouter({
    routes
})


new Vue({
  el: '#wrapper',
  router,
  render: h => h(main)
})
