import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import Join from '../views/Join.vue';
// import Login from '../views/Login.vue';
// import Publication from '../views/Publication.vue';
// import Course from '../views/Course.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
  // {
  //   path: '/join',
  //   name: 'join',
  //   component: () => import('./views/Join.vue')
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('.views/Login.vue')
  // },
  // {
  //   path: '/publication',
  //   name: 'publication',
  //   component: () => import('./views/Publication.vue')
  // },
  // {
  //   path: '/course',
  //   name: 'course',
  //   component: () => import('./views/Course.vue')
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
