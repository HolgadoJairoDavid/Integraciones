import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Descripcion from './components/Descripcion.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/descripcion',
        name: 'Descripcion',
        component: Descripcion,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router