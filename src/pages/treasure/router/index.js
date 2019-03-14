import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home/home.vue';
import Detail from '../views/detail/detail';
import Order from '../views/order/order';
import OrderInfo from '../views/order-info/order-info';
import RewardDetail from '../views/reward-detail/reward-detail';
import CalcRules from '../views/calc-rules/calc-rules';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '积分夺宝'
      },
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      meta: {
        title: '提交订单'
      },
      component: Order
    },
    {
      path: '/detail/:id',
      name: 'detail',
      meta: {
        title: '夺宝详情'
      },
      component: Detail
    }, {
      path: '/order-info/:id',
      name: 'order-info',
      meta: {
        title: '参与成功',
      },
      component: OrderInfo
    }, {
      path: '/reward-detail',
      name: 'reward-detail',
      meta: {
        title: '获奖成功'
      },
      component: RewardDetail
    }, {
      path: '/calc-rules',
      name: 'calc-rules',
      meta: {
        title: '计算详情'
      },
      component: CalcRules
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title || '智慧积分';
  }
  next();
});

export default router;
