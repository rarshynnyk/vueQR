import Vue from 'vue'
import Router from 'vue-router'
import Scan from '@/components/Scan'
import Result from '@/components/Result'
import Login from '@/components/Login'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/scan',
      name: 'scan',
      component: Scan,
      alias: '/',
      meta: {
        authorized: true
      }
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
      meta: {
        authorized: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        authorized: false
      }
    },
    {
      path: '*',
      component: Login,
      redirect: '/login'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthorized = store.getters['auth/isLoggedIn']

  if (to.meta.authorized && !isAuthorized) {
    return next({
      name: 'login'
    })
  }

  if (!to.meta.authorized && isAuthorized) {
    return next('/')
  }

  return next()
})

export default router
