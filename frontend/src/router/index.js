import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from "../components/DashboardPage"


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    },
    {
      path: '/',
      redirect: '/dashboard'
    }
  ]
})

export default router
