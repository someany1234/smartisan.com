import app from './app.vue';
import Vue from 'vue';
import router from './router/router.js';
import store from './store/vuex.js';

var vm = new Vue({
  el: '#app',
  router,
  store,
  render: function (c) {
    return c(app);
  },
})