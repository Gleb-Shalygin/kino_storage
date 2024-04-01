import { createRouter, createWebHistory } from 'vue-router';
import { isAuth } from "../functions/auth.js";
import PageHome from "../pages/site/PageHome.vue";
import PageNews from "../pages/site/PageNews.vue";
import PageSearch from "../pages/site/PageSearch.vue";
import PagePost from "../pages/site/PagePost.vue";
import PageLogin from "../pages/site/account/PageLogin.vue";
import PageRegister from "../pages/site/account/PageRegister.vue";
import PageProfile from "../pages/site/account/PageProfile.vue";

const routes = [
    {
        path: '/',
        component: PageHome
    },
    {
        path: '/search',
        component: PageSearch,
        name: 'search'
    },
    {
        path: '/posts',
        component: PageNews,
        name: 'posts',
    },
    {
        path: '/posts/show-post',
        component: PagePost,
        name: 'posts.show-post'
    },
    {
        path: '/login',
        component: PageLogin,
        name: 'login'
    },
    {
        path: '/register',
        component: PageRegister,
        name: 'register'
    },
    {
        path: '/account/profile',
        component: PageProfile,
        name: 'account.profile',
        beforeEnter:(to, from, next) => {
            next(isAuth(to, from, next));
        }
    }
];

const router = createRouter({ history: createWebHistory(), routes });
// Общая проверка
// router.beforeEach((to, from, next) => {

    // const token = localStorage.getItem('x_xsrf_token');

    // if (!token) {
    //     if (to.name === 'login' || to.name === 'register') {
    //         return next();
    //     } else {
    //         return next({ name: 'login' });
    //     }
    // }
    //
    // if (to.name === 'login' || to.name === 'registration' && token) {
    //     return next({ name: 'account.profile' });
    // }
    //
    // next();
// });


export default router;
