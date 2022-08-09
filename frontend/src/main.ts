import { createApp } from 'vue'
import { createPinia } from 'pinia' // Import
import App from './App.vue'

import './assets/index.css'

import MainPage from './components/MainPage/MainPage.vue'
import About from './components/About/About.vue'
import Messages from './components/Messages/Messages.vue'
import Login from './components/Login/Login.vue'
import Profile from './components/Profile/Profile.vue'
import Project from './components/Project/Project.vue'
import Chat from './components/Chat/Chat.vue'
import ChatRoom from './components/Chat/ChatRoom.vue'

import { isAuthenticated } from './services/AuthService'

import { createRouter, createWebHistory } from 'vue-router'
import VueCookies from 'vue-cookies'

const app = createApp(App)
app.use(createPinia())
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
  {
    path: '/chat/',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/chat/room/:id',
    name: 'ChatRoom',
    component: ChatRoom
  },

]
const router = createRouter({
  history: createWebHistory(''), // createWebHistory(process.env.BASE_URL),
  routes, 
})

router.beforeEach((to, from, next) => {

  console.log("file: main.ts ~ line 73 ~ router.beforeEach ~ from", from)
  console.log("file: main.ts ~ line 73 ~ router.beforeEach ~ to", to)
  // isAuthenticated()
  // console.log("file: main.ts ~ line 79 ~ router.beforeEach ~ isAuthenticated()", isAuthenticated())

  const auth = true;

  const privatePages = ['/profile'];
  const authRequired = privatePages.includes(to.path);

  if (authRequired && !auth) {
    next({ name: 'Login' })
  } else next()
  // if (to.name !== 'Logon' && !localStorage.getItem('authToken')) {
  //   next({ name: 'Logon' })
  // } else next()
})

app.use(router)
app.mount('#app')