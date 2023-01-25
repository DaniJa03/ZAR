import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/WelcomeView.vue'),
    },
    {
      path: '/eins',
      name: 'Eins',
      component: () => import('../views/EinsView.vue'),
    },
    {
      path: '/zwei',
      name: 'Zwei',
      component: () => import('../views/ZweiView.vue'),
    },
    {
      path: '/drei',
      name: 'Drei',
      component: () => import('../views/DreiView.vue'),
    },
    {
      path: '/vier',
      name: 'Vier',
      component: () => import('../views/VierView.vue'),
    },
    {
      path: '/ende',
      name: 'Ende',
      component: () => import('../views/EndeView.vue'),
    },
  ],
});

export default router;