import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '../views/Dashboard.vue';
import AddPayment from '../components/AddPayment.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/add/payment/:category/',
      component: AddPayment,
      name: 'addpayment'
    },
    {
      path: '*',
      component: Dashboard,
      name: 'dashboard'
    },
  ]
});