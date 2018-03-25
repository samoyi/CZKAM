import Vue from 'vue'
import main from './main.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import introduce from './contents/bulletin/bulletin.vue'; // 公告
// import chronology from './contents/member/member.vue'; // 会员
// import works from './contents/download/download.vue'; // 下载专区
// import works from './contents/comments/comments.vue'; // 意见留言

const routes = [
      { path: '/bulletin', component: introduce }, // 公告
      // { path: '/member', component: chronology }, // 会员
      // { path: '/download', component: works }, // 下载专区
      // { path: '/comments', component: video }, // 意见留言
      { path: '*', redirect: '/bulletin' }
];

const router = new VueRouter({
    routes,
});

new Vue({
  el: '#wrapper',
  router,
  render: h => h(main)
});
