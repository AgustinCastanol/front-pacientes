import { createRouter, createWebHistory } from 'vue-router';

import inicio from './pages/inicio.vue'
import Table from './pages/Table.vue';

const routes = [
  {
    path: '/inicio',
    component: inicio
  },
  {
    path: '/Table',
    component: Table
  },
  {
    path: '/TableConsultation',
    component: TableConsultation
  },
 
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
