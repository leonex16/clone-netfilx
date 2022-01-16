import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue';
import Movie from '../pages/Movie.vue';
 
const routes = [
  { path: '/', name: 'home', component: Home, },
  { path: '/movie/:name', name: 'movie', component: Movie },
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});