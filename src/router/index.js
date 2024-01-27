// Composables
import { createRouter, createWebHistory } from 'vue-router'
import AOS from "aos";
import 'aos/dist/aos.css';

const routes = [
  {

    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (Home-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/Home.vue')


      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/about.vue'),
      },
      {
        path: '/product',
        name: 'product',
        // route level code-splitting
        // this generates a separate chunk (about-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/product.vue'),
      },
      {
        path: '/cart',
        name: 'cart',
        // route level code-splitting
        // this generates a separate chunk (about-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/cart.vue'),
      },
      {
        path: '/signUp',
        name: 'signup',
        // route level code-splitting
        // this generates a separate chunk (about-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/signup.vue'),
      },
      {
        path: '/login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/login.vue'),
      },
      {
        path: '/favorites',
        name: 'favorites',
        // route level code-splitting
        // this generates a separate chunk (about-[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/views/favorites.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  AOS,
  routes,

})

router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});


export default router
