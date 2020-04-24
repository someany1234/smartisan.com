import Vue from 'vue';
import VueRouter from 'vue-router';
import '../css/reset.css';


Vue.use(VueRouter);

import Shop from '../components/Shop.vue';
import item from '../components/item.vue';
import cart from '../components/cart.vue';
import checkout from '../components/checkout.vue';
var router = new VueRouter({
  routes: [{
      path: '/',
      name: 'Shop',
      component: Shop,
    },
    {
      path: '/item',
      name: 'item',
      component: item,
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: checkout,
    },

  ]
});

export default router;