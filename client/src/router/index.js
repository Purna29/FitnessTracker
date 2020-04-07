import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue';
import Game from '../views/Game.vue';
import Login from '../views/Login.vue';
import Signup from '../views/signup.vue';
import Contact from '../views/contact.vue';
import Whyjoin from '../views/whyjoin.vue';
import Afterlogin from '../views/afterlogin.vue';
import { CurrentUser } from '../models/Users';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/game', name: 'Game', component: Game, meta: { isSecret: true } },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/whyjoin', name: 'Whyjoin', component: Whyjoin },
  { path: '/home', name: 'afterlogin', component: Afterlogin },

  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach( (to, from, next) => {
  if( to.meta.isSecret && !CurrentUser) next('/login');
  else next();
});


export default router
