import Vue from 'vue'
import main from './main.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
import VueRouter from 'vue-router'
Vue.use(VueRouter)



import permanent from './contents/permanent/permanent.vue'; // 常设展览
import online from './contents/online/online.vue'; // 在线展览
import common from './contents/common/common.vue'; // 常规展览
import appreciation from './contents/appreciation/appreciation.vue'; // 展品欣赏
import detail from '../../public/components/detail.vue'; // 详情文章

const routes = [
      { path: '/permanent-exhibition', component: permanent },
      { path: '/on-line', component: online },
      { path: '/common', component: common },
      { path: '/appreciation', component: appreciation },
      { path: '/detail/:id', component: detail },
      { path: '*', redirect: '/permanent-exhibition' }
]

const router = new VueRouter({
    routes
})


new Vue({
  el: '#wrapper',
  router,
  render: h => h(main)
})
