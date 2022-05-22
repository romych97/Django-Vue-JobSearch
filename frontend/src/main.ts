import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'

import MainPage from './components/MainPage/MainPage.vue'
import About from './components/About/About.vue'
import Messages from './components/Messages/Messages.vue'
import Login from './components/Login/Login.vue'
import Profile from './components/Profile/Profile.vue'
import Project from './components/Project/Project.vue'

import { createRouter, createWebHistory } from 'vue-router'
import VueCookies from 'vue-cookies'

// import axios
// import axios from 'axios' 


const app = createApp(App)
app.use(VueCookies)
// myV3App.component('SomeComponent', SomeComponent)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/messages',
    name: 'Messages',
    component: Messages
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: Project
  },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ './components/About/About.vue')
//   }
]
const router = createRouter({
  history: createWebHistory(''), // createWebHistory(process.env.BASE_URL),
  routes
})

app.use(router)
app.mount('#app')