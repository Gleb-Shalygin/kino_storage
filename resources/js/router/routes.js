import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from "../components/home/HomeComponent.vue";
import MovieListComponent from "../components/site/MovieListComponent.vue";
import SearchComponent from "../components/site/SearchComponent.vue";

const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/films',
        component: MovieListComponent,
        name: 'films'
    },
    {
        path: '/search',
        component: SearchComponent,
        name: 'search'
    }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router;
