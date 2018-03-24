import Vue from 'vue'
import main from './main.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import introduce from './contents/introduce/introduce.vue'; // 崔振宽简介
import chronology from './contents/chronology/chronology.vue'; // 艺术年表
import works from './contents/works/works.vue'; // 作品
// import introduce from './contents/treatise/treatise.vue'; // 艺术论著
// import introduce from './contents/activity/activity.vue'; // 艺术活动
import video from './contents/video/video.vue'; // 艺术影像

const routes = [
      { path: '/cui-zhenkuan', component: introduce }, // 崔振宽简介
      { path: '/art-chronology', component: chronology }, // 艺术年表
      { path: '/works', component: works }, // 作品
      { path: '/video', component: video }, // 艺术影像
      { path: '*', redirect: '/cui-zhenkuan' }
      // { path: '/', redirect: '/works' }
      // { path: '/崔振宽简介', component: introduce },
      // { path: '/艺术年表', component: chronology },
      // { path: '/作品', component: works },
      // { path: '/艺术影像', component: video },
      // { path: '/崔振宽简介/简介', component: Bar },
]

const router = new VueRouter({
    routes
})


new Vue({
  el: '#wrapper',
  router,
  render: h => h(main)
})
