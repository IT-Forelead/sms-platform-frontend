import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../components/pages/Main.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
  },
  {
    path: '/statistics',
    name: 'Statistics',
    component: () => import('../components/pages/Statistics.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../components/pages/Settings.vue'),
  },
  {
    path: '/reports',
    name: 'Reports',
    component: () => import('../components/pages/Reports.vue'),
  },
  {
    path: '/sms-template',
    name: 'SMS Template',
    component: () => import('../components/pages/SMSTemplate.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../components/pages/Contacts.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/pages/Profile.vue'),
  },
  {
    path: '/:pathMach(.*)*',
    name: 'NotFound',
    component: () => import('../components/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  if (authRequired && !loggedIn) {
    next('/login')
  } else if (to.path === '/login' && loggedIn) {
    next('/')
  } else {
    next()
  }
})

export default router
