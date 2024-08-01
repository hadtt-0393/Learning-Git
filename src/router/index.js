import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../pages/login/LoginPage.vue"
import RegisterPage from "../pages/register/RegisterPage.vue";
import HomePage from "../pages/HomePage.vue";
import ErrorPage from "../pages/error/ErrorPage.vue";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
      },
      {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
      },
      {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
      },
      {
        path: '/:patchMatch(.*)*',
        name: 'ErrorPage',
        component: ErrorPage,
      }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;