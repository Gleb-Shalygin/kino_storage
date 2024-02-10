import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from "../HomeComponent.vue";
import MovieListComponent from "../site/MovieListComponent.vue";
import SearchComponent from "../site/SearchComponent.vue";
import ShowPost from "../site/ShowPost.vue";


const routes = [
    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/search',
        component: SearchComponent,
        name: 'search'
    },
    {
        path: '/posts',
        component: MovieListComponent,
        name: 'posts',
        // children: [
        //     {
        //         path: 'show-post',
        //         component: ShowPost
        //     }
        // ]
    },
    {
        path: '/posts/show-post',
        component: ShowPost,
        name: 'posts.show-post'
    }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router;
