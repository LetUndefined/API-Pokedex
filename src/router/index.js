import { createRouter, createWebHistory } from 'vue-router';

import MainLayout from '../layouts/MainLayout.vue';
import ListView from '@/views/ListView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [{
        path: '',
        name: 'Listview',
        component: ListView
      },
    {
      path: 'pokemon/:id',
      name: 'DetailView',
      component: () => import('@/views/DetailView.vue')
    }],
    },
  ],
});

export default router;
