import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuanLyGiaoDichView from '@/views/QuanLyGiaoDichView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/giao-dich/danh-sach',
            name: 'QuanLyGiaoDichView',
            component: QuanLyGiaoDichView
        }
    ]
})

export default router
