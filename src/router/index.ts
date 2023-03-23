import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/TabMap.vue')
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: 'carte'
      },
      // Carte
      {
        path: 'carte',
        component: () => import('@/views/TabMap.vue')
      },
      {
        path: 'liste',
        component: () => import('@/views/TabList.vue')
      },
      {
        path: 'aide',
        component: () => import('@/views/TabAide.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
