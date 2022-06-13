import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Asosiy sahifa',
    component: () => import('../components/pages/Main.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
  },
  {
    path: '/settings',
    name: 'Sozlamalar',
    component: () => import('../components/pages/Settings.vue'),
  },
  {
    path: '/reports',
    name: 'Hisobotlar',
    component: () => import('../components/pages/Reports.vue'),
  },
  {
    path: '/sms-template',
    name: 'SMS shablonlar',
    component: () => import('../components/pages/SMSTemplate.vue'),
  },
  {
    path: '/contacts',
    name: 'Kontaktlar',
    component: () => import('../components/pages/Contacts.vue'),
  },
  {
    path: '/holidays',
    name: 'Bayramlar',
    component: () => import('../components/pages/Holidays.vue'),
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
