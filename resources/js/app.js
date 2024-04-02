import './bootstrap';
import { createApp } from "vue/dist/vue.esm-bundler";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'vue3-carousel/dist/carousel.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import App from "./App.vue";
import router from "./router/routes.js";

// import templates
import TemplateWebsite from "./templates/TemplateWebsite.vue";
import TemplateAuth from "./templates/TemplateAuth.vue";

// import layout
import HeaderComponent from "./components/home/layout/HeaderComponent.vue";

// import component
import ErrorAuthComponent from "./components/ErrorAuthComponent.vue";

const app = createApp(App);

// use templates
app.component('template-website', TemplateWebsite);
app.component('template-auth', TemplateAuth);
app.component('error-auth', ErrorAuthComponent);
app.component('HeaderComponent', HeaderComponent);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(router);
app.use(ElementPlus);
app.mount('#app');
