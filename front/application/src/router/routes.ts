import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue';
 
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/movie/:name', name: 'movie', component: Home },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});