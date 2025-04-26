import { createRouter, createWebHistory } from 'vue-router';
import Default from '@/layouts/Default.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
        {
            path: '/',
            redirect: '/dashboard',
            component: Default,
            meta: { isAuth: true},
            children: [
                //Dashboard Route
                { path: '/dashboard', name: 'dashboard', component: () => import('@/views/Dashboard.vue')},

                //Unit Route
                { path: '/unit', name: 'unit.vue', component: () => import('@/views/Unit/Unit.vue')},
                { path: '/unit/edit/:id', name: 'unit.edit', component: () => import('@/views/Unit/Edit.vue')},

                //Category Route
                // { path: '/category', name: 'category.index', component: () => import('@/views/Category/Index.vue')},
                // { path: '/category/create', name: 'category.create', component: () => import('@/views/Category/Create.vue')},
                // { path: '/category/edit/:id', name: 'category.edit', component: () => import('@/views/Category/Edit.vue')},

            ]
        },
        {
            path: '/auth',
            redirect: '/login',
            component: AuthLayout,
            meta: {isGuest: true},
            children: [
                { path: '/login', name: 'login', component: () => import('@/views/Auth/Login.vue')}
            ]
        },
    ],
})

//Middleware
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth && !localStorage.getItem('token')) {
        next({name: 'login'});
    } else if(to.meta.isGuest && localStorage.getItem('token')) {
        next({name: 'dashboard'})
    } else {
        next();
    }
}) 

export default router
