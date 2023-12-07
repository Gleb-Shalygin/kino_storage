import './bootstrap';
import { createApp } from "vue/dist/vue.esm-bundler";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'vue3-carousel/dist/carousel.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import TestComponent from "./TestComponent.vue";
import HomeComponent from "./home/HomeComponent.vue";
import HeaderComponent from "./home/layout/HeaderComponent.vue";
import FooterComponent from "./home/layout/FooterComponent.vue";
import SearchComponent from "./site/SearchComponent.vue";
import MovieListComponent from "./site/MovieListComponent.vue";

const app = createApp({
    components: {
        TestComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        SearchComponent,
        MovieListComponent
    }
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus);
app.mount('#app');
