import Vue from 'vue'
import Router from 'vue-router'
import '@/common/css/style.css'

Vue.use(Router)

const routes = []
const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: routes
})

export default router
