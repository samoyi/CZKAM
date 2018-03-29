import Vue from 'vue'
import main from './main.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import introduce from './contents/art-gallery/introduce.vue'; // 简介
import events from './contents/art-gallery/events.vue'; // 大事记
import openingHours from './contents/art-gallery/openingHours.vue'; // 开放时间
import transportation from './contents/art-gallery/transportation.vue'; // 地理交通
import contactUs from './contents/art-gallery/contactUs.vue'; // 联系我们
import artHotel from './contents/facilities/artHotel.vue'; // 艺术酒店
import moCoffee from './contents/facilities/moCoffee.vue'; // 咖啡厅

const routes = [
    { path: '/art-gallery/introduce', component: introduce },
    { path: '/art-gallery/events', component: events },
    { path: '/art-gallery/opening-hours', component: openingHours },
    { path: '/art-gallery/transportation', component: transportation },
    { path: '/art-gallery/contact-us', component: contactUs },
    { path: '/facilities/art-hotel', component: artHotel },
    { path: '/facilities', component: artHotel }, // 一类标题路由至其首个子类
    { path: '/facilities/mo-coffee', component: moCoffee },
    { path: '*', redirect: '/art-gallery/introduce' } // 任何不匹配的路径路由至第一大类第一子类
]

const router = new VueRouter({
    routes
})


new Vue({
  el: '#wrapper',
  router,
  render: h => h(main)
})
