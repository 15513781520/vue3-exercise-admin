import { RouteRecordRaw } from 'vue-router'

const routes:  Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/recommend',
    },
    {
        path: '/recommend',
        component: () => import('views/Recommend/index.vue'),
    },
    {
        path: '/music-house',
        component: () => import('views/MusicHouse/index.vue'),
    },
];

export default routes;