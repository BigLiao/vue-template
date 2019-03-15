import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home/home.vue';
import Detail from '../views/detail/detail';
import Order from '../views/order/order';
import OrderInfo from '../views/order-info/order-info';
import PrizeDetail from '../views/prize-detail/prize-detail';
import CalcRules from '../views/calc-rules/calc-rules';
import TakePrize from '../views/take-prize/take-prize';
import Record from '../views/record/record';
import OrderList from '../views/order-list/order-list';

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
      path: '/prize-detail',
      name: 'prize-detail',
      meta: {
        title: '获奖成功'
      },
      component: PrizeDetail
    }, {
      path: '/calc-rules',
      name: 'calc-rules',
      meta: {
        title: '计算详情'
      },
      component: CalcRules
    }, {
      path: '/take-prize',
      name: 'take-prize',
      meta: {
        title: '领奖地址填写'
      },
      component: TakePrize
    }, {
      path: '/record',
      name: 'record',
      meta: {
        title: '抽奖记录'
      },
      component: Record
    }, {
      path: '/order-list',
      name: 'order-list',
      meta: {
        title: '我的参与记录'
      },
      component: OrderList
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
