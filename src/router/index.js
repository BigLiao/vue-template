import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home/home.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      meta: {
        title: '详情'
      },
      component: () =>
        import(/* webpackChunkName: "detail" */ '@/views/detail/detail.vue')
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
