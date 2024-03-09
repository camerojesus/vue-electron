import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  // Utiliza createWebHashHistory en lugar de createWebHistory
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // La ruta hacia AboutView ahora se cargará de manera perezosa (lazy-loaded)
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router;
