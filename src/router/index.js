import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        },
        {
            path: "/lerf",
            name: "online version",
            component: () => import("../views/lerf.vue")
        },
        {
            path: "/download",
            name: "download",
            component: () => import("../views/download.vue")
        }
    ]
})

export default router
