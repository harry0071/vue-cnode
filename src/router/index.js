import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/topic/:id/author/:loginname',
      name: 'Topic',
      components: {
        default: () => import(/* webpackChunkName: "topic" */ '@/pages/Topic.vue'),
        sidebar: () => import(/* webpackChunkName: "sidebar" */ 'cp/Sidebar.vue')
      }
    },
    {
      path: '/user/:loginname',
      name: 'User',
      component: () => import(/* webpackChunkName: "user" */ '@/pages/User.vue')
    },
  ]
})
