import Vue from 'vue'
import Router from 'vue-router'
import Scan from '@/components/Scan'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/scan',
      name: 'scan',
      component: Scan
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '*',
      redirect: '/scan'
    }
  ]
})
