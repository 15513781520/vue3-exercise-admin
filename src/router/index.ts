import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router';

const routes:  Array<RouteRecordRaw> = [

];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
})

export default router;