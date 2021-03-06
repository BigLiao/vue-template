import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from '@/locale';
import '@/style/index';

// Mock 数据
import './mock';

Vue.config.productionTip = false;

// eslint-disable-next-line
const app = new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount();

setTimeout(() => {
  const dom = document.getElementById('app');
  dom.parentNode.replaceChild(app.$el, dom);
}, 0);