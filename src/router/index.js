import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'Main page',
    component: () => import('../views/Main.vue'),
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/dog',
    name: 'Dog page',
    component: () => import('../views/Dog.vue'),
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    path: '/cat',
    name: 'Cat page',
    component: () => import('../views/Cat.vue'),
    meta: {
      layout: 'DefaultLayout',
    },
  },
  {
    path: '*',
    name: 'Page not found',
    component: () => import('../views/PageNotFound.vue'),
    meta: {
      layout: 'NoneLayout',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
