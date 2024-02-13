import { createRouter, createWebHistory } from 'vue-router';
import PageHome from "../pages/site/PageHome.vue";
import PageNews from "../pages/site/PageNews.vue";
import PageSearch from "../pages/site/PageSearch.vue";
import PagePost from "../pages/site/PagePost.vue";
import PageLogin from "../pages/site/account/PageLogin.vue";

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
    }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router;
