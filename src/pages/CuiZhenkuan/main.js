import Vue from 'vue'
import main from './main.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import introduce from './contents/introduce/introduce.vue'; // 崔振宽简介
import chronology from './contents/chronology/chronology.vue'; // 艺术年表
import works from './contents/works/works.vue'; // 作品
import video from './contents/video/video.vue'; // 艺术影像

const routes = [
      { path: '/cui-zhenkuan', component: introduce },
      { path: '/art-chronology', component: chronology },
      { path: '/works', component: works },
      { path: '/video', component: video },
      { path: '*', redirect: '/cui-zhenkuan' }
]

const router = new VueRouter({
    routes
})


new Vue({
  el: '#wrapper',
  router,
  render: h => h(main)
})
