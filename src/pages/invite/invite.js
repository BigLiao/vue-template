import Vue from 'vue';
import App from './invite.vue';
import i18n from '@/locale';
import '@/style/index';

// Mock 数据
// import './mock';

Vue.config.productionTip = false;

// eslint-disable-next-line
export default new Vue({
  el: '#app',
  i18n,
  render: h => h(App),
});
