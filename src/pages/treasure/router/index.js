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
import Example from '../views/example';
import AddAddress from '../views/add-address/add-address';
import RecordList from '../views/record-list/record-list';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/order-list'
    },
    {
      path: '/detail/:id',
      name: 'detail',
      meta: {
        title: '积分夺宝'
      },
      component: Home
    },
    {
      path: '/order/:id',
      name: 'order',
      meta: {
        title: '提交订单'
      },
      component: Order
    },
    {
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
      path: '/calc-rules/:id',
      name: 'calc-rules',
      meta: {
        title: '计算详情'
      },
      component: CalcRules
    }, {
      path: '/take-prize/:id',
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
      path: '/record-list/:id',
      name: 'record-list',
      meta: {
        title: '参与记录'
      },
      component: RecordList
    }, {
      path: '/order-list',
      name: 'order-list',
      meta: {
        title: '我的抽奖记录'
      },
      component: OrderList
    }, {
      path: '/example',
      name: 'example',
      component: Example
    }, {
      path: '/add-address',
      name: 'add-address',
      meta: {
        title: '添加快递地址'
      },
      component: AddAddress
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
