import { createRouter as createClientRouter, createWebHistory } from 'vue-router'

// Manage User Route
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/Home.vue'),
    
  },
  {
    path: '/tithes',
    name: 'tithes',
    component: () => import('@/pages/Categories/Tithes.vue'),
    
  },
  {
    path: '/car',
    name: 'car',
    component: () => import('@/pages/Categories/Car.vue'),
    
  },
  {
    path: '/home-facilities',
    name: 'home-facilities',
    component: () => import('@/pages/Categories/HomeFacilities.vue'),
    
  },
  {
    path: '/compliments-birthdays',
    name: 'compliments-birthdays',
    component: () => import('@/pages/Categories/ComplimentsBirthdays.vue'),
    
  },
  {
    path: '/exit-release',
    name: 'exit-release',
    component: () => import('@/pages/Categories/ExitRelease.vue'),
    
  },
  {
    path: '/other-houses',
    name: 'other-houses',
    component: () => import('@/pages/Categories/OtherHouses.vue'),
    
  },
  {
    path: '/analysis-doctors',
    name: 'analysis-doctors',
    component: () => import('@/pages/Categories/AnalysisDoctors.vue'),
    
  },
  {
    path: '/other-houses',
    name: 'other-houses',
    component: () => import('@/pages/Categories/OtherHouses.vue'),
    
  },
  {
    path: '/cairo',
    name: 'cairo',
    component: () => import('@/pages/Categories/Cairo.vue'),
    
  },
  {
    path: '/emergency',
    name: 'emergency',
    component: () => import('@/pages/Categories/Emergency.vue'),
  },
  {
    path: '/save',
    name: 'save',
    component: () => import('@/pages/Categories/Save.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/404.vue'),
  },
]

export function createRouter() {
  const router = createClientRouter({
    history: createWebHistory(),
    routes,
  })

  return router
}
export default createRouter()