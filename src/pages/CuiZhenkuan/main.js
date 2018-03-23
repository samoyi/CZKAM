import Vue from 'vue'
import main from './main.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

import introduce from './contents/introduce/introduce.vue'; // 崔振宽简介
// import introduce from './contents/chronology/chronology.vue'; // 艺术年表
import works from './contents/works/works.vue'; // 作品
// import introduce from './contents/treatise/treatise.vue'; // 艺术论著
// import introduce from './contents/activity/activity.vue'; // 艺术活动
import video from './contents/video/video.vue'; // 艺术影像

const routes = [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar },
      { path: '/崔振宽简介', component: introduce },
      { path: '/作品', component: works },
      { path: '/艺术影像', component: video },
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
