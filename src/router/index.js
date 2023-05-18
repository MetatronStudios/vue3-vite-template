import { createRouter, createWebHistory } from 'vue-router';
import MetatronLayout from '@/views/layout/layout.vue';

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '',
         redirect: '/home',
         name: 'root',
         component: MetatronLayout,
         children: [
            {
               path: '/home',
               name: 'home',
               // route level code-splitting
               // this generates a separate chunk (About.[hash].js) for this route
               // which is lazy-loaded when the route is visited.
               component: () => import('@/views/HomeView.vue'),
            },
            {
               path: '/about',
               name: 'about',
               component: () => import('@/views/AboutView.vue'),
            },
         ],
      },
   ],
});

export default router;
