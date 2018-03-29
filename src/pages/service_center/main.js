import Vue from 'vue'
import main from './main.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import introduce from './contents/bulletin/bulletin.vue'; // 公告
import member from './contents/member/member.vue'; // 会员
import download from './contents/download/download.vue'; // 下载专区
import comments from './contents/comments/comments.vue'; // 意见留言

const routes = [
      { path: '/bulletin', component: introduce },
      { path: '/member-ship', component: member },
      { path: '/download', component: download },
      { path: '/comments', component: comments },
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
