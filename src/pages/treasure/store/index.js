import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    env: 'app' // 当前环境，安卓App:app, 普通浏览器: browser, 小程序: miniprogram，微信浏览器: wechart
  },
  mutations: {},
  actions: {}
});
