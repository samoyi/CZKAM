import Vue from 'vue'
import main from './main.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import advanced from './contents/activities/advanced.vue'; // 山水高研班
import calligraphy from './contents/activities/calligraphy.vue'; // 书法班
import forum from './contents/activities/forum.vue'; // 艺术大讲堂
import practice from './contents/exchanges/practice.vue'; // 教育实践
import volunteering from './contents/volunteering/volunteering.vue'; // 志愿者服务
import detail from '../../public/components/detail.vue'; // 详情文章

const routes = [
      { path: '/activities/advanced-seminar', component: advanced },
      { path: '/activities', component: advanced },
      { path: '/activities/calligraphy-seminar', component: calligraphy },
      { path: '/activities/art-forum', component: forum },
      { path: '/exchanges/educational-practice', component: practice },
      { path: '/exchanges', component: practice },
      { path: '/volunteering/volunteering', component: volunteering },
      { path: '/volunteering', component: volunteering },
      { path: '/detail/:id', component: detail },
      { path: '*', redirect: '/activities/advanced-seminar' }
]

const router = new VueRouter({
    routes
})


new Vue({
  el: '#wrapper',
  router,
  render: h => h(main)
})
