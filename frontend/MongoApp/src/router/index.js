import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import patientsview from '@/views/PatientsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/patients',
      name: 'patients',
      component: patientsview
    }
    
  ]
})

export default router
