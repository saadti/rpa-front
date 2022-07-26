import Vue from 'vue'
import vueRouter from 'vue-router'
import ListView from '../views/ListView.vue'
import SignupVisitant from '../views/pages/SignupVisitantPage.vue'

Vue.use(vueRouter)

const routes = [
  {
    path: '/',
    name: 'app',
    component: ListView
  },
  {
    path: '/signup',
    name: 'signupVisitant',
    component: SignupVisitant
  }
]
const router = new vueRouter({
  mode: 'history',
  routes
})
export default router